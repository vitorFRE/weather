import Image from 'next/image';

interface WeatherInfo {
  temp: number;
  city: string;
  icon: string;
  description: string;
}

export default function SmallCity(props: WeatherInfo) {
  return (
    <div className="flex gap-4 justify-between rounded-[18px] px-4 max-w-[413px] h-[104px] items-center bg-blk">
      <div className="flex gap-4">
        <Image
          src={`http://openweathermap.org/img/wn/${props.icon}.png`}
          alt="Icon"
          width={65}
          height={65}
        />
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-white pt-2 pb-1">
            {props.city}
          </h4>
          <p className="text-gray-400 font-bold">{props.description}</p>
        </div>
      </div>
      <h3
        className="font-bold text-4xl pt-1 pb-1 text-product"
        style={{
          textShadow: '-1.85429px 2.78143px 0.927143px rgba(0, 0, 0, 0.1)',
        }}
      >
        {props.temp}°
      </h3>
    </div>
  );
}
