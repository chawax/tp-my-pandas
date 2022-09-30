import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Router from './components/Router';
import { DisplayModeProvider } from './context/DisplayModeProvider';

const queryClientProvider = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <DisplayModeProvider>
      <QueryClientProvider client={queryClientProvider}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </DisplayModeProvider>
  );
}

export default App;
