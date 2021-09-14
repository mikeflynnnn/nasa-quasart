import React, { useEffect, useState } from "react";
import "./HomePage.scss";
// generate unique keys
import { v4 as uuidv4 } from "uuid";

import { fetchAPOD } from "../../apiCalls";
import PictureCard from "../PictureCard/PictureCard";

const HomePage = () => {
  const [randomPictures, setRandomPictures] = useState([]);

  const addUniqueIdsToPictures = (pictureData) => {
    return pictureData.map((picture) => {
      const uniqueId = uuidv4();

      return {
        ...picture,
        id: uniqueId,
      };
    });
  };

  useEffect(() => {
    fetchAPOD().then((data) => {
      const pictures = addUniqueIdsToPictures(data);
      setRandomPictures(pictures);
    });
  }, []);

  const generatePictureCards = () => {
    return randomPictures.map((picture) => {
      return <PictureCard key={picture.id} pictureDetails={{ ...picture }} />;
    });
  };

  return (
    <section className="picture-display">
      {randomPictures.length > 0 && generatePictureCards()}
    </section>
  );
};

export default HomePage;
