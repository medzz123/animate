import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

/**
 * Partial code from the internet
 *
 * Gets an element and runs some code whenever
 * resize event has been called on that element
 */
export const useBox = () => {
  const ref = useRef(null);
  const [box, setBox] = useState<number>(0);

  const set = () => {
    const boundingClient = ref?.current?.getBoundingClientRect();
    setBox(boundingClient?.width || 0);
  };

  useEffect(() => {
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  return [box, ref];
};
