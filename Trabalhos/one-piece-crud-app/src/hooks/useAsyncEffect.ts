import { useEffect } from 'react';

// Pequeno helper para efeitos assíncronos
export function useAsyncEffect(effect: () => Promise<void> | void, deps: React.DependencyList) {
  useEffect(() => {
    void effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
