import { select } from '@storybook/addon-knobs';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/theme/globalStyles';
import { themes } from '../src/theme/theme';
import { DialogProvider, initDialogContext } from '../src/state/dialogs';


const themeNames = Object.keys(themes);

const Providers = ({ children }) => {
  const theme = select('Theme', themeNames, themeNames[0]);
  const dialogProviderValues = initDialogContext();

  return (
    <ThemeProvider theme={themes[theme]}>
      <ToastProvider
        autoDismiss={true}
        placement="bottom-center"
        autoDismissTimeout={2000}
      >
        <DialogProvider value={dialogProviderValues}>
          <GlobalStyle />
          <Router>
            <div style={{ padding: 20 }}>{children}</div>
          </Router>
        </DialogProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

const providersDecorator = (storyFn) => <Providers>{storyFn()}</Providers>;

export default providersDecorator;
