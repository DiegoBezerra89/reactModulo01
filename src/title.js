'use strict'

import React from 'react'

//utilizando funções puras
const Title = (props) => ( //há de se passar as props como parametro
    <h1>Olá {`${props.name} ${props.lastName} testando`}</h1>
)

Title.defaultProps = {
    name: 'Desconhecido',
    lastName: 'Sem sobrenome'
}

//Modelo Antigo
// const Title = React.createClass({
//     //estas propriedades serão padrão caso as props não sejam passadas
//     getDefaultProps: function() {
//         return {
//             name: 'Desconhecido'
//         }
//     },

//     render: function () {
//         return (
//             <h1>Olá {this.props.name}</h1>
//         )
//     }
// })

export default Title



// ================ ANOTAÇÕES ===================


/*
    //estas propriedades serão padrão caso as props não sejam passadas
    getDefaultProps: function() {
        return {
            name: 'Desconhecido'
        }
    }

    /PASSANDO VIA PROPS OUTROS TIPOS DE DADOS
    <Title name='Diego Bezerra' age='0'(ou via string) ou age={0} entre chaves {}, qualquer elemento js entre chaves é aceito
    arrays são convertidos como string [1,2,3] = 1,2,3
    objetos = {{ name: first: 'Diego', lastName: 'bezerra'}}


    // ###FUNÇÕES PURAS
    function pure(a,b) {
        return a + b
    }
    esse tipo de função não altera o resultado de nada externo a ela, e se ela for chamada varias vezes o resultados é o mesmo

    // ###FUNÇÕES IMPURAS
    obj {
        a: 1, 
        b: 2
    }
    function impureFunction(a,b) {
        obj.a = a + b
        return a + b
    }
    esse tipo de função altera o valor de algo externo a ela mesma

    // ###FUNÇÕES IMPURAS
    function impureFunction2 ( a, b ) {
        return Math.random( a + b )
    }
    retornará sempre um valor diferente a cada chamada

    >>>>>>>>>> no react o método Render, deve ser puro, ele não deve modificar o componente


*/




