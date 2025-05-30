import { useState, useEffect, useRef } from "react";
import type { Observable } from "rxjs";

type UseObservableResult<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
};

export const useObservable = <T>(
  o$: Observable<T>,
  defaultValue: T | undefined = undefined,
): UseObservableResult<T> => {
  const [data, setData] = useState<T | undefined>(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const madeFirstRun = useRef(false);

  useEffect(() => {
    const subscription = o$.subscribe({
      next: (data) => {
        if (!madeFirstRun.current) {
          madeFirstRun.current = true;
          setLoading(false);
        }

        setData(data);
      },
      error: (error) => setError(error),
      complete: () => setLoading(false),
    });

    return () => subscription.unsubscribe();
  }, [o$]);

  return {
    data,
    loading,
    error,
  };
};
