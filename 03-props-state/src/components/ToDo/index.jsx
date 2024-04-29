import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import style from "./style.module.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Todo = () => {
  console.log(style);
  const [inpValue, setInpValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1 className={style.box}>To do</h1>
      <Title>Hello World!</Title>
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
