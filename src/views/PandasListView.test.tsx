import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ReactNode } from 'react';
import pandas from '../mocks/pandas.json';
import PandasListView from './PandasListView';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const ReactQueryWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const axiosMock = new MockAdapter(axios);

describe('PandasListView', () => {
  afterEach(() => {
    axiosMock.reset();
    queryClient.getQueryCache().clear();
  });

  test('should render a list of pandas', async () => {
    axiosMock.onGet('http://localhost:3004/pandas').reply(200, pandas);

    render(<PandasListView />, { wrapper: ReactQueryWrapper });

    // Should display a loading indicator

    expect(screen.getByRole('status')).toBeInTheDocument();

    // The loading indicator should disappear

    await waitForElementToBeRemoved(screen.queryByRole('status'));

    // Should display one list with a listitem for every panda

    const listElements = await screen.findAllByRole('list');
    expect(listElements.length).toBe(1);

    const itemElements = await screen.findAllByRole('listitem');
    expect(itemElements.length).toBe(pandas.length);
  });

  test('should fail to load pandas', async () => {
    axiosMock.onGet('http://localhost:3004/pandas').reply(500);

    render(<PandasListView />, { wrapper: ReactQueryWrapper });

    // Should display a loading indicator

    expect(screen.getByRole('status')).toBeInTheDocument();

    // The loading indicator should disappear

    await waitForElementToBeRemoved(screen.queryByRole('status'));

    // Should display an error message

    expect(
      screen.getByText(/Request failed with status code 500/i),
    ).toBeInTheDocument();
  });
});
