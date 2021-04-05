import { IdProvider } from '@radix-ui/react-id';
import { render, RenderOptions } from '@testing-library/react';
import { themes } from '@theme/theme';
import React, { FC, ReactElement } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={themes.light}>
    <IdProvider>
      <ToastProvider
        autoDismiss={true}
        placement="bottom-center"
        autoDismissTimeout={2000}
      >
        {children}
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
