import { useState } from 'react'; // ✅ Import al inicio

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        if (valueToStore === null) window.localStorage.removeItem(key);
        else window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch {}
  };

  return [storedValue, setValue];
}