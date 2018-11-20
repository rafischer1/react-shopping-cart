import React from 'react'
import CartItem from './CartItem'
const CartItemsList = ({ items }) => <ul>{items.map((x, y) => <CartItem id={y} key={y} item={x} />)}</ul>
export default CartItemsList
