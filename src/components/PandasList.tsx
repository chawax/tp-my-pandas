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
  return (
    <ListGroup>
      {pandas.length > 0 ? (
        pandas.map((panda: Panda) => (
          <PandaItem
            key={panda.id}
            name={panda.name}
            onPress={() => onPress(panda.id)}
          />
        ))
      ) : (
        <ListGroupItem>Aucun panda n'a été trouvé !</ListGroupItem>
      )}
    </ListGroup>
  );
};

export default PandasList;
