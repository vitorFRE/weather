import React, { ReactNode } from 'react';
import Meta from './Meta';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white">
      <Meta />
      {children}
    </div>
  );
}
