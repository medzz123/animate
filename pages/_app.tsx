import Header from '@components/Header';
import { GlobalStyle } from '@theme/globalStyles';
import { theme } from '@theme/theme';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
