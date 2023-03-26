import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import SearchBar from './SearchBar';
import { SearchContext } from '@/utils/SearchContext';
import { useQueryClient } from 'react-query';
import { WeatherData } from '@/services/API';

export default function Header() {
  const { search: cidadeInput } = React.useContext(SearchContext);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData([
    'weather',
    cidadeInput,
  ]) as WeatherData;

  return (
    <header className="container mx-auto px-4 pt-7 flex justify-between">
      <div className="flex gap-3 items-center">
        <MapPinIcon className="h-8 w-8 text-product" />
        <p className="text-xl font-semibold">
          {data ? `${data?.name} - ${data?.sys.country}` : 'Cidade atual'}
        </p>
      </div>
      <SearchBar />
    </header>
  );
}
