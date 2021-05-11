export interface Theme {
  background: string;
  headline: string;
  paragraph: string;
  button: string;
  buttonText: string;
}

const dark: Theme = {
  background: '#121212',
  headline: '#ffffff',
  paragraph: '#ffffff',
  button: '#115293',
  buttonText: `#ffffff`,
};

const day: Theme = {
  background: '#FBFBFB',
  headline: '#262835',
  paragraph: '#262835',
  button: '#262835',
  buttonText: '#ffffff',
};

export const themes = {
  dark,
  day,
};
