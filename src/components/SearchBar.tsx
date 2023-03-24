import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchBar() {
  return (
    <div className="inline-flex flex-col justify-center relative text-gray-500">
      <div className="relative">
        <input
          type="text"
          className="p-2 pl-2 rounded-3xl border border-gray-200 bg-[#E3E3E3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-product focus:border-transparent"
          placeholder="Pesquisar..."
        />
        <MagnifyingGlassIcon className="h-5 w-5 absolute right-2.5 top-3 text-product" />
      </div>
    </div>
  );
}
