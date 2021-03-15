const defaultTheme = {
  beige: '#f9efe7',
  black: '#000000',
  white: '#ffffff',
  highlighter: '#ffe872',
  gray: '#b7b4b9',
};

const dark: typeof defaultTheme = {
  beige: '#1B1F3B',
  black: '#F6F7F8',
  white: '#141414',
  highlighter: '#FF3366',
  gray: '#b7b4b9',
};

export const darkTheme = { ...dark };
export const lightTheme = { ...defaultTheme };
