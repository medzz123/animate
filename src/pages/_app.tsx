import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';

import Box from '../components/Box';
import Header from '../components/Header';
import Settings from '../components/Settings';
import Animate from '../pages/Animate';
import Browse from '../pages/Browse';
import Home from '../pages/Home';
import TestingGrounds from '../pages/TestingGrounds';
import { GlobalStyle } from '../theme/globalStyles';
import { useThemeController } from '../theme/themeController';

const App = () => {
  const themeController = useThemeController();
  return (
    <Router>
      <ThemeProvider theme={themeController.theme}>
        <ToastProvider
          autoDismiss={true}
          placement="bottom-center"
          autoDismissTimeout={2000}
        >
          <GlobalStyle />
          {themeController.mounted && (
            <>
              <Header />
              <Box padding={24} paddingTop={0} display="block">
                <div>
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
                    <Route path="/testing-grounds">
                      <TestingGrounds />
                    </Route>
                  </Switch>
                </div>
              </Box>
              <Settings themeController={themeController} />
            </>
          )}
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
