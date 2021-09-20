import React from "react";
import "./Nav.scss";

const Nav = ({ favorites }) => {
  const { viewFavorites, setViewFavorites } = favorites;

  return (
    <nav className="nav">
      <p>QuasarT</p>
      <button
        className="rainbow-button"
        onClick={() => setViewFavorites((prevState) => !prevState)}
      >
        {viewFavorites ? "Home" : "Favorites"}
      </button>
    </nav>
  );
};

export default Nav;
