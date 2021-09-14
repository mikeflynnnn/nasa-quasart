import React, { useEffect, useState } from "react";
import "./HomePage.scss";
// generate unique keys
import { v4 as uuidv4 } from "uuid";

import { fetchAPOD } from "../../apiCalls";
import PictureCard from "../PictureCard/PictureCard";

const HomePage = () => {
  const [randomPictures, setRandomPictures] = useState([]);
  const [favoritePictures, setFavoritePictures] = useState([]);

  const addUniqueIdsToPictures = (pictureData) => {
    return pictureData.map((picture) => {
      const uniqueId = uuidv4();

      return {
        ...picture,
        id: uniqueId,
        liked: false,
      };
    });
  };

  useEffect(() => {
    fetchAPOD().then((data) => {
      const pictures = addUniqueIdsToPictures(data);
      setRandomPictures(pictures);
    });
  }, []);

  const likeAPicture = (id) => {
    const updatedLikes = randomPictures.map((picture) => {
      if (picture.id === id) {
        if (picture.liked) {
          return { ...picture, liked: false };
        }
        return { ...picture, liked: true };
      }
      return picture;
    });

    setRandomPictures(updatedLikes);
    updateFavoritePictures(id);
  };

  const updateFavoritePictures = (id) => {
    const likedPicture = randomPictures.find((picture) => picture.id === id);

    likedPicture.liked = !likedPicture.liked;

    setFavoritePictures((prevState) => {
      if (likedPicture.liked) {
        return [...prevState, likedPicture];
      } else {
        const removeUnlikedPicture = prevState.filter(
          (picture) => picture.id !== id
        );
        return removeUnlikedPicture;
      }
    });
  };

  const generatePictureCards = (pictureData) => {
    return pictureData.map((picture) => {
      return (
        <PictureCard
          key={picture.id}
          pictureDetails={picture}
          like={likeAPicture}
        />
      );
    });
  };

  return (
    <section className="picture-display">
      {randomPictures.length > 0 && generatePictureCards(randomPictures)}
    </section>
  );
};

export default HomePage;
