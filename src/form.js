'use strict'

import React, { Component } from 'react'

class Form extends Component {
    constructor () {
        super()
        this.state = {
            value: 'Valor inicial',
            checked: false,
            valueOption: '2'
        }
    }
    
    render() {
        return (    
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    console.log('event', e)
                }}
                onChange={(e) => {
                    console.log('name', e.target.name)
                    console.log('value', e.target.value)
                }}
                >
                    
                <input type='name' name='name' />
                <input type='email' name='email' />

                
                </form>
            </div>
        )
    }
}

export default Form


/*

<form>
    <input type='text' value={this.state.value} onChange={(e) => { //CONTROLLED COMPONENTS
        console.log(e)
        this.setState({
            value: e.target.value
        })
    }}/>{/*esse input é um componente react, logo suas propriedades são não editáveis diretamente}
    <label>
        <input type='checkbox' value='my-checkbox' checked={this.state.checked} onChange={(e) => this.setState({ 
            checked: !this.state.checked })} /> {/*checked controla o checkbox}
        Checkbox
    </label>
    <input type='radio' name='rd' value='1' defaultChecked />Radio 1
    <input type='radio' name='rd' value='2' />Radio 2
    <select value={this.state.valueOption} onChange={(e) => {
        this.setState({
            valueOption: e.target.valueOption //se torna um componente controlável, pois sabe-se o valor que está nele em toda seleção
        })
    }}>
        <option value='1'>Opção 1</option>
        <option value='2'>Opção 2</option>
        <option value='3'>Opção 3</option>
    </select>
    <textarea defaultValue='Texto default'/>
*/