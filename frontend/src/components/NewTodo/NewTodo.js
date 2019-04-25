import React, {Component} from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.personInput = React.createRef();
  }

  state = {
    person: '',
    task: ''
  }

  handleChange = e => {
    const { target: { value, name} } = e
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { person, task } = this.state

    this.props.add({
      id: Date.now().toString(),
      person,
      task,
      done: false
    })

    this.setState({ person: '', task: ''})
    this.personInput.current.focus();
  }

  render() {
    const { person, task } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>New Todo</h3>
        <div>
            <input
              name="person"
              type="text"
              ref={this.personInput}
              placeholder="person"
              value={person}
              onChange={this.handleChange}
            />
        </div>
        <div>
          <input
              name="task"
              type="text"
              placeholder="task"
              value={task}
              onChange={this.handleChange}
            />
        </div>
        <div>
          <button type='submit'>Add todo</button>
        </div>
      </form>
    )
  }
}

export default NewTodo