import React, { useEffect, useState } from "react";
import "./HomePage.scss";

import { fetchAPOD } from "../../apiCalls";
import PictureCard from "../PictureCard/PictureCard";

const HomePage = () => {
  const [randomPictures, setRandomPictures] = useState([]);

  useEffect(() => {
    fetchAPOD().then((data) => setRandomPictures(data));
  }, []);

  const generatePictureCards = () => {
    return randomPictures.map((picture) => {
      return <PictureCard pictureDetails={picture} />;
    });
  };

  return <div>{randomPictures.length > 0 && generatePictureCards()}</div>;
};

export default HomePage;
