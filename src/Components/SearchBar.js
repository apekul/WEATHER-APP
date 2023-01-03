import React, { useState } from "react";
import cities from "../city.list.json";
import { api } from "../API";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export const SearchBar = ({
  children,
  setCurrentWeather,
  setForecastWeather,
}) => {
  const [citiesList, setCitiesList] = useState([]); // List of first 5 matching cities by name
  const [inputValue, setInputValue] = useState("");

  const ClearInput = () => {
    setInputValue("");
    setCitiesList([]);
  };

  const Search = (v) => {
    fetch(
      `${api.url}weather?lat=${v.coord.lat}&lon=${v.coord.lon}&appid=${api.key}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setCurrentWeather(data));

    fetch(
      `${api.url}forecast?lat=${v.coord.lat}&lon=${v.coord.lon}&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((data) => setForecastWeather(data));
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
        <div className="material-symbols-outlined searchIcon">search</div>
        {inputValue.length > 0 && (
          <button
            className="material-symbols-outlined closeButton"
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
                    <span className="material-symbols-outlined mark-icon">
                      location_on
                    </span>
                    <p>
                      {v.name}, {v.country}
                    </p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
      {children}
    </div>
  );
};

export default SearchBar;
