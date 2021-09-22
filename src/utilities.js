import React from "react";

import MyLoader from "./components/MyLoader/MyLoader";
// generate unique keys
import { v4 as uuidv4 } from "uuid";

export const addUniqueIdsToPictures = (pictureData) => {
  return pictureData.map((picture) => {
    const uniqueId = uuidv4();

    return {
      ...picture,
      id: uniqueId,
      liked: false,
    };
  });
};

export const generateLoadingCards = () => {
  let loadingCards = [];

  for (let i = 0; i < 20; i++) {
    loadingCards.push(<MyLoader />);
  }

  const addIdsToLoadingCard = loadingCards.map((card, i) => {
    const uniqueId = uuidv4();
    return { ...card, key: uniqueId };
  });

  return addIdsToLoadingCard;
};

const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

export const formatDate = (dateToFormat) => {
  const splitDate = dateToFormat.split("-");
  const updatedDate = `${months[splitDate[1]]} ${splitDate[2]}, ${
    splitDate[0]
  }`;

  return updatedDate;
};

export const updateFavoritePictures = (state, id) => {
  const likedPicture = state.randomPictures.find((picture) => picture.id === id);
  
  likedPicture.liked = !likedPicture.liked;

  if (likedPicture.liked) {
    return [...state.favoritePictures, likedPicture];
  } else {
    const removeUnlikedPicture = state.favoritePictures.filter((picture) => picture.id !== id);
    return removeUnlikedPicture;
  }
};
