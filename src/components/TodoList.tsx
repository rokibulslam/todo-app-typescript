import React from 'react'
import { Todo } from '../todoModel'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({todos, setTodos}:Props) => {
  return (
      <div className='todos'>
          {todos.map((todo, index) => (<li>{todo.id}</li>))}
    </div>
  )
}

export default TodoList