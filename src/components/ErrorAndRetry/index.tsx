import React from 'react';
import { Alert, Button } from 'reactstrap';

type ErrorAndRetryProps = {
  message: string;
  onRetry?: () => void;
};

const ErrorAndRetry = (props: ErrorAndRetryProps) => {
  return (
    <Alert color="danger">
      {props.message}
      {props.onRetry && (
        <Button
          color="danger"
          onClick={props.onRetry}
          className="float-right"
          size="sm"
        >
          Réessayer
        </Button>
      )}
    </Alert>
  );
};

export default ErrorAndRetry;
