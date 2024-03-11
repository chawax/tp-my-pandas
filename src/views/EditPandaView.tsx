import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ErrorAndRetry from '../components/ErrorAndRetry';
import PandaForm, { PandaFormValues } from '../components/PandaForm';
import usePandaDetails from '../hooks/usePandaDetails';

const EditPandaView = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { isLoading, isSuccess, isError, data, error, refetch } =
    usePandaDetails(id!);

  const handleCancel = () => {
    navigate(`/pandas/${id}`);
  };

  const handleSubmit = (values: PandaFormValues) => {
    const panda = {
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    console.log(panda);
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
      {isError && error && (
        <ErrorAndRetry message={error.message} onRetry={refetch} />
      )}
      {isSuccess && data && (
        <div style={{ padding: 20 }}>
          <h2>Modification d'un panda</h2>
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
