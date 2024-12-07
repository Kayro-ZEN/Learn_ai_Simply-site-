import { useCallback, useRef } from 'react';

export function useMemoizedCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: any[]
): T {
  const ref = useRef<T>(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback, ...deps]);

  return useCallback((...args: Parameters<T>) => {
    return ref.current(...args);
  }, []) as T;
}