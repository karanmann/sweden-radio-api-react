import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=a77136eb90fd8d858de1f60c1ae1ee51`;

export const Weather = () => {
  const [fetchComplete, setFetchComplete] = useState(false);
  const [fetchedWeatherData, setFetchedWeatherData] = useState("");

  useEffect(() => {
    fetch(weatherAPI)
      .then((res) => res.json())
      .then((programData) => {
        setFetchedWeatherData(programData);
        setFetchComplete(true);
      })
      .catch((error) => {
        console.log(error, "There has been an error");
      });
  }, []);

  if (!fetchComplete) return <p>Loading...</p>;

  const sunriseHour = new Date(
    fetchedWeatherData.sys.sunrise * 1000
  ).getHours();
  const sunriseMinutes =
    "0" + new Date(fetchedWeatherData.sys.sunrise * 1000).getMinutes();
  const sunsetHour = new Date(fetchedWeatherData.sys.sunset * 1000).getHours();
  const sunsetMinutes =
    "0" + new Date(fetchedWeatherData.sys.sunset * 1000).getMinutes();


  const date = new Date(fetchedWeatherData.dt * 1000);
  const weekday = date.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const feelsLike = Math.round(fetchedWeatherData.main.feels_like - 273);
  const maxTemperature = Math.round(fetchedWeatherData.main.temp_max - 273);
  const minTemperature = Math.round(fetchedWeatherData.main.temp_min - 273);

  return (
    <>
      <Link to="/">
        <button>BACK HOME</button>
      </Link>

      <p>Weather</p>
      <p>{weekday}</p>
      <p>
        {fetchedWeatherData.name}, {fetchedWeatherData.sys.country}
      </p>
      <p>Temp : {(fetchedWeatherData.main.temp - 273).toFixed(1)} ℃</p>
      <div className="weather-temp">
        <p>Feels Like : {feelsLike} ℃</p>
        <p>Max Temp: {maxTemperature} ℃</p>
        <p>Min Temp: {minTemperature} ℃</p>
      </div>
      <div className="weather-suns">
        <p>Sunrise : {sunriseHour}:{sunriseMinutes.substr(-2)}</p>
        <p>Sunset : {sunsetHour}:{sunsetMinutes.substr(-2)}</p>
      </div>
    </>
  );
};
