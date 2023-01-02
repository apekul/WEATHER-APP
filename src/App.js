import React, { useState } from "react";
import DisplayData from "./Components/DisplayData";
import { SearchBar } from "./Components/SearchBar";
import "./Style/style.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  return (
    <div className="App">
      <SearchBar setCurrentWeather={setCurrentWeather}>
        <DisplayData currentWeather={currentWeather} />
      </SearchBar>
    </div>
  );
}

export default App;
