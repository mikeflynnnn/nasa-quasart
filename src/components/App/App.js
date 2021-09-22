import React, { useEffect, useState } from "react";

import HomePage from "../HomePage/HomePage";
import Nav from "../Nav/Nav";
import PictureCard from "../PictureCard/PictureCard";
import { fetchAPOD } from "../../apiCalls";
import {
  addUniqueIdsToPictures,
  generateLoadingCards,
  updateFavoritePictures,
} from "../../utilities";

const App = () => {
  const [pictureData, setPictureData] = useState({
    randomPictures: [],
    favoritePictures:[],
    loading: true,
  });

  const [viewFavorites, setViewFavorites] = useState(false);

  // fetch data
  useEffect(() => {
    console.log(pictureData.favoritePictures);
    fetchAPOD().then((data) => {
      const pictures = addUniqueIdsToPictures(data);

      setPictureData((prevState) => {
        return {
          ...prevState,
          randomPictures: pictures,
          loading: false,
        };
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
          pictureData,
          id
        ),
      };
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
