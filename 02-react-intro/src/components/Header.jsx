import React from "react";
import "./style.css";
import "./style.scss";

const Header = () => {
  const api = ["home", "about", "contact", "profile", "narmin"];

  // eslint-disable-next-line no-unused-vars
  const a = 5;

  return (
    <header>
      <ul>
        {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Profile</li> */}
        {/* {2 + 2} */}
        {}
        {api.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
      </ul>
    </header>
  );
};

export default Header;
