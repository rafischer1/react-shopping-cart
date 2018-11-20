import React from 'react'

const CartItem = ({item}) => {
    let itemPrice = item.product.priceInCents + ''
    let price = `$ ${itemPrice.substring(0, itemPrice.length - 2)}.${itemPrice.substring(itemPrice.length - 2)}`
    return(
        <div className="collection-item">
            <div className="row">
                <div className="col-md-8">{item.product.name}</div>
                <div className="col-md-2">{price}</div>
                <div className="col-md-2">{item.quantity}</div>
            </div>
        </div>
    )
}

export default CartItem