import React from 'react'
import ProductsList from '../product-list/ProductsList'

export default class AddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            quantity: 0,
            product: [
                { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
            ] 
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { name, quantity } = this.state
        const { onAddItem } = this.props
        onAddItem({ name, quantity })

        //reset the form to empty
        this.setState({
            name: '',
            quantity: ''
        })
    }

    onQuantChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            quantity: e.target.value
        })
    }

    onNameChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label> Name: </label>
                {/* <input type="text" value={this.state.name} onChange={this.onNameChange} />
                 */}
                 <ProductsList items={this.state.product} />
                <br />
                <label> Quantity: </label>
                <input type="number" value={this.state.quantity} onChange={this.onQuantChange} />
                <br />
                <input type="submit" />
            </form>
        )
    }
}