import React from "react";
import "./Nav.scss";

const Nav = ({ favorites }) => {
  const { viewFavorites, setViewFavorites } = favorites;

  return (
    <nav className="nav">
      <p>QuasarT</p>
      <button onClick={() => setViewFavorites((prevState) => !prevState)}>
        {viewFavorites ? "Home" : "My Favorites"}
      </button>
    </nav>
  );
};

export default Nav;
