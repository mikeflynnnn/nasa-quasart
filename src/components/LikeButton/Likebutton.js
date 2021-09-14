import React from "react";
import "./Likebutton.scss";

const LikeButton = ({ liked }) => {
  return (
    <button className={"like-button" + liked ? "favorited" : ""}>Like</button>
  );
};

export default LikeButton;
