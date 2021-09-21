import React from "react";
import "./Nav.scss";

const Nav = ({ favorites }) => {
  const { viewFavorites, setViewFavorites } = favorites;

  return (
    <nav className="nav">
      <p>
        Quas<span>art</span>
      </p>
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
