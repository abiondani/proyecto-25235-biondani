import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../../static/css/Footer.css';

const Footer = () => {
  return (
    <footer
      className="mt-auto py-3 shadow-sm"
      style={{
        backgroundColor: '#ffe600',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Texto del logo y autor */}
          <Col
            md={6}
            className="mb-2 mb-md-0 d-flex flex-column justify-content-center justify-content-md-start align-items-center align-items-md-start"
          >
            <div className="d-flex align-items-center mb-1">
              <span
                style={{
                  color: '#0033a0',
                  fontWeight: '700',
                  fontSize: '1rem',
                }}
              >
                después
              </span>
              <span
                style={{
                  color: '#00a8e0',
                  fontWeight: '700',
                  fontSize: '1rem',
                  marginLeft: '5px',
                }}
              >
                te pago
              </span>
            </div>

            <small className="text-dark fw-semibold">
              ©{' '}
              <a
                href="mailto:abiondani@gmail.com"
                className="text-dark text-decoration-none fw-semibold"
              >
                Alejandro Biondani
              </a>
              , comisión 25235
            </small>
          </Col>

          {/* Redes sociales */}
          <Col
            md={6}
            className="d-flex justify-content-center justify-content-md-end align-items-center"
          >
            <a
              href="https://www.facebook.com/ale3daniel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-4"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/abiondani80/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-4"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-biondani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
