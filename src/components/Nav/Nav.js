import React from "react";
import "./Nav.scss";

const Nav = ({ favorites }) => {
  return (
    <nav className="nav">
      <p>QuasarT</p>
      <button onClick={() => favorites((prevState) => !prevState)}>
        My Favorites
      </button>
    </nav>
  );
};

export default Nav;
