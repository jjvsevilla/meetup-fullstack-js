require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
// const db = require('./prisma-db');

const graphQLServer = createServer();

graphQLServer.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  callbackOptions => {
    console.log(`GraphQL Server is now running on port http://localhost:${callbackOptions.port}`);
  }
);
