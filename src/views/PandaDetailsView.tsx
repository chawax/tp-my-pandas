import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Button, Spinner } from 'reactstrap';
import ErrorAndRetry from '../components/ErrorAndRetry';
import PandaDetails from '../components/PandaDetails';
import usePandaDetails from '../hooks/usePandaDetails';
import useDeletePanda from '../hooks/useDeletePanda';

const PandaDetailsView = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, isSuccess, isError, data, error, refetch } =
    usePandaDetails(id!);

  const navigate = useNavigate();

  const {
    isLoading: isDeleting,
    isError: isErrorOnDelete,
    mutateAsync: deletePanda,
  } = useDeletePanda();

  const handleClose = () => {
    navigate('/pandas');
  };

  const handleEdit = () => {
    navigate(`/pandas/${id}/edit`);
  };

  const handleDelete = async () => {
    await deletePanda(id!);
    navigate('/pandas');
  };

  return (
    <>
      {(isLoading || isDeleting) && <Spinner />}
      {isError && error && (
        <ErrorAndRetry message={error.message} onRetry={refetch} />
      )}
      {isErrorOnDelete && (
        <Alert color="danger">Impossible de supprimer le panda !</Alert>
      )}
      {isSuccess && data && <PandaDetails panda={data} />}
      <div style={{ marginLeft: 20, marginTop: 10 }}>
        <Button color="primary" onClick={handleClose}>
          Fermer
        </Button>
        <Button color="primary" onClick={handleEdit} style={{ marginLeft: 10 }}>
          Modifier le panda
        </Button>
        <Button
          color="primary"
          onClick={handleDelete}
          style={{ marginLeft: 10 }}
        >
          Supprimer le panda
        </Button>
      </div>
    </>
  );
};

export default PandaDetailsView;
