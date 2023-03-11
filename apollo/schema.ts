import { Neo4jGraphQL } from '@neo4j/graphql';
import neo4j from 'neo4j-driver';

import typeDefs from 'apollo/type-defs';

const { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD } = process.env;

const driver =
  NEO4J_URI && NEO4J_USER && NEO4J_PASSWORD
    ? neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD))
    : undefined;

const schema = new Neo4jGraphQL({
  typeDefs,
  driver,
});

export default schema;
