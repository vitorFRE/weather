import React, { useContext } from 'react';
import Header from '@/components/Header';
import LargeWeatherCard from '@/components/LargerWeatherCard';
import Layout from '@/components/Layout';
import { useQuery } from 'react-query';
import { fetchWeatherData, fetchForecastData } from '../services/API';
import { getCurrentDate } from '@/utils/data';
import { SearchContext } from '@/utils/SearchContext';
import SunriseSunset from '@/components/SunriseSunset';
import TempMinMax from '@/components/TempMinMax';

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

  if (weatherData) {
    console.log(weatherData);
  }

  return (
    <Layout>
      <Header />
      <main className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:justify-between p-4 gap-2">
          {weatherData && (
            <div className="w-full ">
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
            </div>
          )}

          {weatherData && (
            <div className="w-full">
              <TempMinMax
                tempMax={weatherData.main.temp_max}
                tempMin={weatherData.main.temp_min}
              />
            </div>
          )}

          {weatherData && (
            <div className="w-full">
              <SunriseSunset
                sunrise={weatherData?.sys.sunrise}
                sunset={weatherData?.sys.sunset}
              />
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
