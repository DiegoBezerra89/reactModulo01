'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'


/*
    há algumas mudanças em jsx e html
    class se escreve className
    <label for ... se escreve <label htmlFor
*/

//Modo com classes Es6
class App extends Component {

    constructor() {
        super()
        this.state = {
            color: 'green'
        }
    }

    render () {
        return (
            <div className='container'>
                <Square color={this.state.color} /> {/*Cria um retangulo verde*/}
                {['red', 'green', 'blue'].map((color) => ( //Cria um vetor de botões com os nomes do array
                    <Button key= {color} handleClick={() => this.setState({ color })}>
                        {color} {/*nomeia os botões com os conteudos do array*/}
                    </Button>
                ))}
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


// ############# statefull
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
                text: 'mudou o texto!'
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