import React from 'react';
import ProductList from './ProductList';

const HotSale = () => {
    return (
        <div className="container">
            <h3 style={{ marginTop: '20px', marginBottom: '20px'}}>
                Hot Sale
            </h3>
            <ProductList category="women's clothing"/>
        </div>
  );
};

export default HotSale;