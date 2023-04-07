import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_APP_ID;

export interface WeatherData {
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
  };
}

export interface TForecast {
  list: {
    dt: number;
    main: {
      temp: number;
    };
  }[];
  city: {
    name: string;
  };
  cod: string;
  cnt: number;
}

export async function fetchWeatherData(city: string): Promise<WeatherData> {
  const response = await axios.get<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
  );
  return response.data;
}

export async function fetchForecastData(city: string): Promise<TForecast> {
  const response = await axios.get<TForecast>(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
  );
  return response.data;
}
