import { useNavigate } from 'react-router-dom';
import PandaForm, { PandaFormValues } from '../components/PandaForm';
import useCreatePanda from '../hooks/useCreatePanda';
import { Alert } from 'reactstrap';

const CreatePandaView = () => {
  const navigate = useNavigate();

  const { isError, mutateAsync: createPanda } = useCreatePanda();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = async (values: PandaFormValues) => {
    const panda = {
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    await createPanda(panda);
    navigate('/pandas');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Création d'un nouveau panda</h2>
      {isError && <Alert color="danger">Impossible de créer le panda</Alert>}
      <PandaForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default CreatePandaView;
