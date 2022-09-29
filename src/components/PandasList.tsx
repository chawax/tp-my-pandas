import { useTranslation } from 'react-i18next';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Panda } from '../types/Panda';
import PandaItem from './PandaItem';

export type PandasListProps = {
  /**
   * Liste des pandas
   */
  pandas: Array<Panda>;

  /**
   * Evénement déclenché lorsqu'on clique sur un panda dans la liste
   * @param id identifiant du panda
   */
  onPress: (id: string) => void;
};

const PandasList = ({ pandas, onPress }: PandasListProps) => {
  const { t } = useTranslation();
  return (
    <ListGroup>
      {pandas.length > 0 ? (
        pandas.map((panda: Panda) => (
          <PandaItem
            key={panda.key}
            name={panda.name}
            onPress={() => onPress(panda.key)}
          />
        ))
      ) : (
        <ListGroupItem>{t('pandaList.noPandas')}</ListGroupItem>
      )}
    </ListGroup>
  );
};

export default PandasList;
