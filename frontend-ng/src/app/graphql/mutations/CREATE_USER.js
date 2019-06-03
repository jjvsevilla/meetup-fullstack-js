import gql from "graphql-tag";
const CREATE_USER = gql`
  mutation createUser(
    $name: String!,
    $isAlive: Boolean!
  ) {
    createUser(
      data: {
        name: $name,
        isAlive: $isAlive
      }
    ) {
      id
      name
      isAlive
    }
  }
`;

export default CREATE_USER;
