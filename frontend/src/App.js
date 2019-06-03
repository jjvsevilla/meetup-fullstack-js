import React from 'react';
import './App.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CreateUser from './components/CreateUser/CreateUser';
import Users from './components/Users/Users';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h2 className="app-title">React + Apollo Client + GraphQL Yoga + Prisma</h2>
        <div className="half-container">
          <CreateUser />
        </div>
        <div className="half-container">
          <Users />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
