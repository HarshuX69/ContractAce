import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  
  const navigate = useNavigate();
  const onloginClick =()=>{
    navigate('auth/Login')
  }
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary bg-white" >
      <Container fluid>
        <Navbar.Brand className='brandlogo' href="/"><img src="/assets/img/logo-contract.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Service">Services</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Package">Package</Nav.Link>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/TrainingHub">TrainingHub</NavDropdown.Item>
              <NavDropdown.Item href="/">
                AKnowledge Hub
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
          
            <Button className='variant-outline' onClick={onloginClick} variant="outline-success">Login</Button>
          </Form>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
