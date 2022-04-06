import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Signup from "../Signup";
import Login from "../Login";
import Contactus from "../Contactus";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoppersHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link eventKey="1" as={NavLink} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="2" as={NavLink} to="/signup">
                  Signup
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="3" as={NavLink} to="/login">
                  Login
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="4" as={NavLink} to="/contactus">
                  ContactUs
                </Nav.Link>
              </Nav.Item>

              {/* dropdown should appear after user login */}
              <div className="d-none">
                <NavDropdown title="User" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Change password
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default Header;
