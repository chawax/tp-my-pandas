import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header: React.FC = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">
        <h1>My pandas</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
