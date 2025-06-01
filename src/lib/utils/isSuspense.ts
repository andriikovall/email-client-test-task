import { SUSPENSE } from "@rx-state/core";

export const isSuspense = <T>(
  value: T | SUSPENSE
): value is SUSPENSE => value === SUSPENSE;
