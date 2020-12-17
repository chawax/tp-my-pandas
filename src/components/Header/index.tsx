import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header: React.FC = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Link to="/">
        <NavbarBrand>
          <h1>My pandas</h1>
        </NavbarBrand>
      </Link>
    </Navbar>
  );
};

export default Header;
