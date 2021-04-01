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

  useEffect(() => {
    setMounted(true);
  }, []);

  const setTheme = useCallback((themeName: string) => {
    localStorage.setItem('theme', themeName);

    setState(themeName);
  }, []);

  return {
    theme: themes[state] || themes.light,
    themeName: state,
    mounted,
    setTheme,
  };
};

export type ThemeController = ReturnType<typeof useThemeController>;
