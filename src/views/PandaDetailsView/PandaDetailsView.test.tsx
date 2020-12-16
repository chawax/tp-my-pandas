import {
  findByRole,
  getByRole,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { ReactNode } from 'react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import pandas from '../../mocks/pandas.json';
import PandaDetailsView from './';

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

describe('PandaDetailsView', () => {
  afterEach(() => {
    axiosMock.reset();
    queryClient.getQueryCache().clear();
  });

  test('should render the details of the panda', async () => {
    axiosMock.onGet('http://localhost:3004/pandas/1').reply(200, pandas[0]);

    const { getByText, findAllByRole, findByRole, getByRole } = render(
      <ReactQueryWrapper>
        <PandaDetailsView />
      </ReactQueryWrapper>,
    );

    // Should display a loading indicator

    const loadingElement = getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();

    // The loading indicator should disappear

    await waitForElementToBeRemoved(() => getByText(/Loading.../i));
    expect(loadingElement).not.toBeInTheDocument();

    // Should display the details on the panda

    expect(getByText(/Yuan Meng/)).toBeInTheDocument();
    expect(getByText(/yoga/)).toBeInTheDocument();
    expect(getByText(/bambou/)).toBeInTheDocument();

    const imageElement = getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toEqual(pandas[0].image);

    const closeElement = getByRole('button');
    expect(closeElement).toBeInTheDocument();
  });

  test('should fail to load the details of the panda', async () => {
    axiosMock.onGet('http://localhost:3004/pandas/1').networkError();

    const { getByText } = render(
      <ReactQueryWrapper>
        <PandaDetailsView />
      </ReactQueryWrapper>,
    );

    // Should display a loading indicator

    const loadingElement = getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();

    // The loading indicator should disappear

    await waitForElementToBeRemoved(() => getByText(/Loading.../i));
    expect(loadingElement).not.toBeInTheDocument();

    // Should display an error message

    const errorElement = getByText(/Network Error/i);
    expect(errorElement).toBeInTheDocument();
  });
});
