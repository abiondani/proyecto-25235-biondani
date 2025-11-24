import React, { useEffect, useState, useContext } from 'react';
import { Row, Col ,Form} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';

const ProductList = ({ category = null }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {agregarAlCarrito} = useContext(CartContext);
    const [barraDeBusqueda, setBarraDeBusqueda] = useState("");    

    useEffect(() => {
        let url = 'https://692061a331e684d7bfccce13.mockapi.io/productos';
        if (category) {
            url = `https://fakestoreapi.com/products/category/${category}`;
            
        }
        console.log(url)

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

    if (loading) {
        return <div>Cargando productos...</div>;
    }
  
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(barraDeBusqueda.toLowerCase()) ||
        product.description.toLowerCase().includes(barraDeBusqueda.toLowerCase())
    );

    return (
        <>
            <Form.Control
                type="text"
                placeholder="Buscar productos"
                className="mb-4"
                value={barraDeBusqueda}
                onChange={(e) =>setBarraDeBusqueda(e.target.value)}>
            </Form.Control>
  
            <Row>
                {filteredProducts.map((product) => (
                    <Col md={4} key={product.id} className="mb-4">
                        <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
                        {/* <ProductCard product={product} agregarAlCarrito={null} /> */}
                    </Col>
                ))}
            </Row>
          </>
    );
};

export default ProductList;
