import React, { useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ErrorAndRetry from '../../components/ErrorAndRetry';
import PandaForm, { PandaFormValues } from '../../components/PandaForm';
import usePandaDetails from '../../hooks/usePandaDetails';

const EditPandaView = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isSuccess, data, error, refetch } = usePandaDetails(id);

  const history = useHistory();
  const handleCancel = useCallback(() => {
    history.replace(`/pandas/${id}`);
  }, [history, id]);

  const handleSubmit = useCallback((values: PandaFormValues) => {
    const panda = {
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    console.log(panda);
  }, []);

  const initialValues: PandaFormValues | undefined = useMemo(() => {
    if (data) {
      return {
        name: data?.name,
        interests: data?.interests.join(','),
        image: data?.image,
      };
    } else {
      return undefined;
    }
  }, [data]);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorAndRetry message={error.message} onRetry={refetch} />}
      {isSuccess && data && (
        <div style={{ padding: 20 }}>
          <h2>Modification du panda {id}</h2>
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
