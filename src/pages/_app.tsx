import '@/styles/globals.css';
import { SerchProvider } from '@/utils/SearchContext';
import type { AppProps } from 'next/app';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <SerchProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </SerchProvider>
  );
}
