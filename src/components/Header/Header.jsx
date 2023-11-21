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
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto">
              <Nav.Link className="" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="" href="about">
                Sobre nós
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="">
              <Nav.Link className="TextLogin" href="login">
                Login
              </Nav.Link>
              <Nav.Link className="TextSignIn" href="signIn">
                SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
