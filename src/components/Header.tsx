import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import DisplayModeContext from '../context/DisplayModeContext';

const styles = {
  enabled: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  disabled: {
    cursor: 'pointer',
    fontWeight: 'normal',
  },
};

type ChooseLanguageProps = {
  code: string;
  label: string;
};

type ChooseDisplayModeProps = {
  code: string;
  label: string;
};

const ChooseLanguage = (props: ChooseLanguageProps) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const style: React.CSSProperties =
    i18n.language === props.code
      ? (styles.enabled as React.CSSProperties)
      : (styles.disabled as React.CSSProperties);

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

const ChooseDisplayMode = (props: ChooseDisplayModeProps) => {
  const { displayMode, toggleDisplayMode } = useContext(DisplayModeContext);

  const style: React.CSSProperties =
    displayMode === props.code
      ? (styles.enabled as React.CSSProperties)
      : (styles.disabled as React.CSSProperties);

  return (
    <span style={style} onClick={toggleDisplayMode}>
      {props.label}
    </span>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const { displayMode } = useContext(DisplayModeContext);
  const navbarColor = displayMode === 'dark' ? 'dark' : 'light';
  const textColor = displayMode === 'dark' ? '#FFF' : '#000';
  return (
    <Navbar
      color={navbarColor}
      dark
      expand="md"
      className="d-flex justify-content-between"
    >
      <NavbarBrand style={{ color: textColor }}>
        <h1>{t('app.title')}</h1>
      </NavbarBrand>
      <Nav style={{ color: textColor, flexDirection: 'column' }}>
        <div>
          <ChooseLanguage code="fr" label="FR" />
          &nbsp;|&nbsp;
          <ChooseLanguage code="en" label="EN" />
        </div>
        <div>
          <ChooseDisplayMode code="dark" label="DARK" />
          &nbsp;|&nbsp;
          <ChooseDisplayMode code="light" label="LIGHT" />
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
