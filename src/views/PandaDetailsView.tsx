import { useNavigate, useParams } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import ErrorAndRetry from '../components/ErrorAndRetry';
import PandaDetails from '../components/PandaDetails';
import usePandaDetails from '../hooks/usePandaDetails';

const PandaDetailsView = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, isSuccess, isError, data, error, refetch } =
    usePandaDetails(id!);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/pandas');
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isError && error && (
        <ErrorAndRetry message={error.message} onRetry={refetch} />
      )}
      {isSuccess && data && <PandaDetails panda={data} />}
      <div style={{ marginLeft: 30, marginTop: 10 }}>
        <Button color="primary" onClick={handleClose}>
          Fermer
        </Button>
      </div>
    </>
  );
};

export default PandaDetailsView;
