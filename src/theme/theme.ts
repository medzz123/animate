export interface Theme {
  background: string;
  headline: string;
  paragraph: string;
  button: string;
  buttonText: string;
  somethingNew: NewTheme;
}

interface NewTheme {
  main: string;
  paragraph: string;
  danger: string;
  flip: string;
  background: string;
  shadow: string;
  backgroundContrast: string;
  focus: string;
  outline: string;
  border: string;
}

const dark: Theme = {
  background: '#121212',
  headline: '#ffffff',
  paragraph: '#ffffff',
  button: '#115293',
  buttonText: `#ffffff`,
  somethingNew: {
    main: '#313C60',
    paragraph: '#262835',
    danger: '#FB6376',
    flip: '#FBFBFB',
    background: '#FBFBFB',
    shadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    backgroundContrast: '#FFFFFF',
    focus: '#F7F8FC',
    outline: '#2D3047',
    border: '#f0f0f0',
  },
};

const day: Theme = {
  background: '#FBFBFB',
  headline: '#262835',
  paragraph: '#262835',
  button: '#262835',
  buttonText: '#ffffff',
  somethingNew: {
    main: '#313C60',
    paragraph: '#262835',
    danger: '#FB6376',
    flip: '#FBFBFB',
    background: '#FBFBFB',
    shadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    backgroundContrast: '#FFFFFF',
    focus: '#F7F8FC',
    outline: '#2D3047',
    border: '#f0f0f0',
  },
};

export const themes = {
  dark,
  day,
};
