import { IdProvider } from '@radix-ui/react-id';
import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';

import { themes } from '../src/theme/theme';

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={themes.dark}>
    <IdProvider>
      <ToastProvider
        autoDismiss={true}
        placement="bottom-center"
        autoDismissTimeout={2000}
      >
        <Router>{children}</Router>
      </ToastProvider>
    </IdProvider>
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
