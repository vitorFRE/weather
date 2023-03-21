import React, { ReactNode } from 'react';
import { GlobeAmericasIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <div className="container mx-auto px-4 pt-7">
      <div className="flex gap-3 items-center">
        <GlobeAmericasIcon className="h-8 w-8 text-product" />
        <p className="text-xl font-semibold">São Paulo - Brasil</p>
      </div>
    </div>
  );
}
