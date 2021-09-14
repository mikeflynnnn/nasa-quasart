import React from "react";
import "./PictureCard.scss";

const PictureCard = ({ pictureDetails }) => {
  return (
    <article className="details-container">
      <img
        className="details-img"
        src={pictureDetails.url}
        alt={pictureDetails.title}
      />
      <p className="details-title">{pictureDetails.title}</p>
      <p className="details-date">{pictureDetails.date}</p>
      <button>Like</button>
    </article>
  );
};

export default PictureCard;
