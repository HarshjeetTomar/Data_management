import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";




const TopBar = () => {
  return (
    <>
   <Navbar  expand="lg" className="bg-primary">
      <Container >
        <Navbar.Brand>Data_Managment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">
              <Link to="/" className="text-decoration-none text-dark">Home</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/Add" style={{textDecoration:"none",color:"black"}}>Fill Form</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default TopBar