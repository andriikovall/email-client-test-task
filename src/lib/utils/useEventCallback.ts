import { useLayoutEffect, useMemo, useRef } from "react";

type Fn<TArgs extends unknown[], TRes> = (...args: TArgs) => TRes;

/**
 * The motivation is to avoid re-creating the function on every render and be able to pass
 * it as an event handler. https://dev.to/haseeb1009/the-useevent-hook-1c8l
 * 
 * Implementation taken from https://github.com/Volune/use-event-callback/blob/master/src/index.ts
 */
export const useEventCallback = <TArgs extends unknown[], TRes>(
  fn: Fn<TArgs, TRes>
): Fn<TArgs, TRes> => {
  const ref = useRef<Fn<TArgs, TRes>>(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  return useMemo(
    () =>
      (...args: TArgs): TRes => {
        const { current } = ref;
        return current(...args);
      },
    []
  );
};
