import { select } from '@storybook/addon-knobs';
import React from 'react';
import  { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/theme/globalStyles';
import * as themes from '../src/theme/theme';

const themeNames = Object.keys(themes);

const ThemeKnob = ({ children }) => {
  const theme = select('Theme', themeNames, themeNames[0], 'Themes');

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <div style={{padding: 20}}>
      {children}
      </div>
    </ThemeProvider>
  );
};

const themeDecorator = (storyFn) => <ThemeKnob>{storyFn()}</ThemeKnob>;

export default themeDecorator;
