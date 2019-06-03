import React, { Component } from 'react'
import { Query } from 'react-apollo';
import GET_USERS from './../../graphql/query/GET_USERS';

class Users extends Component {
  state = {
    isAlive: true
  };

  updateIsAlive = ({ target: { checked } }) => {
    this.setState({ isAlive: checked });
  };

  render() {
    return (
      <>
        <h3>User List</h3>
        <div>
          <label>
            <span>Filter users by: <b>isAlive</b></span>
            <input
              type="checkbox"
              checked={this.state.isAlive}
              onChange={this.updateIsAlive}
            />
          </label>
        </div>

        <Query
          query={GET_USERS}
          variables={{ isAlive: this.state.isAlive }}
          // pollInterval={3000}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading users...</p>;
            if (error) return <p>Something went wrong!</p>;

            const users = data.users.map(({id, name}) => (<ul key={id}>
                <li>{name}</li>
              </ul>
            ));

            return (users)
          }}
        </Query>
      </>
    )
  }
}

export default Users