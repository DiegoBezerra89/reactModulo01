'use strict'

//Composição de componentes
//é possível compor um componente utilizando outros componentes

import React from 'react'
import Button from './button' //importando outro componente

const LikeButton = () => (
    <Button handleClick={() => alert('Curtiu')}>Curtir</Button>//utilizando o outro componente
)

export default LikeButton