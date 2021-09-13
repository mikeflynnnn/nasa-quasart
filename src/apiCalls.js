export const fetchAPOD = async () => {
  // random 10 pics
  const url = "https://api.nasa.gov/planetary/apod?count=10&api_key=";
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  const response = await fetch(url + API_KEY);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
