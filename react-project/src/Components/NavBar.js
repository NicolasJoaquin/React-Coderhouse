import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#">
                    <Logo />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#" className='active'>Resinas</Nav.Link>
                    <Nav.Link href="#" className='active'>Pigmentos</Nav.Link>
                    <Nav.Link href="#" className='active'>Accesorios</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#" className='active'>
                        <CartWidget />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar