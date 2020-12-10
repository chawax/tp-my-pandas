import { useEffect, useState } from 'react';
import axios from 'axios';
import { Panda } from '../../types/Panda';

const usePandas = () => {
  const [data, setData] = useState<Panda[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get('http://localhost:3004/pandas')
        .then((result) => {
          setData(result.data);
          setError('');
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 0); //2000);
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default usePandas;
