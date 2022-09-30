import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PandaForm, { PandaFormValues } from '../components/PandaForm';

const CreatePandaView = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = (values: PandaFormValues) => {
    const panda = {
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    console.log(panda);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{t('createPanda.title')}</h2>
      <PandaForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default CreatePandaView;
