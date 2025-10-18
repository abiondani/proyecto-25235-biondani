import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = 'https://dummyjson.com/products?limit=20';
        if (category) {
            url = `https://dummyjson.com/products/category/${category}?limit=20`;
            console.log(url)
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, [category]);

    const handleAgregarAlCarrito = (product) => {
        alert(`Producto ${product.title} agregado al carrito`);
    };

    if (loading) {
        return <div>Cargando productos...</div>;
    }
  
    return (
        <Row>
            {products.products.map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                    <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
                </Col>
        ))}
        </Row>
    );
};

export default ProductList;
