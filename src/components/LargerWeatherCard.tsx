import { SunIcon } from '@heroicons/react/24/solid';

export default function LargeWeatherCard() {
  return (
    <div className="pt-5 pl-6 rounded-[18px] px-4 max-w-[413px] max-h-[294px] bg-product">
      <div className="flex justify-between items-center">
        <SunIcon className="h-16 w-16 text-white" />
        <span
          className="p-5 rounded-lg font-bold text-4xl bg-gradient-to-r from-transparent via-white to-white"
          style={{
            backgroundImage:
              'linear-gradient(175.39deg, rgba(255, 255, 255, 0) -17.87%, rgba(255, 255, 255, 0.168) 108.83%, rgba(255, 255, 255, 0.2) 128.44%)',
          }}
        >
          32°C
        </span>
      </div>
      <p>São Paulo - Brasil</p>
      <span>Ensolarado</span>
      <h2>Quarta</h2>
      <p>
        21:45h <span>01/01</span>
      </p>
    </div>
  );
}
