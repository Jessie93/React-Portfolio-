import React from 'react';
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar className="section nav">
        <Nav className="nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="../assets/CV" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>

        </Nav>
    </Navbar>            
  );
}

export default NavBar;
