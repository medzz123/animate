const defaultTheme = {
  black: '#000000',
  white: '#ffffff',
  accent: '#FF3366',
  highlight: '#1de9b6',
  background: '#11171a',
};

const dark: typeof defaultTheme = {
  black: '#ffffff',
  white: '#000000',
  accent: '#FF3366',
  highlight: '#1de9b6',
  background: '#E6AF2E',
};

export const darkTheme = { ...dark };
export const lightTheme = { ...defaultTheme };
