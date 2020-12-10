import React from 'react';
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Media,
  Row,
} from 'reactstrap';

export type PandaItemProps = {
  name: string;
  onPress(): void;
};

const PandaItem = (props: PandaItemProps) => (
  <ListGroup horizontal>
    <ListGroupItem>{props.name.substring(0, 1)}</ListGroupItem>
    <ListGroupItem>{props.name}</ListGroupItem>
  </ListGroup>
);

export default PandaItem;
