// src/components/FavoriteLocations.js
import React, { useState } from 'react';

function FavoriteLocations({ onSearch }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (city) => {
    setFavorites([...favorites, city]);
  };

  return (
    <div className="favorite-locations">
      <h3>Favorite Locations</h3>
      <ul>
        {favorites.map((city, index) => (
          <li key={index} onClick={() => onSearch(city)}>
            {city}
          </li>
        ))}
      </ul>
      <button onClick={() => addFavorite(prompt('Enter city name:'))}>
        Add Favorite
      </button>
    </div>
  );
}

export default FavoriteLocations;
