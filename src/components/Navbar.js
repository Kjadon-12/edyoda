import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {BsSearch} from 'react-icons/bs'

function Navbarr() {
  return (
    <>
    <Navbar bg="light" expand="lg" style={{    padding: "15px 50px"}}>
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              src= "data:image/png;base64,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"
            //   width="30"
            //   height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            
            <NavDropdown title="Courses" className='ms-5' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Programs" className='ms-5' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            

         
          </Nav>
          <Nav.Link href="#search" className=' ms-5' > <BsSearch/></Nav.Link>
          <Nav.Link href="#login" className='ms-5 me-5'>Login</Nav.Link>
          <Button style={{padding: "10px 42px" , borderRadius: "52px"}} className='join_btn'>JOIN NOW</Button>
          
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}



export default Navbarr;