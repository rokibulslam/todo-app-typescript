import React, { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { IoIosDoneAll } from "react-icons/io";
import { Todo } from "../todoModel";
import "./styles.css";
interface Props {
  
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}
const SingleTodo = ({  todo, setTodos, todos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };
  const handleUpdate = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (

        <form
          className="todo-single"
          onSubmit={(e) => {
            handleUpdate(e, todo.id);
          }}
          
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todo-single-text"
            />
          ) : todo.isDone ? (
            <s className="todo-single-text">{todo.todo}</s>
          ) : (
            <span className="todo-single-text">{todo.todo}</span>
          )}

          <div>
            <span className="icon" onClick={() => handleEdit()}>
              <AiOutlineEdit />
            </span>
            <span onClick={() => handleDelete(todo.id)} className="icon">
              <AiFillDelete />
            </span>
            <span onClick={() => handleDone(todo.id)} className="icon">
              <IoIosDoneAll />
            </span>
          </div>
        </form>

  );
};

export default SingleTodo;
