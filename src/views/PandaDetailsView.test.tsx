import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { ReactNode } from 'react';
import pandas from '../mocks/pandas.json';
import PandaDetailsView from './PandaDetailsView';

// Wrapper for React Query
// We disable retry mode on queries

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

// Mock navigation hooks used in the component
// useParams hook should alway return id = 1

const mockedNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => ({
  ...((await importOriginal()) as object),
  useParams: () => ({ id: '1' }),
  useNavigate: () => mockedNavigate,
}));

// Mock pour Axios

const axiosMock = new MockAdapter(axios);

describe('PandaDetailsView', () => {
  afterEach(() => {
    axiosMock.reset();
    queryClient.getQueryCache().clear();
  });

  test('should render the details of the panda', async () => {
    // Axios should return a 200 HTTP response with panda details

    axiosMock.onGet('http://localhost:3004/pandas/1').reply(200, pandas[0]);

    // Render the component

    render(<PandaDetailsView />, {
      wrapper: ReactQueryWrapper,
    });

    // Should display a loading indicator

    expect(screen.getByRole('status')).toBeInTheDocument();

    // The loading indicator should disappear

    await waitForElementToBeRemoved(screen.queryByRole('status'));

    // Should display the details on the panda

    expect(screen.getByText(/Yuan Meng/)).toBeInTheDocument();
    expect(screen.getByText(/yoga/)).toBeInTheDocument();
    expect(screen.getByText(/bambou/)).toBeInTheDocument();

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toEqual(pandas[0].image);

    const closeElement = screen.getByRole('button', { name: 'Fermer' });
    expect(closeElement).toBeInTheDocument();

    await userEvent.click(closeElement);
    expect(mockedNavigate).toHaveBeenCalledWith('/pandas');
  });

  test('should fail to load the details of the panda', async () => {
    // Axios should return a 404 HTTP response

    axiosMock.onGet('http://localhost:3004/pandas/1').reply(404);

    // Render the component

    render(<PandaDetailsView />, {
      wrapper: ReactQueryWrapper,
    });

    // Should display a loading indicator

    expect(screen.getByRole('status')).toBeInTheDocument();

    // The loading indicator should disappear

    await waitForElementToBeRemoved(screen.queryByRole('status'));

    // Should display an error message

    const errorElement = screen.getByText(
      /Request failed with status code 404/i,
    );
    expect(errorElement).toBeInTheDocument();
  });
});
