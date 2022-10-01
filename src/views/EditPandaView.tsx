import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Spinner } from 'reactstrap';
import ErrorAndRetry from '../components/ErrorAndRetry';
import PandaForm, { PandaFormValues } from '../components/PandaForm';
import usePandaDetails from '../hooks/usePandaDetails';
import useUpdatePanda from '../hooks/useUpdatePanda';

const EditPandaView = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { t } = useTranslation();

  const { isLoading, isSuccess, isError, data, error, refetch } =
    usePandaDetails(id!);

  const {
    isLoading: isUpdating,
    isError: isErrorOnUpdate,
    mutateAsync: updatePanda,
  } = useUpdatePanda();

  const handleCancel = () => {
    navigate(`/pandas/${id}`);
  };

  const handleSubmit = async (values: PandaFormValues) => {
    const panda = {
      key: id!,
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    await updatePanda(panda);
    navigate('/pandas');
  };

  const initialValues: PandaFormValues | undefined = data
    ? {
        name: data?.name,
        interests: data?.interests.join(','),
        image: data?.image,
      }
    : undefined;

  return (
    <>
      {isLoading && <Spinner />}
      {isUpdating && <Spinner />}
      {isError && error && (
        <ErrorAndRetry message={error.message} onRetry={refetch} />
      )}
      {isErrorOnUpdate && (
        <Alert color="danger">{t('editPanda.errors.update')}</Alert>
      )}
      {isSuccess && data && (
        <div style={{ padding: 20 }}>
          <h2>{t('editPanda.title')}</h2>
          <PandaForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      )}
    </>
  );
};

export default EditPandaView;
