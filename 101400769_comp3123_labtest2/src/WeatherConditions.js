import axios from 'axios';

class WeatherConditions {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async getWeather(city) {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric'
        }
      });

      return {
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        rain: response.data.rain ? response.data.rain['1h'] : 0 
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error; 
    }
  }
}

export default WeatherConditions;
