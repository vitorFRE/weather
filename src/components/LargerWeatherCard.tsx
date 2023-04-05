import { SunIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface WeatherInfo {
  temp: number;
  city: string;
  country: string;
  description: string;
  dayWeek: string;
  time: string;
  day: string;
  humidity: number;
  wind: number;
  icon: string;
}

export default function LargeWeatherCard(props: WeatherInfo) {
  return (
    <div className="container mx-auto px-4 pt-5 pl-6 pb-7 rounded-[18px] max-w-[413px] max-h-[294px] bg-product">
      <div className="flex justify-between items-center">
        <Image
          src={`http://openweathermap.org/img/wn/${props.icon}.png`}
          alt="Icon"
          width={64}
          height={64}
        />
        <span
          className="p-5 rounded-lg font-bold text-4xl bg-gradient-to-r from-transparent via-white to-white"
          style={{
            backgroundImage:
              'linear-gradient(175.39deg, rgba(255, 255, 255, 0) -17.87%, rgba(255, 255, 255, 0.168) 108.83%, rgba(255, 255, 255, 0.2) 128.44%)',
          }}
        >
          {props.temp}°C
        </span>
      </div>
      <p className="text-xl font-semibold text-black">
        {props.city} - {props.country}
      </p>
      <span className="text-base text-gray-700 font-medium">
        {props.description}
      </span>
      <h2
        className="font-bold text-4xl text-white-shadow pt-1 pb-1"
        style={{
          textShadow: '-1.85429px 2.78143px 0.927143px rgba(0, 0, 0, 0.1)',
        }}
      >
        {props.dayWeek}
      </h2>
      <p className="text-gray-800 font-bold">
        {props.time}h<span className="text-white text-xs">{props.day}</span>
      </p>
      <div
        className="flex gap-6 text-black font-medium text-lg pt-5"
        style={{
          textShadow: '-1.85429px 2.78143px 0.927143px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p className="flex gap-1 items-center">
          <Image
            src="/humidade.svg"
            alt="humidade icone"
            width={24}
            height={24}
          />
          {props.humidity}%
        </p>
        <p className="flex gap-1 items-center">
          <Image src="/vento.svg" alt="vento icone" width={24} height={24} />
          {props.wind}m/s
        </p>
      </div>
    </div>
  );
}
