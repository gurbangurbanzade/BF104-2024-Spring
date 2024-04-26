import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Todo = () => {
  const [inpValue, setInpValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>To do</h1>
      <Header
        inpValue={inpValue}
        setInpValue={setInpValue}
        todos={todos}
        setTodos={setTodos}
      />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
