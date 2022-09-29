import { Alert, Button } from 'reactstrap';

type ErrorAndRetryProps = {
  message: string;
  onRetry?: () => void;
};

const ErrorAndRetry = ({ message, onRetry }: ErrorAndRetryProps) => {
  return (
    <Alert color="danger">
      <p>{message}</p>
      {onRetry ? (
        <Button
          color="danger"
          onClick={onRetry}
          className="float-right"
          size="sm"
        >
          Réessayer
        </Button>
      ) : null}
    </Alert>
  );
};

export default ErrorAndRetry;
