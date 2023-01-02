import React from "react";
import rainy from "../Style/icons/rainy.png";
import Clouds from "../Style/icons/Clouds.png";
import cloudyNight from "../Style/icons/cloudy-night.png";
import rainyDay from "../Style/icons/rainy-day.png";
import storm from "../Style/icons/storm.png";

function DisplayData({ currentWeather }) {
  const time = () => {
    let date = new Date();
    return date.toDateString();
  };
  // console.log(currentWeather.weather[0].main);
  return (
    <>
      {Object.keys(currentWeather).length <= 0 ? (
        ""
      ) : (
        <div className="current-weather-box">
          <h3>{currentWeather.name}</h3>
          <p>{time()}</p>
          <br />
          <div>
            <img
              // currentWeather.weather[0].main
              src={Clouds}
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
                <p>{currentWeather.main.humidity}</p>
              </div>
            </div>
            <div>
              <span id="temperature">
                {Math.ceil(currentWeather.main.temp)}°C
              </span>
            </div>
          </div>
        </div>
      )}
      <div>Forecast</div>
    </>
  );
}

export default DisplayData;
