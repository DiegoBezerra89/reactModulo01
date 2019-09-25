'use strict'

import React, { Component } from 'react'


/*
    há algumas mudanças em jsx e html
    class se escreve className
    <label for ... se escreve <label htmlFor
*/

//Modo com classes Es6
class App extends Component {

    
    render () {
        return (
            <div className='container'>
            </div>    
        )
    }
}

//Modo comum ES5
// const App = React.createClass({
//     render: function() {
//         return (
//             <div className='container'>
//                 <Title name='Diego' lastName='Bezerra'/>
//             </div>
//         )
//     }
// })

export default App


//statefull
/*

class App extends Component {
    constructor () {
        super()
        this.state = {
            text: 'clique aqui'
        }
    }
    
    render () {
        return (
            <div className='container' onClick={() => this.setState({
                text: 'seu cu!'
            })}>
                {this.state.text}
            </div>    
        )
    }
}

*/


/*

===== Statefull and Stateless components

## STATEFULL
    - pode manipular estados

## STATELESS
    - não manipulam estados
    - funções pura não manipulam estados
    - não há 'this'

*/