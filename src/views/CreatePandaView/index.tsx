import { History } from 'history';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PandaForm, { PandaFormValues } from '../../components/PandaForm';

const CreatePandaView = () => {
  const history: History = useHistory();

  const handleCancel = useCallback(() => {
    history.replace('/pandas');
  }, [history]);

  const handleSubmit = useCallback((values: PandaFormValues) => {
    const panda = {
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    console.log(panda);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Nouveau panda</h2>
      <PandaForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default CreatePandaView;
