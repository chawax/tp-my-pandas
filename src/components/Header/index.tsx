import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';

const styles = {
  languageEnabled: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  languageDisabled: {
    cursor: 'pointer',
    fontWeight: 'normal',
  },
};

type ChooseLanguageProps = {
  code: string;
  label: string;
};

const ChooseLanguage = (props: ChooseLanguageProps) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  const style: React.CSSProperties =
    i18n.language === props.code
      ? (styles.languageEnabled as React.CSSProperties)
      : (styles.languageDisabled as React.CSSProperties);

  return (
    <span
      style={style}
      onClick={() => {
        handleChangeLanguage(props.code);
      }}
    >
      {props.label}
    </span>
  );
};

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Navbar color="dark" expand="md" className="d-flex justify-content-between">
      <Link to="/">
        <NavbarBrand>
          <h1>{t('app.title')}</h1>
        </NavbarBrand>
      </Link>
      <Nav style={{ color: 'white' }}>
        <ChooseLanguage code="fr" label="FR" />
        &nbsp;|&nbsp;
        <ChooseLanguage code="en" label="EN" />
      </Nav>
    </Navbar>
  );
};

export default Header;
