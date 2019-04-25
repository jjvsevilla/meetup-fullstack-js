import React, {Component} from 'react'
import NewTodo from '../NewTodo/NewTodo';
import Todos from '../Todos/Todos';

class TodoContainer extends Component {
  state = {
    todos: []
  }

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleTodo = todo => {
    const updatedTodo = {...todo, done: !todo.done}
    const todos = this.state.todos.map(t => (
      t.id !== todo.id ? t : updatedTodo
    ))
    this.setState({todos})
  }

  removeTodo = todo => {
    const todos = this.state.todos.filter(t => t.id !== todo.id)
    this.setState({todos})
  }

  render() {
    const todoList = this.state.todos.filter(t => !t.done)
    const doneList = this.state.todos.filter(t => t.done)

    return (
      <>
        <h1>Todo Container</h1>
        <NewTodo
          value={this.state.todo}
          onChange={this.handleOnChange}
          add={this.addTodo}
        />
        <Todos
          title="TODO LIST"
          todos={todoList}
          toggle={this.toggleTodo}
          remove={this.removeTodo}
        />
        <Todos
          title="DONE LIST"
          todos={doneList}
          toggle={this.toggleTodo}
          remove={this.removeTodo}
        />
      </>
    )
  }
}

export default TodoContainer