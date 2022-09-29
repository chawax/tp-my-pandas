import PandasList from '../components/PandasList';
import pandas from '../mocks/pandas.json';

const handlePress = (id: string) => {
  alert(`Panda ${id} was pressed`);
};

const PandasListView = () => (
  <PandasList pandas={pandas} onPress={handlePress} />
);

export default PandasListView;
