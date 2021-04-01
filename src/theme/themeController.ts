import { useCallback, useEffect, useState } from 'react';

import { themes } from './theme';

export const useThemeController = () => {
  const [state, setState] = useState('dark');

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setState(localStorage.getItem('theme'));
    }
  }, []);

  const [mounted, setMounted] = useState(false);

  const setTheme = useCallback((themeName: string) => {
    localStorage.setItem('theme', themeName);

    setState(themeName);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme: themes[state] || themes.light,
    themeName: state,
    mounted,
    setTheme,
  };
};

export type ThemeController = ReturnType<typeof useThemeController>;
