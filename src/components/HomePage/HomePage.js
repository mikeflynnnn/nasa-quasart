import React from "react";
import "./HomePage.scss";

const HomePage = ({ pictures }) => {
  const noFavoriteImages =
    pictures.length > 0 ? pictures : "Add some pictures to your favorites!";

  return <section className="picture-display">{noFavoriteImages}</section>;
};

export default HomePage;
