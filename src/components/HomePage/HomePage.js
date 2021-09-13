import React, { useEffect, useState } from "react";
import "./HomePage.scss";

import { fetchAPOD } from "../../apiCalls";

const HomePage = () => {
  const [randomPictures, setRandomPictures] = useState([]);

  useEffect(() => {
    fetchAPOD().then((data) => setRandomPictures(data));
  }, []);

  return <div>{randomPictures.length > 0 && console.log(randomPictures)}</div>;
};

export default HomePage;
