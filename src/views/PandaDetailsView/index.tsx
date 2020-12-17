import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ErrorAndRetry from '../../components/ErrorAndRetry';
import PandaDetails from '../../components/PandaDetails';
import usePandaDetails from '../../hooks/usePandaDetails';

const PandaDetailsView = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isSuccess, data, error, refetch } = usePandaDetails(id);

  const history = useHistory();
  const handleClose = () => {
    history.push('/pandas');
  };
  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorAndRetry message={error.message} onRetry={refetch} />}
      {isSuccess && data && <PandaDetails panda={data} onClose={handleClose} />}
    </>
  );
};

export default PandaDetailsView;
