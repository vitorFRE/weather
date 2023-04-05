import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

interface SunriseSunsetProps {
  sunrise: number;
  sunset: number;
}

export default function SunriseSunset(props: SunriseSunsetProps) {
  const timestamptSunrise = new Date(props.sunrise * 1000);
  const timestamptSunset = new Date(props.sunset * 1000);

  const sunrise = timestamptSunrise.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const sunset = timestamptSunset.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  console.log(sunrise); // Saída: "05:39 AM" (formato hora:minutos no fuso horário local)

  return (
    <div className="container mx-auto flex justify-between items-center pt-5 pl-6 pb-7 rounded-[18px] px-4 max-w-[413px] max-h-[294px] bg-product">
      <div>
        <SunIcon className="h-16 w-16 text-white" />
        <h2 className="text-xl font-semibold text-black pt-2 pb-1">
          Nascer do sol
        </h2>
        <p className="text-white-800 font-bold text-xl">{sunrise}</p>
      </div>

      <hr className="border-2 border-white h-60 mx-4 rounded-sm" />

      <div>
        <MoonIcon className="h-16 w-16 text-white" />
        <h2 className="text-xl font-semibold text-black pt-2 pb-1">
          Pôr do sol
        </h2>
        <p className="text-white-800 font-bold text-xl">{sunset}</p>
      </div>
    </div>
  );
}
