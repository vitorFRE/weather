import { SunIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface WeatherInfo {
  temp: number;
  imgUrl?: string;
  dayWeek: string;
  icon: string;
}

export default function SmallWeatherCard(props: WeatherInfo) {
  return (
    <div className="pt-11 pl-4 pr-4 pb-11 rounded-[18px] px-4 max-w-[100px] max-h-[294px] bg-product flex flex-col gap-6">
      <h2
        className="font-bold text-4xl pt-1 pb-1"
        style={{
          textShadow: '-1.85429px 2.78143px 0.927143px rgba(0, 0, 0, 0.1)',
        }}
      >
        {props.dayWeek}
      </h2>
      <Image
        src={`http://openweathermap.org/img/wn/${props.icon}.png`}
        alt="Icon"
        width={64}
        height={64}
      />
      <h3
        className="font-bold text-4xl pt-1 pb-1"
        style={{
          textShadow: '-1.85429px 2.78143px 0.927143px rgba(0, 0, 0, 0.1)',
        }}
      >
        {props.temp}°
      </h3>
    </div>
  );
}
