// src/components/CurrentWeather.js
import React from 'react';

function CurrentWeather({ data }) {
  if (!data) return null;

  return (
    <div className="current-weather">
      <h2>{data.name}</h2>
      <p><strong>Temperature:</strong> {data.main.temp}°</p>
      <p><strong>Humidity:</strong> {data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {data.wind.speed} {data.unit === 'metric' ? 'm/s' : 'mph'}</p>
    </div>
  );
}

export default CurrentWeather;
