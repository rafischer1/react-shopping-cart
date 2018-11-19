import React from 'react'
import CartItems from './CartItems'

const CartItemsList = ({items}) => (
    cart(items)
)

export default CartItemsList;

function cart(items) {
    return <ul>
        {items.map((x, y) => <CartItems id={y} item={x} />)}
    </ul>;
}
