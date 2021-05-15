export interface Theme {
  main: string;
  paragraph: string;
  danger: string;
  flip: string;
  background: string;
  shadow: string;
  backgroundContrast: string;
  focus: string;
  border: string;
  buttonShadow: string;
}

const dark: Theme = {
  main: '#313C60',
  paragraph: '#262835',
  danger: '#FB6376',
  flip: '#FBFBFB',
  background: '#FBFBFB',
  shadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
  buttonShadow: 'rgba(0, 0, 0, 0.1) 0px 0 5px 1px;',
  backgroundContrast: '#FFFFFF',
  focus: '#F7F8FC',
  border: '#f0f0f0',
};

const day: Theme = {
  main: '#4D4DFF',
  paragraph: '#262835',
  danger: '#FB6376',
  flip: '#FBFBFB',
  background: '#FBFBFB',
  shadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
  buttonShadow: 'rgba(0, 0, 0, 0.1) 0px 0 5px 1px;',
  backgroundContrast: '#FFFFFF',
  focus: '#F7F8FC',
  border: '#f0f0f0',
};

export const themes = {
  dark,
  day,
};
