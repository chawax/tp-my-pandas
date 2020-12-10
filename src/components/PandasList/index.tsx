import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Panda } from '../../types/Panda';
import PandaItem from './PandaItem';

export type PandasListProps = {
  pandas: Panda[];
  onPress(id: string): void;
};

const PandasList: React.FC<PandasListProps> = (props: PandasListProps) => {
  const { pandas } = props;
  return (
    <ListGroup>
      {pandas.length > 0 ? (
        pandas.map((panda: Panda) => (
          <PandaItem
            key={panda.key}
            name={panda.name}
            onPress={() => props.onPress(panda.key!)}
          />
        ))
      ) : (
        <ListGroupItem>Aucune donnée</ListGroupItem>
      )}
    </ListGroup>
  );
};

export default PandasList;
