import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [city, setcity] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <nav className="navbar">
      <form onSubmit={handlesubmit} className="search-form">
        <input
          className="search-input"
          type="text"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          placeholder="Enter city name"
        />
        <button className="search-button" type="submit">Search</button>
      </form>
    </nav>
  );
};

export default SearchBar;
