import React from 'react'

const AddItem = (ev) => {
    ev.preventDefault()
    alert('hi', ev.target[1].value)

    // let itemName = ev.target[1].value
    // //loop through cart and match name if !match add it
    // this.state.cart.forEach((el) => {
    //     if (el.product.name === itemName) {
    //         el.quantity += ev.target[0].value
    //     } else {
    //         alert('hi')
    //add new object`
    //using event.target[1].value get the values from products
    // newProduct = {
    //     product: {
    //         id: ,
    //         name: event.target[1].value,
    //         priceInCents: ,
    //     },
    //     quantity: event.target[0].value
    // }
    // }
    // })
}

AddItem.defaultProps = {
    name: 'hi',
    quantity: 2 
}

export default AddItem