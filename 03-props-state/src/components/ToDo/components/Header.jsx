import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./style.module.css";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";

const Header = ({ inpValue, setInpValue, todos, setTodos }) => {
  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      ;<h1 className={style.box}>Header</h1>
      <input
        value={inpValue}
        type="text"
        onChange={(e) => {
          //   console.log(e.target.value);
          //   console.log("sdfghjk");
          setInpValue(e.target.value);
          //   console.log(inpValue);
        }}
      />
      <button
        onClick={() => {
          //   console.log("sdfsgh");
          //   console.log(inpValue);
          let obj = {
            id: uuidv4(),
            todo: inpValue,
          };

          //   console.log(obj);
          setTodos([...todos, obj]);
          //   console.log(todos);

          setInpValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
