import React from "react";

function DisplayData({ currentWeather, forecastWeather }) {
  let date = new Date();
  const time = () => {
    let arr = [date.getMonth() + 1, date.getDate()].map((v) =>
      v.toString().length < 2 ? "0" + v : ""
    );
    return `${date.getFullYear()}-${arr[0]}-${arr[1]}`;
  };
  return (
    <>
      {Object.keys(currentWeather).length <= 0 ? (
        ""
      ) : (
        <div className="current-weather-box">
          <div className="current-name-time">
            <h3>{currentWeather.name}</h3>
            <p>
              {time()}, {date.toLocaleTimeString()}
            </p>
          </div>
          <div className="current-icon-temp">
            <img
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="weatherIcon"
              className="weather-icon"
            />
            <p>{Math.ceil(currentWeather.main.temp)}°</p>
          </div>
          <div className="current-info">
            <p>{currentWeather.weather[0].main}</p>
            <p>
              {Math.floor(currentWeather.main.temp_max)}°/{" "}
              {Math.floor(currentWeather.main.temp_min)}°
            </p>
            <div className="flex-center">
              <span className="material-symbols-outlined">air</span>
              <p>{Math.floor(currentWeather.wind.speed * 3.6)}km/h</p>
            </div>
            <div className="flex-center">
              <span className="material-symbols-outlined">water_drop</span>
              <p>{currentWeather.main.humidity}%</p>
            </div>
          </div>
          <div className="current-forecast">
            {Object.values(forecastWeather.list.slice(1)).map(
              (value, index) => (
                <div key={index}>
                  <p>{value.dt_txt.split(" ")[1].slice(0, -3)}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
                    alt="weatherIcon"
                    className="weather-icon"
                  />
                  <p>{Math.ceil(value.main.temp)}°</p>
                  <div style={{ flexDirection: "row" }}>
                    <span className="material-symbols-outlined">
                      water_drop
                    </span>
                    <p>{value.main.humidity}%</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default DisplayData;
