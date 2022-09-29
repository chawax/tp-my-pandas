import { Badge, Button } from 'reactstrap';
import { Panda } from '../types/Panda';

export type PandaDetailsProps = {
  panda: Panda;
  onClose: () => void;
};

const PandaDetails = ({ panda, onClose }: PandaDetailsProps) => {
  return (
    <div style={{ padding: 20 }}>
      <h1>{panda.name}</h1>
      {panda.interests && (
        <div>
          {panda.interests.map((item, index) => (
            <Badge key={index} pill color="danger" style={{ marginRight: 5 }}>
              {item}
            </Badge>
          ))}
        </div>
      )}
      <div style={{ marginTop: 10 }}>
        <img src={panda.image} alt={panda.name} />
      </div>
      <div style={{ marginTop: 10 }}>
        <Button color="primary" onClick={onClose}>
          Fermer
        </Button>
      </div>
    </div>
  );
};

export default PandaDetails;
