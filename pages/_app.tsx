import Box from '@components/Box';
import Header from '@components/Header';
import Settings from '@components/Settings';
import { GlobalStyle } from '@theme/globalStyles';
import { darkTheme, lightTheme } from '@theme/theme';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

const App = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);

  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Animate</title>
        <meta name="description" content="Dead simple css animations tool" />
        <meta name="keywords" content="HTML, CSS, Keyframes, Animation" />
        <meta name="author" content="Medz123" />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        {isMounted && (
          <>
            <Header />
            <Settings darkMode={darkMode} />
            <Box padding={16} display="block">
              <Component {...pageProps} />
            </Box>
          </>
        )}
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
