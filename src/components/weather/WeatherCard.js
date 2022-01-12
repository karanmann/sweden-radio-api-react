export const WeatherCard = ({weekday, fetchedWeatherData, feelsLike, maxTemperature, minTemperature, sunriseHour, sunriseMinutes, sunsetHour, sunsetMinutes}) => {

// const {weekday, fetchedWeatherData, feelsLike, maxTemperature, minTemperature, sunriseHour, sunriseMinutes, sunsetHour, sunsetMinutes} = props

  return (
    <div className="weather-container">
      <h3>Weather</h3>
      <p>{weekday}</p>
      <p>
        {fetchedWeatherData.name}, {fetchedWeatherData.sys.country}
      </p>
      <p>Temp : {(fetchedWeatherData.main.temp - 273).toFixed(1)} ℃</p>
      <div>
        <p>Feels Like : {feelsLike} ℃</p>
        <p>Max Temp: {maxTemperature} ℃</p>
        <p>Min Temp: {minTemperature} ℃</p>
      </div>
      <div>
        <p>
          Sunrise : {sunriseHour}:{sunriseMinutes.substr(-2)}
        </p>
        <p>
          Sunset : {sunsetHour}:{sunsetMinutes.substr(-2)}
        </p>
      </div>
    </div>
  );
};
