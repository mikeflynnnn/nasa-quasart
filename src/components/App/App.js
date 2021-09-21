import React, { useEffect, useState } from "react";

import HomePage from "../HomePage/HomePage";
import Nav from "../Nav/Nav";
import PictureCard from "../PictureCard/PictureCard";
import MyLoader from "../MyLoader/MyLoader";
import { fetchAPOD } from "../../apiCalls";
import { addUniqueIdsToPictures, generateLoadingCards } from "../../utilities";
// generate unique keys
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [pictureData, setPictureData] = useState({
    randomPictures: [],
    favoritePictures: [],
    loading: true,
  });

  const [viewFavorites, setViewFavorites] = useState(false);

  useEffect(() => {
    fetchAPOD().then((data) => {
      const pictures = addUniqueIdsToPictures(data);
      setPictureData({
        randomPictures: pictures,
        favoritePictures: [],
        loading: false,
      });
    });
  }, []);

  const likeAPicture = (id) => {
    const updatedLikes = pictureData.randomPictures.map((picture) => {
      if (picture.id === id) {
        return { ...picture, liked: !picture.liked };
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

  const determineImages = viewFavorites
    ? pictureData.favoritePictures
    : pictureData.randomPictures;

  const determineLoading = pictureData.loading
    ? generateLoadingCards()
    : generatePictureCards(determineImages);

  return (
    <>
      <Nav favorites={{ viewFavorites, setViewFavorites }} />
      <HomePage pictures={determineLoading} />
    </>
  );
};

export default App;
