'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
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
                {['red', 'green', 'blue'].map((square) => (
                    <Square key = {square} color = {square} /> //cada key serve para identificar cada elemento
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

