import { render, waitForElementToBeRemoved } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { ReactNode } from 'react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, Route } from 'react-router-dom';
import pandas from '../../mocks/pandas.json';
import PandaDetailsView from './';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

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

// https://testing-library.com/docs/example-react-router

function renderWithRouter(
  //@ts-ignore
  ui,
  {
    path = '/',
    //@ts-ignore
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  return {
    ...render(
      <ReactQueryWrapper>
        <Router history={history}>
          <Route path={path} component={ui} />
        </Router>
      </ReactQueryWrapper>,
    ),
    history,
  };
}

describe('PandaDetailsView', () => {
  afterEach(() => {
    axiosMock.reset();
    queryClient.getQueryCache().clear();
  });

  test('should render the details of the panda', async () => {
    axiosMock.onGet('http://localhost:3004/pandas/1').reply(200, pandas[0]);

    /*
    const { getByText, getByRole } = render(
      <ReactQueryWrapper>
      <Router history={history}>
      <Route path="/pandas/1" component={PandaDetailsView} />
      </Router>
      </ReactQueryWrapper>,
      );
      */

    const { getByText, getByRole } = renderWithRouter(PandaDetailsView, {
      route: '/pandas/1',
      path: '/pandas/:id',
    });

    /*
    const history = createMemoryHistory({
      initialEntries: ['/', '/pandas/1'],
    });
    const path = '/pandas/:id';
    const { getByText, getByRole } = render(
      <ReactQueryWrapper>
        <Router history={history}>
          <Route path={path} component={PandaDetailsView} />
        </Router>
      </ReactQueryWrapper>,
    );
    */

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

    const { getByText } = renderWithRouter(PandaDetailsView, {
      route: '/pandas/1',
      path: '/pandas/:id',
    });

    /*
    const { getByText } = render(
      <ReactQueryWrapper>
        <Router history={history}>
          <PandaDetailsView />
        </Router>
      </ReactQueryWrapper>,
    );
    */

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
