import React, { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import { FetchData } from "./Components/FetchData";
import "./Style/style.css";

function App() {
  const [currentCity, setCurrentCity] = useState({});

  return (
    <div className="App">
      <SearchBar setCurrentCity={setCurrentCity}>
        <FetchData currentCity={currentCity} />
      </SearchBar>
      {/* {console.log(currentCity)} */}
    </div>
  );
}

export default App;
