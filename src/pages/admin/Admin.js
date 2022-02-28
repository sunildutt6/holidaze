import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import HotelPage from "../hotels/HotelPage";

function Admin() {
  return (
    <>
      <HotelPage />
      <Navbar expand="lg">
        <Container>
          <Nav className="mx-auto">
            <Link to="/admin/add" exact className="nav-link">
              Add Hotel
            </Link>
            <Link to="/admin/edit" className="nav-link">
              Edit Hotel
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Admin;
