/**
 * IMPORTS
 */

import { useState, useEffect } from "react";

// Hook de debounce para atrasar a atualização do valor
function useDebounceCustom(value: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpa o timeout se o valor ou o delay mudarem
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * EXPORTS
 */
export { useDebounceCustom };
