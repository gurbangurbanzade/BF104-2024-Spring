import React from "react";

const DeleteBtn = ({ todos, setTodos, id, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => {
        let arr = todos.filter((el) => el.id != id);

        setTodos(arr);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
