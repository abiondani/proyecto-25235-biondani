import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../static/css/ProductCard.css';

const ProductCard = ({ product, agregarAlCarrito }) => {
    return (
        <Card
            className="h-100 d-flex flex-column border-0 shadow-sm product-card"
            style={{
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}>

            <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="card-img-top img-fluid"
                style={{
                height: '200px',
                objectFit: 'contain',
                borderTopLeftRadius: '0.5rem',
                borderTopRightRadius: '0.5rem',
                }}/>

            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title
                        className="fw-bold text-dark mb-2"
                        style={{ fontSize: '1.1rem', minHeight: '48px' }}>
                        {product.title}
                    </Card.Title>
                    <Card.Text
                        className="text-secondary mb-3"
                        style={{ fontSize: '0.9rem', minHeight: '60px' }}>
                        {product.description.slice(0, 100)}...
                    </Card.Text>
                  </div>
                  <div>
                      <Card.Text className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>
                          ${product.price}
                      </Card.Text>
                      <Button
                          variant="dark"
                          className="w-100 fw-semibold d-flex align-items-center justify-content-center add-to-cart-btn"
                          onClick={() => agregarAlCarrito(product)}>
                          <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                              Agregar al carrito
                        </Button>
                    </div>
              </Card.Body>
        </Card>
    );
};

export default ProductCard;

