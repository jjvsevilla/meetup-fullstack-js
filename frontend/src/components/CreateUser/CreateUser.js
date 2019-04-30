import React, {Component} from 'react'
import { Mutation } from 'react-apollo'
import GET_USERS from '../../graphql/query/GET_USERS';
import CREATE_USER from './../../graphql/mutations/CREATE_USER';

class CreateUser extends Component {
  state = {
    name: "",
    isAlive: true
  };

  updateName = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  updateIsAlive = ({ target: { checked } }) => {
    this.setState({ isAlive: checked });
  };

  resetFields = () => {
    this.setState({ name: "", isAlive: true });
  };

  render() {
    return (
      <>
        <h3>Add New User</h3>
        <Mutation
          mutation={CREATE_USER}
          refetchQueries={[
            {
              query: GET_USERS,
              variables: { isAlive: false }
            },
            {
              query: GET_USERS,
              variables: { isAlive: true }
            }
          ]}
          awaitRefetchQueries={true}
        >
          {(createUser, { loading, error }) => (
            <form
              onSubmit={evt => {
                evt.preventDefault();
                createUser({
                  variables: {
                    name: this.state.name,
                    isAlive: this.state.isAlive
                  }
                });
                this.resetFields();
              }}
            >
              <div>
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.updateName}
                  />
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.isAlive}
                    onChange={this.updateIsAlive}
                  />
                  <span>Is Alive?</span>
                </label>
              </div>
              <div>
                <button>Add User</button>
              </div>

              {loading && <p>Adding a new user...</p>}
              {error && <p>Something went wrong!</p>}
            </form>
          )}
        </Mutation>

      </>
    );
  }
}

export default CreateUser