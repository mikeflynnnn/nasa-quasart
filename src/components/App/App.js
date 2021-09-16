import React, { useEffect, useState } from "react";

import HomePage from "../HomePage/HomePage";
import Nav from "../Nav/Nav";
import PictureCard from "../PictureCard/PictureCard";
import { fetchAPOD } from "../../apiCalls";
// generate unique keys
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [pictureData, setPictureData] = useState({
    randomPictures: [],
    favoritePictures: [],
  });

  const [viewFavorites, setViewFavorites] = useState(false);

  useEffect(() => {
    fetchAPOD().then((data) => {
      const pictures = addUniqueIdsToPictures(data);
      setPictureData({ randomPictures: pictures, favoritePictures: [] });
    });
  }, []);

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

  // useState(false) if true render favs else render random
  return (
    <>
      <Nav favorites={setViewFavorites} />
      <HomePage pictures={generatePictureCards(pictureData.randomPictures)} />
    </>
  );
};

export default App;
