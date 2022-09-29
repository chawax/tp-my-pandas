import { useNavigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ErrorAndRetry from '../components/ErrorAndRetry';
import PandasList from '../components/PandasList';
import usePandas from '../hooks/usePandas';

const PandasListView = () => {
  const { isLoading, isSuccess, isError, data, error, refetch } = usePandas();

  const navigate = useNavigate();

  const handlePress = (id: string) => {
    navigate(`/pandas/${id}`);
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isError && error && (
        <ErrorAndRetry message={error.message} onRetry={refetch} />
      )}
      {isSuccess && data && <PandasList pandas={data} onPress={handlePress} />}
    </>
  );
};

export default PandasListView;
