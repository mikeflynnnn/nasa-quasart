import React from "react";
import "./PictureCard.scss";

import LikeButton from "../LikeButton/Likebutton";

const PictureCard = ({ pictureDetails }) => {
  const { url, title, date, id } = pictureDetails;

  return (
    <article className="details-container">
      <img className="details-img" src={url} alt={title} />
      <p className="details-title">{title}</p>
      <p className="details-date">{date}</p>
      <div onClick={() => console.log('yo')}>
        <LikeButton />
      </div>
    </article>
  );
};

export default PictureCard;
