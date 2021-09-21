import React from "react";
import "./PictureCard.scss";

import LikeButton from "../LikeButton/Likebutton";
import { formatDate } from "../../utilities";

const PictureCard = ({ pictureDetails, like }) => {
  const { url, title, date, id, liked, explanation } = pictureDetails;

  const formatedDate = formatDate(date);

  return (
    <article className="apod-container">
      <img className="apod-img" src={url} alt={title} />
      <div className="apod-details">
        <div className="apod-title-container">
          <p className="apod-title">{title} </p>
          <p className="apod-date">- {formatedDate}</p>
        </div>
        <p className="apod-description">{explanation}</p>
        <div className="apod-button" onClick={() => like(id)}>
          <LikeButton liked={liked} />
        </div>
      </div>
    </article>
  );
};

export default PictureCard;
