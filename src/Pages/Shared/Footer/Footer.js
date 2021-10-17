import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import logo from "./Images/logo.png";

const Footer = () => {
  return (
    <div className="dark">
      <Container>
        <Row className="py-4">
          <Col xm={12} md={6}>
            <Navbar.Brand>
              <img
                src="/Images/logo.png"
                className="d-inline-block  align-top"
                style={{
                  maxWidth: "230px",
                  width: "100%",
                }}
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>
          <Col xm={12} md={6}>
            <Row>
              <Col xm={12} md={6}>
                <Nav.Item>
                  <NavLink className="nav-link text-light" to="/">
                    One Link
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link text-light" to="/">
                    One Link
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link text-light" to="/">
                    One Link
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link text-light" to="/">
                    One Link
                  </NavLink>
                </Nav.Item>
              </Col>
              <Col xm={12} md={6}>
                <Nav.Item>
                  <NavLink className="nav-link text-light" to="/">
                    One Link
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link text-light" to="/">
                    One Link
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link text-light" to="/">
                    One Link
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link text-light" to="/">
                    One Link
                  </NavLink>
                </Nav.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <p className=" l-s-2 text-center text-secondary py-3 mb-0">
          Sakib Siddiqi Supto
        </p>
      </Container>
    </div>
  );
};

export default Footer;
