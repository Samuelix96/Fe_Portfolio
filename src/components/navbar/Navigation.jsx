/** @format */

import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image1 from '../../images/P_20220723_183657.jpeg';

const Navigation = () => {
  return (
    <Navbar
      expand='lg'
      data-bs-theme='dark'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            crossOrigin=''
            src={image1}
            width='50'
            height='50'
            className='d-inline-block mx-4 align-top rounded-circle object-fit-cover'
            alt='imagine logo'
          />
        </Navbar.Brand>
        <Navbar.Brand
          className='fs-1 mx-3'
          href='/'>
          Samuele Bagorha
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto '>
            <Nav.Link
              className=' text-light fs-1'
              href='/'>
              Junior Web Developer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto gap-2'>
            <Nav.Link
              className='  fs-1 fw-bold '
              href={`/skills`}>
              Skills
            </Nav.Link>
            <Nav.Link
              className='  fs-1 fw-bold '
              href={`/myworks`}>
              My Works
            </Nav.Link>
            {/* <Nav.Link
              className='  fs-2'
              href={`/contactme`}>
              Contact Me
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
