import React from 'react'
import Item from '../cart-item/CartItem'

const ItemList = ({ items, onDeleteItem }) => {
    return (
      <ul>
        {items.map((item, idx) => <Item key={idx} id={item.id} item={item} onDeleteItem={onDeleteItem} />)}
      </ul>
    )
}

export default ItemList