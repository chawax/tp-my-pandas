import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import usePandas from '.';
import pandas from '../../mocks/pandas.json';

const axiosMock = new MockAdapter(axios);
describe('usePandas', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  test('request was successful', async () => {
    axiosMock.onGet('http://localhost:3004/pandas').reply(200, pandas);

    const { result, waitForNextUpdate } = renderHook(() => usePandas());
    expect(result.current.isLoading).toBeTruthy();
    await waitForNextUpdate();

    expect(result.current.data).not.toBeUndefined();
    expect(result.current.data).toEqual(pandas);
    expect(result.current.isLoading).toBeFalsy();
  });

  test('request failed', async () => {
    axiosMock.onGet('http://localhost:3004/pandas').networkError();

    const { result, waitForNextUpdate } = renderHook(() => usePandas());
    expect(result.current.isLoading).toBeTruthy();
    await waitForNextUpdate();

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toEqual('Network Error');
    expect(result.current.isLoading).toBeFalsy();
  });
});
