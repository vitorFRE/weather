import React, { ReactNode } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="container mx-auto px-4 pt-7 flex justify-between">
      <div className="flex gap-3 items-center">
        <MapPinIcon className="h-8 w-8 text-product" />
        <p className="text-xl font-semibold">São Paulo - Brasil</p>
      </div>
      <SearchBar />
    </header>
  );
}
