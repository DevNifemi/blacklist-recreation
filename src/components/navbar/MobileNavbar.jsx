import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const MobileNavbar = () => {
  return (
    <div className='mobile-nav'>
      <Navbar fixed="top" className='pt-2' bg="light" expand="lg">
        <Navbar.Brand href="#">
            <img src='https://blacklistng.com/img/logo.png' alt="app logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '140px' }}
            navbarScroll >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#contact-us">Support</Nav.Link>
            <Nav.Link href="https://blacklistng.com/docs/#introduction">
              Developers
            </Nav.Link>
            <Nav.Link href="#">
              Pricing
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    </div>
  )
}

export default MobileNavbar
