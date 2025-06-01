import { SUSPENSE } from "@rx-state/core";
import { filter, Observable, type OperatorFunction } from "rxjs";
import { isSuspense } from "../isSuspense";

export const filterSuspense =
  <T>() =>
  (source$: Observable<T | SUSPENSE>): Observable<Exclude<T, SUSPENSE>> => {
    return source$.pipe(filter((value) => !isSuspense(value)) as OperatorFunction<T | SUSPENSE, Exclude<T, SUSPENSE>>);
  };
