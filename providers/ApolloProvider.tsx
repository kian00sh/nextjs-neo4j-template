import { FC, ReactNode } from 'react';
import {
  ApolloProvider as Provider,
  NormalizedCacheObject,
} from '@apollo/client';

import { useApollo } from 'hooks/useApollo';

interface Props {
  initialState?: NormalizedCacheObject;
  children: ReactNode;
}

const ApolloProvider: FC<Props> = ({ initialState, children }) => {
  const apolloClient = useApollo(initialState);

  return <Provider client={apolloClient}>{children}</Provider>;
};

export default ApolloProvider;
