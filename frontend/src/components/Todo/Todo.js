import React from 'react'

function Todo(props) {
  const {id, person, task, done, onChange, onRemove} = props
  const handleOnChange = () => onChange({id, person, task, done})
  const handleOnRemove = () => onRemove({id})

  return (
    <div>
      <label htmlFor={id}>
        <input
          type="checkbox"
          checked={done}
          onChange={handleOnChange}
          id={id}
        />
        <strong>{person}</strong>: {task}
      </label>
      <button onClick={handleOnRemove}>x</button>
    </div>
  )
}

export default Todo