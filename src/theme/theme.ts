export interface Theme {
  black: string;
  white: string;
  accent: string;
  background: string;
}

const light: Theme = {
  black: '#000000',
  white: '#ffffff',
  accent: '#FF3366',
  background: '#e9ecef',
};

const dark: Theme = {
  black: '#ffffff',
  white: '#000000',
  accent: '#FF3366',
  background: '#263238',
};

const green: Theme = {
  black: '#ffffff',
  white: '#000000',
  accent: '#1de9b6',
  background: '#263238',
};

const blue: Theme = {
  black: '#ffffff',
  white: '#000000',
  accent: '#2979ff',
  background: '#263238',
};

export const themes = {
  light,
  dark,
  green,
  blue,
};
