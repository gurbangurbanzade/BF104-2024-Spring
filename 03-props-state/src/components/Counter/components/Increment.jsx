import React from "react";

const Increment = ({ name, increment, getData }) => {
  //   let { name } = props;
  //   console.log(props.name);
  //   console.log(name);
  let surname = "gurbanzada";
  getData(surname);
  return <button onClick={increment}>INC</button>;
};

export default Increment;
