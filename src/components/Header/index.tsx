import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Navbar color="dark" dark expand="md">
      <Link to="/">
        <NavbarBrand>
          <h1>{t('app.title')}</h1>
        </NavbarBrand>
      </Link>
    </Navbar>
  );
};

export default Header;
