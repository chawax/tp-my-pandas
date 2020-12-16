import type { ReactNode } from 'react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PandasListView from './views/PandasListView';

const queryClient = new QueryClient();
const ReactQueryWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

function App() {
  return (
    <ReactQueryWrapper>
      <PandasListView />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryWrapper>
  );
}

export default App;
