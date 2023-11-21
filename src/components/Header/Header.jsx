import React, { useEffect, useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import LogoGlobal from "../../assets/logoGlobal.png";

export default function Header() {
  const [visivel, setVisivel] = useState(true);

  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (!userData) {
      return;
    }
    setVisivel(false);
  }, [userData]);

  const handleClick = () => {
    const confirmacao = window.confirm("Tem certeza que deseja sair?");
    if (!confirmacao) {
      return;
    }
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {!visivel && (
            <Navbar.Brand href="home">
              <img className="logo" src={LogoGlobal} alt="logo" />
              MedSync
            </Navbar.Brand>
          )}
          {visivel && (
            <Navbar.Brand href="">
              <img className="logo" src={LogoGlobal} alt="logo" />
              MedSync
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {!visivel && (
            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav className="ms-auto">
                <Nav.Link className="" href="home">
                  Home
                </Nav.Link>
                <Nav.Link className="" href="about">
                  Sobre nós
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="">
              {visivel && (
                <Nav.Link className="TextLogin" href="/">
                  Login
                </Nav.Link>
              )}
              {visivel && (
                <Nav.Link className="TextSignIn" href="signIn">
                  SignIn
                </Nav.Link>
              )}
              {!visivel && (
                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                  <NavDropdown.Item href="perfil">Conta</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" onClick={handleClick}>
                    Sair
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
