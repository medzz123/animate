import { select } from '@storybook/addon-knobs';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/theme/globalStyles';
import { themes } from '../src/theme/theme';

const themeNames = Object.keys(themes);

const ThemeKnob = ({ children }) => {
  const theme = select('Theme', themeNames, themeNames[0]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Router>
        <div style={{ padding: 20 }}>{children}</div>
      </Router>
    </ThemeProvider>
  );
};

const themeDecorator = (storyFn) => <ThemeKnob>{storyFn()}</ThemeKnob>;

export default themeDecorator;
