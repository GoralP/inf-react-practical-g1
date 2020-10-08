import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from "reactstrap";
import logo from "../images/logo_autodigg.png";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className="nav-text header-master" fixed="top">
      <NavbarBrand>
        <img className="blog-logo" alt="blog-logo" src={logo} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto">
          <NavItem>
            <NavLink className="navbar-menu-item">HOW DOES IT WORK?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-menu-item">WHY US?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-menu-item">CONTACT US?</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <NavLink className="navbar-menu-item">BLOG</NavLink>
        </NavbarText>
        <NavbarText>
          <NavLink className="navbar-menu-item">DEALERS</NavLink>
        </NavbarText>
        <NavbarText>
          <Button className="signin-register">SIGN IN / REGISTER</Button>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
