import React from 'react';
import ProductList from './ProductList';

const Imperdibles = () => {
    return (
        <div className="container">
            <h3 style={{ marginTop: '20px', marginBottom: '20px'}}>
                Imperdibles
            </h3>
            <ProductList category="electronics"/>
        </div>
  );
};

export default Imperdibles;