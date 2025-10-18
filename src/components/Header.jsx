import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#ffe600' }}
      className="shadow-sm sticky-top"
    >
      <Container fluid className="px-4">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="../../static/img/logo.png"
            alt="Logo"
            className="d-inline-block align-top me-2"
            style={{ height: '40px' }}
          />
          <div className="d-flex flex-column lh-1">
            <span style={{ color: '#0033a0', fontWeight: '700', fontSize: '1rem', lineHeight: '1' }}>
              después
            </span>
            <span style={{ color: '#00a8e0', fontWeight: '700', fontSize: '1.1rem', lineHeight: '1' }}>
              te pago
            </span>
          </div>
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">

          <Nav className="ms-auto align-items-center text-center">
            <Nav.Link as={Link} to="/" className="text-dark fw-semibold me-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/hotsale" className="text-dark fw-semibold me-2">
              Hot Sale
            </Nav.Link>
            <Nav.Link as={Link} to="/imperdibles" className="text-dark fw-semibold me-3">
              Imperdibles
            </Nav.Link>

            <div className="d-flex align-items-center justify-content-center">
              <Button
                variant="outline-dark"
                as={Link}
                to="/administracion"
                className="fw-semibold me-3"
              >
                Iniciar Sesión
              </Button>
              <Link to="/carrito" className="text-dark position-relative">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
