import { useCallback, useEffect, useState } from 'react';

import { themes } from './theme';

export const useThemeController = () => {
  const [state, setState] = useState(() => {
    return localStorage.getItem('theme') === 'true' ? true : false;
  });

  const [mounted, setMounted] = useState(false);

  const toggleTheme = useCallback(() => {
    setState((s) => {
      const flip = !s;
      localStorage.setItem('theme', flip.toString());
      return flip;
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme: state ? themes.dark : themes.day,
    state,
    mounted,
    toggleTheme,
  };
};

export type ThemeController = ReturnType<typeof useThemeController>;
