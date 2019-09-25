'use strict'

import React from 'react'


//todos os botões que forem compostos com este botão "pai", herdarão sua classe e propriedades
const Button = ({ children, handleClick }) => (
    <button className='main-button' onClick={handleClick}>
        {children}
    </button> //children é utilizado para fazer referências ao texto inserido dentro das tags do componente
)

export default Button