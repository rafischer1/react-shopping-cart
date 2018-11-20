import React from 'react';

class CartFooter extends React.Component {
    render() {
        return (
        <nav className = "navbar navbar-dark bg-dark">
            <a className = "navbar-brand"
            href = "/" >{this.props.copy}{this.props.year}</a> 
             </nav>
        )
    }
}

CartFooter.defaultProps = {
    copy: '©',
    year: 2018
}

export default CartFooter;