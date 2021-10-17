import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import logo2 from "../../../Images/logo2.png";
// import logo from "../../../Images/logo2.png";
import { Cart2 } from "react-bootstrap-icons";
import "./Header.css";
const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/Images/logo2.png"
            className="d-none d-md-inline-block  align-top"
            style={{
              maxWidth: "130px",
              width: "100%",
            }}
            alt="React Bootstrap logo"
          />
          <img
            src="/Images/logo.png"
            className="d-inline-block d-md-none align-top"
            style={{
              maxWidth: "130px",
              width: "100%",
            }}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar id="basic-navbar-nav flex-grow-1">
          <Nav className="me-auto">
            <NavLink to="/cart" className="nav-link me-2">
              <Cart2 size={25} />
            </NavLink>
            <NavLink to="/login" className="fw-bold l-s-1 nav-link me-2">
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="signup-btn nav-link me-2 px-3 l-s-1"
            >
              Signup
            </NavLink>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Header;
