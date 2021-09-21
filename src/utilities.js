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

  return loadingCards.map((card, i) => {
    const uniqueId = uuidv4();
    return { ...card, key: uniqueId };
  });
};
