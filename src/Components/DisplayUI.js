import React, { useState } from "react";
import { api } from "../API";
import cities from "../city.list.json";

export const DisplayUI = () => {
  const [text, setText] = useState("");
  const [citiesList, setCitiesList] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});

  const Search = (lat, lon) => {
    fetch(`${api.url}weather?lat=${lat}&lon=${lon}&appid=${api.key}`)
      .then((res) => res.json())
      .then((data) => setCurrentWeather(data));
  };
  // test comment
  const onChange = (e) => {
    const { value } = e.target;
    let arr = [];
    if (value >= 1) {
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
      <input onChange={onChange} placeholder="Search..." />
      <div className="display-search-geo">
        {text.length === 0
          ? ""
          : citiesList.map((v, i) => (
              <div
                className="search-item"
                key={i}
                onClick={Search(v.lat, v.lon)}
              >
                <p>
                  {" "}
                  {v.name},{v.country}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DisplayUI;
