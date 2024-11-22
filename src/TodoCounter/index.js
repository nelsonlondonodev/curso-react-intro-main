import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      <span>TO DO LIST</span> <br></br> You completed{" "}
      <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
