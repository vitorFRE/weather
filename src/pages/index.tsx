import React, { useContext } from 'react';
import Header from '@/components/Header';
import LargeWeatherCard from '@/components/LargerWeatherCard';
import Layout from '@/components/Layout';
import { useQuery } from 'react-query';
import { fetchWeatherData } from '../services/API';
import { getCurrentDate } from '@/utils/data';
import { SearchContext } from '@/utils/SearchContext';
import SunriseSunset from '@/components/SunriseSunset';
import TempMinMax from '@/components/TempMinMax';
import SmallCity from '@/components/SmallCity';

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

  const cidades = ['sao paulo', 'new york', 'london'];
  const {
    data: multiplesWeatherData,
    isLoading: multiplesWeatherLoading,
    error: multiplesWeatherError,
  } = useQuery(
    ['multiplesWeather', cidadeInput],
    async () => {
      const results = await Promise.all(
        cidades.map((cidade) => fetchWeatherData(cidade)),
      );
      return results;
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  if (multiplesWeatherData) {
    console.log(multiplesWeatherData);
  }

  return (
    <Layout>
      <Header />
      <main className="container mx-auto">
        <div className="flex justify-between mt-6 gap-4 flex-col md:flex-row">
          {weatherData && (
            <div>
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
            <div>
              <TempMinMax
                tempMax={weatherData.main.temp_max}
                tempMin={weatherData.main.temp_min}
              />
            </div>
          )}

          {weatherData && (
            <div>
              <SunriseSunset
                sunrise={weatherData?.sys.sunrise}
                sunset={weatherData?.sys.sunset}
              />
            </div>
          )}
        </div>
      </main>
      <div className="container mx-auto flex flex-col gap-4 mt-5">
        {multiplesWeatherData &&
          multiplesWeatherData.map((cityData, index) => (
            <div key={index}>
              <SmallCity
                city={cityData.name}
                description={cityData.weather[0].description}
                icon={cityData.weather[0].icon}
                temp={cityData.main.temp}
              />
            </div>
          ))}
      </div>
    </Layout>
  );
}
