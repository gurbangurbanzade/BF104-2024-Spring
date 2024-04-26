/* eslint-disable no-unused-vars */
import React from "react";
import DeleteBtn from "./DeleteBtn";

const TodoItem = ({ todos, setTodos, id, todo }) => {
  return (
    <li>
      {todo}
      <DeleteBtn color={"red"} todos={todos} setTodos={setTodos} id={id} />
    </li>
  );
};

export default TodoItem;
