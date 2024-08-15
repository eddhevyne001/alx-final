import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import UnitToggle from './components/UnitToggle';
import SearchHistory from './components/SearchHistory';
import FavoriteLocations from './components/FavoriteLocations';
import LineChart from './components/LineChart';
import Search from './components/Search';

const API_KEY = '98c3979a64f2dd1b80894c4a5bf45401';

function App() {
  const [city, setCity] = useState('New York');
  const [unit, setUnit] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [], // Labels for the chart
    datasets: [{
      label: 'Temperature',
      data: [], // Data for the chart
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)'
    }]
  });
  const [error, setError] = useState(''); // New state for error message

  useEffect(() => {
    fetchWeatherData(city, unit);
    fetchForecastData(city, unit);
  }, [city, unit]);

  const fetchWeatherData = async (city, unit) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(''); // Clear any previous error
    } catch (error) {
      setError('Location not found. Please enter a valid location.');
      setWeatherData(null); // Clear weather data if there's an error
    }
  };

  const fetchForecastData = async (city, unit) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      setForecastData(response.data);
      setError(''); // Clear any previous error

      // Process forecast data to update chartData
      const labels = response.data.list.map(item => item.dt_txt); // Example labels
      const data = response.data.list.map(item => item.main.temp); // Example data

      setChartData({
        labels,
        datasets: [{
          label: 'Temperature',
          data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)'
        }]
      });
    } catch (error) {
      setError('Location not found. Please enter a valid location.');
      setForecastData(null); // Clear forecast data if there's an error
    }
  };

  const handleSearch = (newCity) => {
    setCity(newCity);
    setSearchHistory([newCity, ...searchHistory]);
  };

  const handleUnitChange = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <UnitToggle unit={unit} onUnitChange={handleUnitChange} />
      <div className="search-history-container">
        <SearchHistory 
          history={searchHistory} 
          onSearch={handleSearch} 
          onClearHistory={handleClearHistory}
        />
      </div>
      <Search onSearch={handleSearch} />
      
      {error && <div id="error-message" style={{ color: 'red' }}>{error}</div>} {/* Error message display */}

      {weatherData && <CurrentWeather data={weatherData} />}
      {forecastData && <Forecast data={forecastData} />}
      <FavoriteLocations onSearch={handleSearch} />

      <LineChart data={chartData} />
    </div>
  );
}

export default App;
