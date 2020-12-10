import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import PandasList from '../../components/PandasList';
import { Panda } from '../../types/Panda';

const handlePress = (id: string) => {
  alert(`Panda ${id} was pressed`);
};

const PandasListView = () => {
  const [pandas, setPandas] = useState<Panda[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get('http://localhost:3004/pandas')
        .then((result) => {
          setPandas(result.data);
          setError('');
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {!isLoading && pandas && (
        <PandasList pandas={pandas} onPress={handlePress} />
      )}
    </>
  );
};

export default PandasListView;
