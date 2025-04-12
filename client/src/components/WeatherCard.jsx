import React from "react";
import "./WeatherCard.css";

const getWeatherIcon = (description) => {
  if (description.includes("rain")) return "🌧️";
  if (description.includes("cloud")) return "☁️";
  if (description.includes("clear")) return "☀️";
  return "🌡️";
};

const WeatherCard = ({ weather }) => {
  const icon = getWeatherIcon(weather.weather[0].description.toLowerCase());

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <div className="weather-icon">{icon}</div>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
