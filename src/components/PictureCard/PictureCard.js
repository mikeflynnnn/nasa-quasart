import React from "react";
import "./PictureCard.scss";

import LikeButton from "../LikeButton/Likebutton";

const PictureCard = ({ pictureDetails, like }) => {
  const { url, title, date, id, liked, explanation } = pictureDetails;

  // add to utility file
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const formatDate = (dateToFormat) => {
    const splitDate = dateToFormat.split("-");
    const updatedDate = `${months[splitDate[1]]} ${splitDate[2]}, ${
      splitDate[0]
    }`;

    return updatedDate;
  };

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
