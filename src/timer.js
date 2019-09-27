'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            time: 0
        }
        this.timer //variavel para receber o setInterval
    }

    componentDidMount() { //aqui eu crio elemento do DOM
        console.log('componentDidMount')
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        },1000)
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', this.props, nextProps)

    }

    componentWillUnmount() { //momento em que os eventos manuais são removidos, aqui eu destruo os componentes
        console.log('componentWillUnmount')
        clearInterval(this.timer) //desmontando o componente do timer
    }

    render() {
        return  <div>Timer: {this.state.time}</div>
    }
}

export default Timer