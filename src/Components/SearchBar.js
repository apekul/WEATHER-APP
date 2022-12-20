import React, { useState } from "react";
import cities from "../city.list.json";

export const SearchBar = ({ setCurrentWeather }) => {
  const [citiesList, setCitiesList] = useState([]); // List of first 5 matching cities by name
  // const [inputFocus, setInputFocus] = useState(false); // Input focus state

  const Search = (v) => {
    setCurrentWeather(v);
  };

  // Search for cities using user input function
  const onChange = (e) => {
    const { value } = e.target;
    let arr = [];
    if (value.length > 0) {
      for (let city of cities) {
        if (arr.length >= 5) break;
        if (city.name.toLowerCase().startsWith(value.toLowerCase())) {
          arr.push(city);
        }
      }
    }
    return setCitiesList(arr);
  };

  return (
    <div className="display-ui">
      <input
        // onBlur={() => setInputFocus(false)}
        // onFocus={() => setInputFocus(true)}
        onChange={onChange}
        placeholder="Search..."
      />
      <div className="display-search-geo">
        {citiesList !== 0
          ? citiesList.map((v, i) => (
              <div className="display-item" key={i} onClick={() => Search(v)}>
                {v.name}, {v.country}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default SearchBar;
