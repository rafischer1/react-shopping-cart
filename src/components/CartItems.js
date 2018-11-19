import React from 'react';

const CartItems = ({item}) => (
    <div className="collection-item">
        <div className="row">
          <div className="col-md-8">{item.product.name}</div>
          <div className="col-md-2">{item.product.priceInCents}</div>
          <div className="col-md-2">{item.quantity}</div>
        </div>
    </div>
)

export default CartItems;