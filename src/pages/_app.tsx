import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';

import Box from '../components/Box';
import Header from '../components/Header';
import Settings from '../components/Settings';
import { GlobalStyle } from '../theme/globalStyles';
import { useThemeController } from '../theme/themeController';
import Animate from './Animate';
import Browse from './Browse';
import Help from './Help';
import Home from './Home';

const App = () => {
  const themeController = useThemeController();
  const location = useLocation();
  return (
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
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/help">
                      <Help />
                    </Route>
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
                </AnimatePresence>
              </div>
            </Box>
            <Settings themeController={themeController} />
          </>
        )}
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
