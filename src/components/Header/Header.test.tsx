import { theme } from '@theme/theme';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import Header from './Header';

describe('<Header />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
