import React from 'react';
import { Spinner } from 'reactstrap';
import ErrorAndRetry from '../../components/ErrorAndRetry';
import PandaDetails from '../../components/PandaDetails';
import usePandaDetails from '../../hooks/usePandaDetails';

const handleClose = () => {
  alert('close');
};

const PandaDetailsView = () => {
  const { isLoading, isSuccess, data, error, refetch } = usePandaDetails('1');
  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorAndRetry message={error.message} onRetry={refetch} />}
      {isSuccess && data && <PandaDetails panda={data} onClose={handleClose} />}
    </>
  );
};

export default PandaDetailsView;
