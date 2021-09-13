import React from "react";

const PictureCard = ({ pictureDetails }) => {
  return (
    <article className="details-container">
      <img className="details-img" />
      <p className="details-title"></p>
      <p className="details-date"></p>
      <button>Like</button>
    </article>
  );
};

export default PictureCard;
