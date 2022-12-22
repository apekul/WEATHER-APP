import React, { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import "./Style/style.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});

  return (
    <div className="App">
      <SearchBar setCurrentWeather={setCurrentWeather} />
      {console.log(currentWeather.name)}
    </div>
  );
}

export default App;
