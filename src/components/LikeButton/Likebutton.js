import React, { useState } from "react";
import "./Likebutton.scss";

import blueHeart from "../../assets/blue-heart.svg";
import redHeart from "../../assets/red-heart.svg";

const LikeButton = ({ liked }) => {
  const [animateButton, setAnimateButton] = useState(false);

  const animationClass = animateButton ? "jello-animation" : "";

  const buttonImg = liked ? redHeart : blueHeart;

  return (
    <button
      onClick={() => setAnimateButton((prevState) => !prevState)}
      className={`like-button ${animationClass}`}
    >
      <img src={buttonImg} alt="heart button" />
    </button>
  );
};

export default LikeButton;
