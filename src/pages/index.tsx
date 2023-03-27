import React, { useContext } from 'react';
import Header from '@/components/Header';
import LargeWeatherCard from '@/components/LargerWeatherCard';
import Layout from '@/components/Layout';
import SmallWeatherCard from '@/components/SmallWeatherCard';
import { useQuery } from 'react-query';
import { fetchWeatherData, fetchForecastData } from '../services/API';
import { getCurrentDate } from '@/utils/data';
import { SearchContext } from '@/utils/SearchContext';

export default function Home() {
  const { search: cidadeInput } = useContext(SearchContext);

  const { horaMinutos, diaAtual, diaMes } = getCurrentDate();

  const {
    data: weatherData,
    isLoading: weatherLoading,
    error: weatherError,
  } = useQuery(
    ['weather', cidadeInput],
    () =>
      cidadeInput
        ? fetchWeatherData(cidadeInput)
        : fetchWeatherData('sao paulo'),
    {
      refetchOnWindowFocus: false,
    },
  );

  const {
    data: forecastData,
    isLoading: forecastLoading,
    error: ForecastError,
  } = useQuery(
    'forecast',
    () =>
      cidadeInput
        ? fetchForecastData(cidadeInput)
        : fetchForecastData('sao paulo'),
    {
      refetchOnWindowFocus: false,
    },
  );

  if (forecastData) {
    console.log(forecastData);
  }

  return (
    <Layout>
      <Header />
      <main className="container mx-auto">
        <div className="flex justify-between pt-20">
          {weatherData && (
            <LargeWeatherCard
              temp={weatherData?.main.temp}
              city={weatherData?.name}
              country={weatherData?.sys.country}
              description={weatherData?.weather[0].description}
              dayWeek={diaAtual}
              time={horaMinutos}
              day={diaMes}
              humidity={weatherData?.main.humidity}
              wind={weatherData?.wind.speed}
              icon={weatherData?.weather[0].icon}
            />
          )}
        </div>
        {/* {forecastData && (
          <div>
            {forecastData.list.map((day) => (
              <SmallWeatherCard
                key={day.dt}
                temp={day.main.temp}
                dayWeek={day.dt_txt}
                icon={day.weather[0].icon}
              />
            ))}
          </div>
        )} */}
      </main>
    </Layout>
  );
}
