import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ErrorAndRetry from '../../components/ErrorAndRetry';
import PandasList from '../../components/PandasList';
import usePandas from '../../hooks/usePandas';

const PandasListView = () => {
  const history = useHistory();

  const handlePress = useCallback(
    (id: string) => {
      history.push(`/pandas/${id}`);
    },
    [history],
  );

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
