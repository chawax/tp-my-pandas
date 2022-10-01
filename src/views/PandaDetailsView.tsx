import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Button, Spinner } from 'reactstrap';
import ErrorAndRetry from '../components/ErrorAndRetry';
import PandaDetails from '../components/PandaDetails';
import useDeletePanda from '../hooks/useDeletePanda';
import usePandaDetails from '../hooks/usePandaDetails';

const PandaDetailsView = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, isSuccess, isError, data, error, refetch } =
    usePandaDetails(id!);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const {
    isLoading: isDeleting,
    isError: isErrorOnDelete,
    mutateAsync: deletePanda,
  } = useDeletePanda();

  const handleClose = () => {
    navigate(-1);
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
      {isLoading && <Spinner />}
      {isDeleting && <Spinner />}
      {isError && error && (
        <ErrorAndRetry message={error.message} onRetry={refetch} />
      )}
      {isErrorOnDelete && (
        <Alert color="danger">{t('pandaDetails.error.delete')}</Alert>
      )}
      {isSuccess && data && (
        <>
          <PandaDetails panda={data} />
          <div style={{ padding: 20 }}>
            <Button color="primary" onClick={handleClose}>
              {t('common.close')}
            </Button>
            <Button
              color="primary"
              onClick={handleEdit}
              style={{ marginLeft: 10 }}
            >
              {t('pandaDetails.editPanda')}
            </Button>
            <Button
              color="primary"
              onClick={handleDelete}
              style={{ marginLeft: 10 }}
            >
              {t('pandaDetails.deletePanda')}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default PandaDetailsView;
