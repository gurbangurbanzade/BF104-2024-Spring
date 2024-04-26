import React, { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Value from "./components/Value";

const Counter = () => {
  console.log("Counter render olundu");
  let [count, setCount] = useState(0);
  let name = "gurban";

  function getData(param) {
    console.log(param);
  }

  const increment = () => {
    // console.log("qurban");
    setCount(++count);
  };

  return (
    <div>
      <h1>Counter</h1>
      {/* <button
        onClick={() => {
          //   console.log("sadfghj");
          setCount(--count);
        }}
      >
        DEC
      </button> */}
      <Decrement count={count} setCount={setCount} />

      {/* <span>{count}</span> */}
      <Value say={count} />

      {/* <button onClick={increment}>INC</button> */}
      <Increment name={name} increment={increment} getData={getData} />
    </div>
  );
};

export default Counter;
