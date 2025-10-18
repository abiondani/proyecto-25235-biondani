import React from 'react';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div className="container">
            <h3 style={{ marginTop: '20px', marginBottom: '20px'}}>
                Todos nuestros productos
            </h3>
            <ProductList />
        </div>
    );
};

export default Home;