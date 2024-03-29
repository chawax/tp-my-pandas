import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import ErrorAndRetry from '../components/ErrorAndRetry';
import PandasList from '../components/PandasList';
import usePandas from '../hooks/usePandas';

const PandasListView = () => {
  const { isLoading, isSuccess, isError, data, error, refetch } = usePandas();

  const navigate = useNavigate();

  const handlePress = (id: string) => {
    navigate(`/pandas/${id}`);
  };

  const handleNewPanda = () => {
    navigate('/pandas/new');
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isError && error && (
        <ErrorAndRetry message={error.message} onRetry={refetch} />
      )}
      {isSuccess && data && (
        <>
          <PandasList pandas={data} onPress={handlePress} />
          <div style={{ padding: 20 }}>
            <Button
              color="primary"
              style={{ marginTop: 10, marginRight: 10 }}
              onClick={handleNewPanda}
            >
              Créer un nouveau panda
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default PandasListView;
