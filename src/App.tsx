import type { ReactNode } from 'react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Header from './components/Header';
import Router from './components/Router';

const queryClient = new QueryClient();
const ReactQueryWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

function App() {
  return (
    <ReactQueryWrapper>
      <Header />
      <Router />
    </ReactQueryWrapper>
  );
}

export default App;
