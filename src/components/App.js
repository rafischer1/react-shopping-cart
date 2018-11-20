import React from 'react';
import CartItemsList from './CartItemsList'
import ProductsList from './ProductsList'
import Nav from './Nav'
import CartFooter from './CartFooter'


class App extends React.Component {
    constructor(props) {
        super(props)
    
    this.state = { 
        products: [
            { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
            { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
            { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
            { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
            { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
            { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
            { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
            { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
            { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
        ], 
        cart: [
            { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
            { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
            { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
        ]
    }  
}
    render() {
      return (
      <div className="container">
        <Nav />
        <h1>Cart Items</h1>
          <div className="list-group">
            <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
            <CartItemsList items={this.state.cart} />
            </div>
          </div>
          <br />
        <form onSubmit={AddItem}>
          <label for="quantity">Quantity</label>
          <input id="quantity" type="number"></input>
          <br />
          <label for="products">Products</label>        
          <ProductsList items={this.state.products} />
          <br />
          <input className="button" type="submit" value="Submit" />         
        </form>
        <CartFooter />
      </div>
           )
       } 

}

function AddItem(ev) {
    ev.preventDefault()
    alert(this.cart)

    // let itemName = ev.target[1].value
    // //loop through cart and match name if !match add it
    // this.state.cart.forEach((el) => {
    //     if (el.product.name === itemName) {
    //         el.quantity += ev.target[0].value
    //     } else {
    //         alert('hi')
    //add new object
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

export default App;