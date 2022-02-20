import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Button from "react-bootstrap/Button";

const Styles = styled.div`
  .navbar-brand,
  .navbar-nav .nav-link {
    color: var(--grey);
    margin-right: 2rem;
  }
  a.nav-link.active,
  .btn {
    text-transform: uppercase;
    border-bottom: 2px solid var(--primary-blue);
  }
`;

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }
  return (
    <Styles>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/" exact className="nav-link">
                Home
              </NavLink>
              <NavLink to="/hotels" className="nav-link">
                Hotels
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
              {auth ? (
                <>
                  <NavLink to="/admin" className="nav-link">
                    Admin
                  </NavLink>
                  <Button type="submit" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
}

export default Navigation;
