import React, { useEffect, useState } from "react";
import "./HomePage.scss";
// generate unique keys
import { v4 as uuidv4 } from "uuid";

import { fetchAPOD } from "../../apiCalls";
import PictureCard from "../PictureCard/PictureCard";

const HomePage = () => {
  
  const [pictureData, setPictureData] = useState({
    randomPictures: [],
    favoritePictures: [],
  });

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
      setPictureData({ randomPictures: pictures, favoritePictures: [] });
    });
  }, []);

  const likeAPicture = (id) => {
    const updatedLikes = pictureData.randomPictures.map((picture) => {
      if (picture.id === id) {
        if (picture.liked) {
          return { ...picture, liked: false };
        }
        return { ...picture, liked: true };
      }
      return picture;
    });

    setPictureData((prevState) => {
      return {
        randomPictures: updatedLikes,
        favoritePictures: updateFavoritePictures(
          prevState.favoritePictures,
          id
        ),
      };
    });
  };

  const updateFavoritePictures = (state, id) => {
    const likedPicture = pictureData.randomPictures.find(
      (picture) => picture.id === id
    );

    likedPicture.liked = !likedPicture.liked;

    if (likedPicture.liked) {
      return [...state, likedPicture];
    } else {
      const removeUnlikedPicture = state.filter((picture) => picture.id !== id);
      return removeUnlikedPicture;
    }
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
      {pictureData.randomPictures.length > 0 &&
        generatePictureCards(pictureData.randomPictures)}
    </section>
  );
};

export default HomePage;
// if localStorage or randomize added, need to checkout favorites to update randomPictures `liked` value
