'use client';

import { type FC, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/core/globals.css';

import { SettingsProvider } from '@/core/settings/SettingsContext';

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  const queryClientRef = useRef(new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <SettingsProvider>
      <QueryClientProvider client={queryClientRef.current}>
        { children }
      </QueryClientProvider>
    </SettingsProvider>
  );
};

export default Providers;
