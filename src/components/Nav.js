import React from 'react'

export default class Nav extends React.Component {
    render() {
        var navStyle = {
            backgroundColor: '#6ECB83',
            color: 'darkgrey'
        }
        var aStyle = {
            color: 'black'
        }
        return (
         <nav style={navStyle} className = "navbar navbar-dark">
           <a style={aStyle} className= "navbar-brand" href= "/">Shopping Cart</a>   
          </nav> 
        )
    }
}
