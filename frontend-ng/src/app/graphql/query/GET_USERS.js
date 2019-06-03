import gql from 'graphql-tag';
const GET_USERS = gql`
  query users ($isAlive: Boolean) {
    users(where: {
      isAlive: $isAlive
    }) {
      id
      name
    }
  }
`;
export default GET_USERS
