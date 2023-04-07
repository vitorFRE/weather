import { SearchContext } from '@/utils/SearchContext';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';

export default function SearchBar() {
  const { search, setSearch } = React.useContext(SearchContext);

  const [teste, setTest] = React.useState('');

  return (
    <form
      className="inline-flex flex-col justify-center relative text-gray-500"
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(teste);
        console.log(search);
      }}
    >
      <div className="relative">
        <input
          type="text"
          className="p-2 pl-2 rounded-3xl border border-gray-200 bg-[#E3E3E3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-product focus:border-transparent"
          placeholder="Pesquisar..."
          value={teste}
          onChange={(e) => setTest(e.target.value)}
        />
        <MagnifyingGlassIcon className="h-5 w-5 absolute right-2.5 top-3 text-product" />
      </div>
    </form>
  );
}
