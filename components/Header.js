import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src="/images/logo.png" alt="Logo" />
          </NavbarBrand>
          <NavbarToggler
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              background: "none",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
            onClick={toggle}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink style={{ color: "#FFF" }} href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#FFF" }} href="#feature">
                  Quem Somos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#FFF" }} href="#service">
                  Serviços
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
