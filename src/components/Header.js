import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'




import { FaStudiovinari} from "react-icons/fa"
import{AiFillPhone} from 'react-icons/ai'

const Header = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand > <Nav.Link href="/"> <FaStudiovinari size={40}/><span className='red'>CINE</span><span className='blue'>MAX</span>  </Nav.Link>   </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 mx-auto"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          
          
          
        </Nav>
        <Nav>
        <Nav.Link href="/contact"><AiFillPhone /> (03) 1234 5678</Nav.Link>
        
      </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header