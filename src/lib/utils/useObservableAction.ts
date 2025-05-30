import { useCallback, useState } from "react";
import type { Observable } from "rxjs";

type UseObservableActionResult<T> = [
  execute: () => void,
  { loading: boolean; error: Error | undefined; data: T | undefined }
];

export const useObservableAction = <T>(
  action: () => Observable<T>
): UseObservableActionResult<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const execute = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setData(undefined);

    action().subscribe({
      next: (data) => setData(data),
      error: (error) => setError(error),
      complete: () => setLoading(false),
    });
  }, [action]);

  return [execute, { loading, error, data }];
};
