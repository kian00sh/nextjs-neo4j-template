import type { AppProps } from 'next/app';
import { FC } from 'react';

import { ApolloProvider, ThemeProvider } from 'providers';
import 'styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider initialState={pageProps.initialApolloState}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
