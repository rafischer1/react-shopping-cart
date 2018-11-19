import React from 'react'
import CartItems from './CartItems'

const CartItemsList = ({items}) => (
    <ul>{items.map((x, y) => <CartItems id={y} item={x} />)}</ul>
)

export default CartItemsList;

