import { useState, useEffect } from "react";

import { CustomButton } from "./universal/CustomButton";
import { WeatherCard } from "./weather/WeatherCard";

export const Weather = () => {
  // const [lon, setLon] = useState(0);
  // const [lat, setLat] = useState(0)
  const [fetchComplete, setFetchComplete] = useState(false);
  const [fetchedWeatherData, setFetchedWeatherData] = useState("");

  useEffect(() => {
    // const API_KEY = 'a77136eb90fd8d858de1f60c1ae1ee51'
    // const weatherAPI = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    // navigator.geolocation.getCurrentPosition((position) => {
    //   setLat(position.coords.latitude);
    //   setLon(position.coords.longitude);
    // });
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=a77136eb90fd8d858de1f60c1ae1ee51`;

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

  if (!fetchComplete)
    return (
      <div className="loader-position">
        <span className="loader"></span>
      </div>
    );

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
    <div className="weather-page">
      <CustomButton />
      <WeatherCard weekday={weekday} fetchedWeatherData={fetchedWeatherData} feelsLike={feelsLike} maxTemperature={maxTemperature} minTemperature={minTemperature} sunriseHour={sunriseHour} sunriseMinutes={sunriseMinutes} sunsetHour={sunsetHour} sunsetMinutes={sunsetMinutes} />
    </div>
  );
};
