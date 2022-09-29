import { useTranslation } from 'react-i18next';
import { Alert, Button } from 'reactstrap';

type ErrorAndRetryProps = {
  message: string;
  onRetry?: () => void;
};

const ErrorAndRetry = ({ message, onRetry }: ErrorAndRetryProps) => {
  const { t } = useTranslation();

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
          {t('common.retry')}
        </Button>
      ) : null}
    </Alert>
  );
};

export default ErrorAndRetry;
