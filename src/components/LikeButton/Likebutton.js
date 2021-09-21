import React from "react";
import "./Likebutton.scss";

import blueHeart from "../../assets/blue-heart.svg"
import redHeart from "../../assets/red-heart.svg"

const LikeButton = ({ liked }) => {
  return (
    <button className={`like-button ${liked ? "favorited" : ""}`}>
      <img src={redHeart} alt="heart button"/>
    </button>
  );
};

export default LikeButton;
