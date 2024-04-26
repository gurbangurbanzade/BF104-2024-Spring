import React from "react";

const Decrement = ({ count, setCount }) => {
  console.log("Decrement render olundu");

  // let [num1,num2,num3]=[1,2,3]

  // let {name,age}={
  //     name:qurban
  // }
  // console.log(num1)

  return (
    <button
      onClick={() => {
        setCount(--count);
      }}
    >
      DEC
    </button>
  );
};

export default Decrement;
