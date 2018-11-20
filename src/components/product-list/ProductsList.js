import React from 'react'
import Product from './Product'
import AddItem from '../new-items/AddItem'

const ProductsList = ({ items }) => (
    <select id="product" onChange={AddItem.onSubmit}>
        {items.map((x, y) => <Product id={y} key={y} item={x} />)}
    </select>
)
export default ProductsList