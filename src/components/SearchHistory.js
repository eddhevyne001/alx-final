// src/components/SearchHistory.js
import React from 'react';

function SearchHistory({ history, onSearch, onClearHistory }) {
  return (
    <div className="search-history">
      <h2>Search History</h2>
      <button className="clear-history-btn" onClick={onClearHistory}>
        Clear History
      </button>
      <ul>
        {history.map((city, index) => (
          <li key={index}>
            <button onClick={() => onSearch(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
