import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ErrorAndRetry from '../components/ErrorAndRetry';
import PandaDetails from '../components/PandaDetails';
import usePandaDetails from '../hooks/usePandaDetails';

const PandaDetailsView = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, isSuccess, isError, data, error, refetch } =
    usePandaDetails(id!);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isError && error && (
        <ErrorAndRetry message={error.message} onRetry={refetch} />
      )}
      {isSuccess && data && <PandaDetails panda={data} onClose={handleClose} />}
    </>
  );
};

export default PandaDetailsView;
