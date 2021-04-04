import Box from '@components/Box';
import Header from '@components/Header';
import Settings from '@components/Settings';
import { GlobalStyle } from '@theme/globalStyles';
import { useThemeController } from '@theme/themeController';
import Head from 'next/head';
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }) => {
  const themeController = useThemeController();
  return (
    <ThemeProvider theme={themeController.theme}>
      <ToastProvider
        autoDismiss={true}
        placement="bottom-center"
        autoDismissTimeout={2000}
      >
        <Head>
          <title>Animate</title>
          <meta name="description" content="Dead simple css animations tool" />
          <meta name="keywords" content="HTML, CSS, Keyframes, Animation" />
          <meta name="author" content="Medz123" />
        </Head>
        <GlobalStyle />
        {themeController.mounted && (
          <>
            <Header />
            <Box padding={24} paddingTop={0} display="block">
              <Component {...pageProps} />
            </Box>
            <Settings themeController={themeController} />
          </>
        )}
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
