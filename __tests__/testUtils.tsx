import { IdProvider } from '@radix-ui/react-id';
import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';

import { DialogProvider, initDialogContext } from '../src/state/dialogs';
import { themes } from '../src/theme/theme';

/**
 * Includes all the providers required for testing.
 */
const AllTheProviders: FC = ({ children }) => {
  const dialogProviderValues = initDialogContext();

  return (
    <ThemeProvider theme={themes.dark}>
      <IdProvider>
        <ToastProvider
          autoDismiss={true}
          placement="bottom-center"
          autoDismissTimeout={2000}
        >
          <DialogProvider value={dialogProviderValues}>
            <Router>{children}</Router>
          </DialogProvider>
        </ToastProvider>
      </IdProvider>
    </ThemeProvider>
  );
};

/**
 * Creates custom render which contains the providers
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

/**
 * Re exports normal testing library and custom render, as the normal render
 */
export { customRender as render };
