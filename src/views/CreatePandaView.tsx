import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';
import PandaForm, { PandaFormValues } from '../components/PandaForm';
import useCreatePanda from '../hooks/useCreatePanda';

const CreatePandaView = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

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
      <h2>{t('createPanda.title')}</h2>
      {isError && (
        <Alert color="danger">{t('createPanda.errors.create')}</Alert>
      )}
      <PandaForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default CreatePandaView;
