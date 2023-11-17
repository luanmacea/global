import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="div_paginas">
                <Nav.Link className="paginas" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="paginas" href="about">
                  Sobre
                </Nav.Link>
              </div>
              <Nav.Link className="login" href="login">
                Login
              </Nav.Link>
              <Nav.Link className="signIn" href="signIn">
                SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
