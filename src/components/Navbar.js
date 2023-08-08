import React from 'react';
import {Link} from "react-router-dom";

/*Bootstrap*/
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

/*Styles*/
import '../styles/Navbar.css';


var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.backgroundColor = "white";
      } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
      }
      prevScrollpos = currentScrollPos;
    };

function NavBar(){
    return (
      <Navbar expand="lg" sticky="top" id="navbar">
        <Container>
          <Link className="nav-a" to="/">
          <Navbar.Brand href="#" style={{fontFamily:'Miama' , fontSize: '48px'}}>Thuo International</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className='justify-content-end'>
            <Nav>
              <Nav.Item>
                <Link to="/" className="nav-link">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about" className="nav-link">About</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/services" className="nav-link">Services</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contact" className="nav-link">Contact</Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/coffee" className="nav-link">Coffee</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;