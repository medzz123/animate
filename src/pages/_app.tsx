import { GlobalStyle } from "@theme/globalStyles";
import { theme } from "@theme/theme";
import { ThemeProvider } from "styled-components";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
