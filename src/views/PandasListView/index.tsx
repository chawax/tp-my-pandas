import React from 'react';
import { Spinner } from 'reactstrap';
import ErrorAndRetry from '../../components/ErrorAndRetry';
import PandasList from '../../components/PandasList';
import usePandas from '../../hooks/usePandas';

const handlePress = (id: string) => {
  alert(`Panda ${id} was pressed`);
};

const PandasListView = () => {
  const { isLoading, isSuccess, data, error, refetch } = usePandas();
  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorAndRetry message={error.message} onRetry={refetch} />}
      {isSuccess && data && <PandasList pandas={data} onPress={handlePress} />}
    </>
  );
};

export default PandasListView;
