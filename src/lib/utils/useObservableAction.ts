import { useCallback, useState } from "react";
import { firstValueFrom, type Observable } from "rxjs";
import { useEventCallback } from "./useEventCallback";

type UseObservableActionResult<TArgs extends unknown[], TRes> = [
  execute: (...args: TArgs) => Promise<TRes>,
  { loading: boolean; error: Error | undefined; data: TRes | undefined }
];

export const useObservableAction = <TArgs extends unknown[], TRes>(
  action: (...args: TArgs) => Observable<TRes>
): UseObservableActionResult<TArgs, TRes> => {
  const [data, setData] = useState<TRes | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  // this will always be safe to put in the hook dependencies
  const actionCallback = useEventCallback(action);

  const execute = useCallback(
    (...args: TArgs) => {
      setLoading(true);
      setError(undefined);
      setData(undefined);

      return firstValueFrom(actionCallback(...args))
        .then((res) => {
          setData(res);
          return res;
        })
        .catch((err) => {
          setError(err);
          throw err;
        })
        .finally(() => setLoading(false));
    },
    [actionCallback]
  );

  return [execute, { loading, error, data }];
};
