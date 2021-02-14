//variable url del servidor
const BASEURL =
  "https://cors-anywhere.herokuapp.com/https://recruiting-datasets.s3.us-east-2.amazonaws.com";

export const GetRestaurants = () => {
  const url = BASEURL + "/data_melp.json";
  return fetch(url).then((response) => response.json());
};
