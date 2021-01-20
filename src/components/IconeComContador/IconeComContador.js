import React from 'react'
import styled from 'styled-components'

const Divisao = styled.div`
    margin-top: 8px;

    height: 90%;

    display: flex;
    align-items: center;

    background-color: #A901DB;
    border-radius: 44px;
`
const Imagem = styled.img`
    height: 50%;
    margin: 0 8px;
`

const Contador = styled.p`
    margin: 0 8px;
    font-weight: bold;
    font-size: 24px;
`

export function IconeComContador(props) {
    return <Divisao onClick={props.onClickIcone}>
        <Imagem alt={'Icone'} src={props.icone} />
        <Contador>{props.valorContador}</Contador>
    </Divisao>
}
