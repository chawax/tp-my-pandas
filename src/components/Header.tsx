import { useTranslation } from 'react-i18next';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>
        <h1>{t('app.title')}</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
