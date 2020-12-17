import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  return (
    <Navbar color="dark" expand="md" className="d-flex justify-content-between">
      <Link to="/">
        <NavbarBrand>
          <h1>{t('app.title')}</h1>
        </NavbarBrand>
      </Link>
      <Nav style={{ color: 'white' }}>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleChangeLanguage('fr');
          }}
        >
          FR
        </span>
        &nbsp;|&nbsp;
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleChangeLanguage('en');
          }}
        >
          EN
        </span>
      </Nav>
    </Navbar>
  );
};

export default Header;
