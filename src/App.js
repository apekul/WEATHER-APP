import React, { useState } from "react";
import DisplayData from "./Components/DisplayData";
import { SearchBar } from "./Components/SearchBar";
import "./Style/style.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  return (
    <div className="App">
      <SearchBar
        setCurrentWeather={setCurrentWeather}
        setForecastWeather={setForecastWeather}
      >
        <DisplayData
          currentWeather={currentWeather}
          forecastWeather={forecastWeather}
        />
      </SearchBar>
    </div>
  );
}

export default App;
