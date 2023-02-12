import React from 'react'
import { AiFillDelete, AiOutlineEdit,  } from "react-icons/ai";
import { IoIosDoneAll } from 'react-icons/io'
import { CLIENT_RENEG_LIMIT } from 'tls';
import { Todo } from '../todoModel';
interface Props {
  todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[];
}
const SingleTodo = ({todo}:Props) => {
    
  return (
    <div>SingleTodo</div>
  )
}

export default SingleTodo