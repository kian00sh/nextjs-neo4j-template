import { useMemo } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { createClient } from 'apollo/client';

export const useApollo = (
  initialState?: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> =>
  useMemo(() => createClient(initialState), [initialState]);
