import { useState } from 'react';

/** Controlled-or-uncontrolled state: uses `value` when defined, else internal state. */
export function useControllable<T>(value: T | undefined, defaultValue: T, onChange?: (v: T) => void): [T, (v: T) => void] {
  const [inner, setInner] = useState<T>(defaultValue);
  const current = value !== undefined ? value : inner;
  const set = (v: T) => { if (value === undefined) setInner(v); onChange?.(v); };
  return [current, set];
}
