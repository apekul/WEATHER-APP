import React from "react";

export const Forecast = ({ forecastWeather }) => {
  console.log(forecastWeather.list);

  return (
    <>
      <div className="forecast-section">
        {Object.values(forecastWeather.list).map((value, index) => (
          <div key={index} className="forecast-group">
            {value.dt_txt},{value.main.temp}C,
            {value.weather[0].main}
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
