import axios from "axios";

const getWeather = (lat, lon) => {
  console.log("this is lat", lat);

  const baseUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}`;
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getWeather };
