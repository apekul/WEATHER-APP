import React from "react";
import { Forecast } from "./Forecast";
function DisplayData({ currentWeather, forecastWeather }) {
  const time = () => {
    let date = new Date();
    return date.toDateString();
  };

  return (
    <>
      {Object.keys(currentWeather).length <= 0 ? (
        ""
      ) : (
        <>
          <div className="current-weather-box">
            <h3>{currentWeather.name}</h3>
            <p>{time()}</p>
            <br />
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                alt="weatherIcon"
                className="weather-icon"
              />
            </div>
            <p>{currentWeather.weather[0].main}</p>
            <br />

            <div className="current-weather-info">
              <div style={{ justifyContent: "center", alignItems: "center" }}>
                <div className="flex-box">
                  <span className="material-symbols-outlined">air</span>
                  <p>{Math.floor(currentWeather.wind.speed * 3.6)} km/h</p>
                </div>
                <div className="flex-box">
                  <span className="material-symbols-outlined">water_drop</span>
                  <p>{currentWeather.main.humidity} %</p>
                </div>
              </div>
              <div>
                <span id="temperature">
                  {Math.ceil(currentWeather.main.temp)}°C
                </span>
              </div>
            </div>
          </div>
          <Forecast forecastWeather={forecastWeather} />
        </>
      )}
    </>
  );
}

export default DisplayData;
