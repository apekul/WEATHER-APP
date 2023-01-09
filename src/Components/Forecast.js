import React from "react";

export const Forecast = ({ forecastWeather, time }) => {
  // filter out today's data
  let forecast = forecastWeather.list.filter(
    (v) => v.dt_txt.split(" ")[0] !== time
  );
  console.log(forecast);
  return (
    <>
      <div className="forecast-section">
        {Object.values(forecast).map((value, index) => (
          <div key={index} className="forecast-group">
            <p>{value.dt_txt}</p>
            <p>{value.main.temp}C</p>
            <p>{value.weather[0].main}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
