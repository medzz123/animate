import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Header from '../components/Header';
import Settings from '../components/Settings';
import Unsupported from '../components/Unsupported';
import Animate from '../pages/Animate';
import Browse from '../pages/Browse';
import Home from '../pages/Home';
import { DialogProvider, initDialogContext } from '../state/dialogs';
import { GlobalStyle } from '../theme/globalStyles';
import { useThemeController } from '../theme/themeController';
import { tokens } from '../theme/tokens';

const Container = styled.div`
  flex: 1;
  max-width: ${tokens.sizes['7xl']};
  margin: 0 auto;
  padding: 0 ${tokens.sizes[20]};
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const themeController = useThemeController();
  const dialogProviderValues = initDialogContext();
  return (
    <Router>
      <ThemeProvider theme={themeController.theme}>
        <ToastProvider
          autoDismiss={true}
          placement="bottom-center"
          autoDismissTimeout={2000}
        >
          <DialogProvider value={dialogProviderValues}>
            <GlobalStyle />
            {themeController.mounted && (
              <Container>
                <Unsupported />
                <Header />
                <main>
                  <Switch>
                    <Route path="/browse">
                      <Browse />
                    </Route>
                    <Route path="/animate">
                      <Animate />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </main>
              </Container>
            )}
            <Settings themeController={themeController} />
          </DialogProvider>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
