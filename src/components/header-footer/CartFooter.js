import React from 'react'

export default class CartFooter extends React.Component {
    render() {
        var footerStyle = {
            marginTop: "5%",
            backgroundColor: '#6ECB83',
            width: '100%'
        }

        var aStyle = {
            color: 'black'
        }
        return (
        <nav style={footerStyle} className = "navbar navbar-dark">
            <a style={aStyle} className = "navbar-brand"
            href = "/" >{this.props.copy}{this.props.year}</a> 
             </nav>
        )
    }
}

CartFooter.defaultProps = {
    copy: '©',
    year: 2018
}
