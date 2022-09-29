import { useTranslation } from 'react-i18next';
import { Alert } from 'reactstrap';

const NotFoundView = () => {
  const { t } = useTranslation();
  return <Alert color="danger">{t('errors.404')}</Alert>;
};

export default NotFoundView;
