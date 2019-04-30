const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/mutation');
const Query = require('./resolvers/query');
const db = require('./prisma-db');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql', // graphql-yoga type definition schema
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }),
  });
}

module.exports = createServer;