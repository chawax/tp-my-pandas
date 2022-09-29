import { useTranslation } from 'react-i18next';
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

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

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

const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>
        <h1>{t('app.title')}</h1>
      </NavbarBrand>
      <Nav style={{ color: 'white' }}>
        <ChooseLanguage code="fr" label="FR" />
        &nbsp;|&nbsp;
        <ChooseLanguage code="en" label="EN" />
      </Nav>
    </Navbar>
  );
};

export default Header;
