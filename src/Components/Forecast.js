import React from "react";

export const Forecast = ({ forecastWeather }) => {
  console.log(forecastWeather);

  return (
    <>
      <div className="forecast-section">
        {Object.keys(forecastWeather.list).map((value, index) => (
          <div key={index} className="forecast-group">
            {value}
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
