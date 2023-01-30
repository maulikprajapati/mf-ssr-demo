import React from 'react';
import './App.scss';
import './styles/globals.scss';

import { dynamicTheme as defaultTheme } from 'ui/foundations';
import { MuiThemeProvider } from 'providers/MuiThemeProvider';
import { ToastProvider } from 'providers/ToastProvider';
import { useApollo } from 'graphql-client/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { AppWrapper } from 'providers/AppProvider';
import Router from './routes';

function App() {
  const apolloClient = useApollo();

  return (
    <ApolloProvider client={apolloClient}>
      <AppWrapper>
        <MuiThemeProvider dynamicTheme={defaultTheme}>
          {/* Theme can change at run time (with help of either context or store) */}
          <ToastProvider>
            <Router />
          </ToastProvider>
        </MuiThemeProvider>
      </AppWrapper>
    </ApolloProvider>
  );
}

export default App;
