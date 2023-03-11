import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import merge from 'deepmerge';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createClient = (
  initialState?: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient =
    apolloClient ??
    new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link:
        typeof window === 'undefined'
          ? new SchemaLink({ schema: require('./schema') })
          : createHttpLink({
              uri: '/api/graphql',
              credentials: 'same-origin',
            }),
      cache: new InMemoryCache(),
    });

  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache);

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
