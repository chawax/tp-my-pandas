import { useContext } from 'react';
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

type ChooseDisplayModeProps = {
  code: string;
  label: string;
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
  const { displayMode } = useContext(DisplayModeContext);
  const navbarColor = displayMode === 'dark' ? 'dark' : 'light';
  const textColor = displayMode === 'dark' ? '#FFF' : '#000';
  return (
    <Navbar color={navbarColor} dark expand="md">
      <NavbarBrand style={{ color: textColor }}>
        <h1>My pandas</h1>
      </NavbarBrand>
      <Nav style={{ color: textColor, flexDirection: 'column' }}>
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
