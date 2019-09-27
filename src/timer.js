'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            time: 0
        }
    }

    render() {
        <div>Timer: {this.state.time}</div>
    }
}