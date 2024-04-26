import React from "react";
import { v4 as uuidv4 } from "uuid";

const Header = ({ inpValue, setInpValue, todos, setTodos }) => {
  return (
    <div>
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
