import React, { useState } from 'react';
import WeatherConditions from './WeatherConditions';
import SearchBar from './SearchBar';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const weatherApi = new WeatherConditions('cf5bbd37ad1b3b6af2daa8a5e334eb32'); // Replace with your actual API key

  const handleSearch = async (city) => {
    try {
      const data = await weatherApi.getWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Error in fetching weather data:", error);
      // Optionally, handle the error in the UI, e.g., show an error message
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <div className="weather-data">
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} m/s</p>
          <p>Rain: {weatherData.rain} mm</p>
        </div>
      )}
    </div>
  );
}

export default App;
