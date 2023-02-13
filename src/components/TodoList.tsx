import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../todoModel";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
}
const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="todos active-todo"
          >
            <span className="todos-heading">Active Task</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="RemovedList">
        {(provided) => (
          <div className="todos removed-todo" ref={provided.innerRef}
          {...provided.droppableProps}
          >
            <span className="todos-heading">Completed Task</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
