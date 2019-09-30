'use strict'

import React, { Component } from 'react'
import Form from './form'




/*
    há algumas mudanças em jsx e html
    class se escreve className
    <label for ... se escreve <label htmlFor
*/

//Modo com classes Es6
class App extends Component {
    constructor() {
        console.log('constructor')
        super()
        this.state = {
            showTimer: true,
            time: 0
        }
    }


    render () {
        return (
            <div className='container'>
                <Form />
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
                <Square color={this.state.color} /> {/*Cria um retangulo verde}
                {['red', 'green', 'blue', 'purple', 'yellow'].map((color) => ( //Cria um vetor de botões com os nomes do array
                    <Button key= {color} handleClick={() => this.setState({ color })}>
                        {color} {/*nomeia os botões com os conteudos do array}
                    </Button>
                ))}
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


//
// ############## LIFECYCLE 
//
/*

Ciclo de vida de um componente

- mounting / unmounting
    métodos: 
        - componentWillMount: o componente será montado, o momento de antes dele montar
        - componentDidMount: quando o componente acabou de ser montado
        - componentWillUnmount: quando o componente será desmontado, ou removido da tela
        - 

- updating
    métodos:
        - componenteWillReceiveProps(nextProps): o momento em que o componente irá receber novas props, pegar por parametro essas novas props
        - shouldComponentUpdate (nextProps, nextState) => bool: componente deve ou não ser atualizado, recebe a proxima prop, e o proximo estado como parametros
        - componentWillUpdate(nextProps, nextState): momento antes da atualização
        - componentDidUpdate(prevProps, prevState): consegue pegar o estado e props anteriores

*/

//##################################

/*

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            time: 0
        }
        this.timer //variavel para receber o setInterval
    }

    componentDidMount() { //aqui eu crio elemento do DOM
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        },1000)
    }

    componentWillUnmount() { //momento em que os eventos manuais são removidos, aqui eu destruo os componentes
        clearInterval(this.timer) //desmontando o componente do timer
    }

    render() {
        return  <div>Timer: {this.state.time}</div>
    }
}

*/
