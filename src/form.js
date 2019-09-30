'use strict'

import React, { Component } from 'react'

class Form extends Component {
    constructor () {
        super()
        this.state = {
            value: 'Valor inicial',
            checked: false
        }
    }
    
    render() {
        return (    
            <div>
                <form>
                    <input type='text' value={this.state.value} onChange={(e) => { //CONTROLLED COMPONENTS
                        console.log(e)
                        this.setState({
                            value: e.target.value
                        })
                    }}/>{/*esse input é um componente react, logo suas propriedades são não editáveis diretamente*/}
                    
                    <input type='checkbox' value='my-checkbox' checked={this.state.checked} />
                </form>
            </div>
        )
    }
}

export default Form
