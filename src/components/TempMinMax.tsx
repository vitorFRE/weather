import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface TempMinMaxProps {
  tempMax: number;
  tempMin: number;
}

export default function TempMinMax(props: TempMinMaxProps) {
  return (
    <div className="container mx-auto flex justify-between items-center pt-5 pl-6 pb-7 rounded-[18px] px-4 max-w-[413px] max-h-[294px] bg-product">
      <div>
        <Image src="/max.svg" width={64} height={64} alt="Temp max" />
        <h2 className="text-xl font-semibold text-black pt-2 pb-1">Temp Max</h2>
        <p className="text-white-800 font-bold text-xl">{props.tempMax}°C</p>
      </div>

      <hr className="border-2 border-white h-60 mx-4 rounded-sm" />

      <div>
        <Image src="/min.svg" width={64} height={64} alt="Temp max" />
        <h2 className="text-xl font-semibold text-black pt-2 pb-1">Temp Min</h2>
        <p className="text-white-800 font-bold text-xl">{props.tempMin}°C</p>
      </div>
    </div>
  );
}
