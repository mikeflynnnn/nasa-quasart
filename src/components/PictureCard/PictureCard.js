import React from "react";
import "./PictureCard.scss";

import LikeButton from "../LikeButton/Likebutton";

const PictureCard = ({ pictureDetails, like }) => {
  const { url, title, date, id, liked } = pictureDetails;

  return (
    <article className="details-container">
      <img className="details-img" src={url} alt={title} />
      <p className="details-title">{title}</p>
      <p className="details-date">{date}</p>
      <div onClick={() => like(id)}>
        <LikeButton liked={liked} />
      </div>
    </article>
  );
};

export default PictureCard;
