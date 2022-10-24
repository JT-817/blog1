import { Container, Nav, Navbar } from 'react-bootstrap';

import React from 'react'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark"  expand="md" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Josh T Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">Articles</Nav.Link>
              <Nav.Link href="#">About Me</Nav.Link>
              <Nav.Link href="#">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header