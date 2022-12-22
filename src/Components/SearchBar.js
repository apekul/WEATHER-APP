import React, { useState } from "react";
import cities from "../city.list.json";

export const SearchBar = ({ setCurrentWeather }) => {
  const [citiesList, setCitiesList] = useState([]); // List of first 5 matching cities by name
  const [inputValue, setInputValue] = useState("");
  // const [inputFocus, setInputFocus] = useState(false); // Input focus state

  const ClearInput = () => {
    setInputValue("");
    setCitiesList([]);
  };

  const Search = (v) => {
    setCurrentWeather(v);
    setInputValue("");
    setCitiesList([]);
  };

  // Search for cities using user input function
  const onChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
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
      <div className="group-relative">
        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          placeholder="Search..."
        />
        {inputValue.length > 0 && (
          <button
            className="material-symbols-outlined"
            onClick={() => ClearInput()}
          >
            close
          </button>
        )}
        <div className="display-search-geo">
          {citiesList !== 0
            ? citiesList.map((v, i) => (
                <div className="display-item" key={i} onClick={() => Search(v)}>
                  <div className="display-item-text">
                    {v.name}, {v.country}
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
