import { render, RenderOptions } from '@testing-library/react';
import { lightTheme } from '@theme/theme';
import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
