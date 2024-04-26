import React from "react";
import TodoItem from "./TodoItem";

const Footer = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((elem) => {
        return (
          <TodoItem
            todos={todos}
            setTodos={setTodos}
            key={elem.id}
            id={elem.id}
            todo={elem.todo}
          />
        );
      })}
    </ul>
  );
};

export default Footer;
