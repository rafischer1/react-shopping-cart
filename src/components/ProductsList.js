import React from 'react';
import Product from './Product'

const ProductsList = ({ items }) => (
    <select id="product">
        {items.map((x, y) => <Product id={y} key={y} item={x} />)}
    </select>
)

export default ProductsList;