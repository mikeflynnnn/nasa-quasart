import React, { useEffect, useState } from "react";
import "./HomePage.scss";

import { fetchAPOD } from "../../apiCalls";

const HomePage = () => {
  const [randomPictures, setRandomPictures] = useState([]);

  useEffect(() => {
    fetchAPOD().then((data) => setRandomPictures(data));
  });

  return <p>HomePage</p>;
};

export default HomePage;
