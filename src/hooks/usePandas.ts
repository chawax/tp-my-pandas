import axios from 'axios';
import { useEffect, useState } from 'react';
import { Panda } from '../types/Panda';

const usePandas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Array<Panda>>();
  const [error, setError] = useState<string>();
  useEffect(() => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setData(undefined);
    setError(undefined);
    axios
      .get('http://localhost:3004/pandas')
      .then((result) => {
        setData(result.data);
        setIsSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    isSuccess,
    isError,
    data,
    error,
  };
};

export default usePandas;
