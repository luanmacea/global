import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import LogoGlobal from "../../assets/logoGlobal.png";

export default function Header() {
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={LogoGlobal} alt="logo" />
            MedSync
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="paginas" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="paginas" href="about">
                Sobre
              </Nav.Link>
              <Nav.Link className="" href="login">
                Login
              </Nav.Link>
              <Nav.Link className="" href="signIn">
                SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
