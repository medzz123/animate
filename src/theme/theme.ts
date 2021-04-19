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
  background: '#ffffff',
  headline: '#121212',
  paragraph: '#121212',
  button: '#446DF6',
  buttonText: '#ffffff',
};

export const themes = {
  dark,
  day,
};
