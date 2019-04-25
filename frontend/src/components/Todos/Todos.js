import React from 'react'
import Todo from '../Todo/Todo';

function Todos(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <ul>
        {props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              onChange={props.toggle}
              onRemove={props.remove}
            />
          )
        })}
      </ul>
    </>
  )
}

export default Todos