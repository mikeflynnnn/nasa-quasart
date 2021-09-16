import React from "react";
import "./HomePage.scss";

const HomePage = ({ pictures }) => {

  return (
    <section className="picture-display">
      {pictures.length > 0 && pictures}
    </section>
  );
};

export default HomePage;
// if localStorage or randomize added, need to checkout favorites to update randomPictures `liked` value
