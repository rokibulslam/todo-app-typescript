import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../todoModel";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <span className="todos-heading">Active Task</span>
      <div className="todos active-todo">
        {todos.map((todo, index) => (
          <SingleTodo
            key={index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
