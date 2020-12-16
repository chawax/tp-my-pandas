import React from 'react';
import { Spinner } from 'reactstrap';
import PandasList from '../../components/PandasList';
import usePandas from '../../hooks/usePandas';

const handlePress = (id: string) => {
  alert(`Panda ${id} was pressed`);
};

const PandasListView = () => {
  const { isLoading, isSuccess, data, error } = usePandas();
  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>{error.message}</p>}
      {isSuccess && data && <PandasList pandas={data} onPress={handlePress} />}
    </>
  );
};

export default PandasListView;
