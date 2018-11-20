import React from 'react';
import CartItemsList from './cart-items/CartItemsList'
import AddItem from './new-items/AddItem'
import Nav from './header-footer/Nav'
import CartFooter from './header-footer/CartFooter'



export default class App extends React.Component {
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

    // make a function onDeleteItem in the app
    onDeleteItem = ({ id }) => {
        // don't mutate the array! make a new array with all the items !== id
        const newItems = this.state.items.filter((item) => item.id !== id)
        // console.log('will delete:', id)
        this.setState({
            //first copy the old state
            ...this.state,
            items: newItems
        })
    }

    addItemOnSubmit = (e) => {
      console.log('hi')

        //set next max id
        // const maxId = this.state.products
        //     .reduce((acc, el) => Math.max(acc, el.id), 0)
        // const nextMaxId = maxId + 1
        // // console.log(item, reason, nextMaxId)
        // // now add the newItem
        // const newItem = { id: nextMaxId, name, priceInCents }
        // //create a copy and then incorporate the new Item
        // const newItems = [...this.state.items, newItem]

        // this.setState({
        //     ...this.state,
        //     items: newItems
        // })
    }

    render() {
      return (
      <div className="container">
        <Nav />
        <CartItemsList items={this.state.cart} onDeleteItem={this.onDeleteItem} />
        <div className="submitForm">
          <AddItem onAddItem={this.addItemOnSubmit} />
        </div>
        <CartFooter />
      </div>
           )
       } 

}