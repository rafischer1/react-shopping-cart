import React from 'react';
import CartItemsList from './cart-items/CartItemsList'
import AddItem from './new-items/AddItem'
import Nav from './header-footer/Nav'
import CartFooter from './header-footer/CartFooter'
import Total from './total/Total'

export default class App extends React.Component {
    constructor(props) {
        super(props)

    this.state = { 
        item: 'Mediocre Iron Watch',
        cart: [
            { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
            { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
            { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
        ]
    }  
}

    addItem = ( {myEl, quantity} ) => {
        let cartCopy = [...this.state.cart]
        // set next max id
        const maxId = this.state.cart
            .reduce((acc, el) => Math.max(acc, el.id), 0)
        const nextMaxId = maxId + 1
        // now add the newItem
        for (let i=0; i < this.state.cart.length; i++) {
            if (this.state.cart[i].product.id === myEl.id) {
                let itemClone = {...this.state.cart[i]}
                itemClone.quantity = itemClone.quantity + parseInt(quantity)
                cartCopy[i] = itemClone 
                this.setState({
                    ...this.state,
                    cart: cartCopy
                })
                return true
            } 
        }
        const newItem = { id: nextMaxId, product: {name: myEl.name, priceInCents: myEl.priceInCents}, quantity: quantity}
        //create a copy and then incorporate the new Item
        const newItems = [...this.state.cart, newItem]

        this.setState({
            ...this.state,
            cart: newItems
        })
    }

    render() {

      const cStyle = {
        border: '2px solid black',
        fontSize: "20px",
        marginLeft: '4%',
        marginTop: "2%"
      }

      return (
        <div className="container">
          <Nav />
            <div className="collection-item" style={cStyle}>
              <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">$</div>
              <div className="col-md-2">#</div>
            </div>
          </div>
          <CartItemsList items={this.state.cart} />
          <Total items={this.state.cart}/>
          <div className="submitForm">
          <AddItem addItem={this.addItem} />
          </div>
          <CartFooter />
        </div>
           )
       } 

}