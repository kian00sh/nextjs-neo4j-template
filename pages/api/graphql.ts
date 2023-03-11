import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import schema from 'apollo/schema';

const server = async (): Promise<ApolloServer> =>
  new ApolloServer({ schema: await schema.getSchema() });

export default startServerAndCreateNextHandler(await server());
