import React, { useEffect, useState } from "react";
import "./HomePage.scss";
// generate unique keys
import { v4 as uuidv4 } from "uuid";

import { fetchAPOD } from "../../apiCalls";
import PictureCard from "../PictureCard/PictureCard";

const HomePage = () => {
  const [randomPictures, setRandomPictures] = useState([]);

  useEffect(() => {
    fetchAPOD().then((data) => setRandomPictures(data));
  }, []);

  const generatePictureCards = () => {
    return randomPictures.map((picture) => {
      const cardKey = uuidv4();

      return <PictureCard key={cardKey} pictureDetails={picture} />;
    });
  };

  return <section className="picture-display">{randomPictures.length > 0 && generatePictureCards()}</section>;
};

export default HomePage;
