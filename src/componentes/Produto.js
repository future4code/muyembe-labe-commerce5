import React from 'react'
import styled from 'styled-components'
import camisa1 from '../img/camisa1.png'
import camisa2 from '../img/camisa2.png'
import camisa3 from '../img/camisa3.png'
import camisa4 from '../img/camisa4.png'
import camisa5 from '../img/camisa5.png'
import camisa6 from '../img/camisa6.png'
import camisa7 from '../img/camisa7.png'
import camisa8 from '../img/camisa8.png'
import camisa9 from '../img/camisa9.png'
import camisaF1 from '../img/camisaF1.png'
import camisaF2 from '../img/camisaF2.png'
import camisaF3 from '../img/camisaF3.png'
import camisaF4 from '../img/camisaF4.png'
import camisaF5 from '../img/camisaF5.png'
import camisaF6 from '../img/camisaF6.png'

const Produtos = styled.div`
  margin: 10px 5px 10px 15px;
  width:400px;
  background-color: #191512;
`
const Imgproduto = styled.img`
  width:300px;
`
const Preco = styled.p`
  display:inline;
  color: white;
  font-size:40px;
  padding:30px;
  margin-left:38px;
`
const Add = styled.button`
  display: inline;
  font-size:20px;
  background-color: transparent;
  color:green;
  border-style: none;
  border: solid green 1px;
  &:hover{
    background-color:#81F7BE;
  }
`
const NomeProduto = styled.h3`
    color:white;
    padding-left:25px;
`

class Produto extends React.Component { 
    state = {
        listaProdutos: [
            {
                fotoProduto:camisa1,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisa2,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisa3,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisa4,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisa5,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisa6,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisa7,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisa8,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisa9,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisaF1,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisaF2,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisaF3,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisaF4,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisaF5,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
            {
                fotoProduto:camisaF6,
                tituloProduto:"Astronauta",
                precoProduto:"R$ 59,90"
            },
        ]
    }
    
    addCarrinho = () => {
        alert("funciona!")
    }
    
    render() {
        const listaDeProdutos = this.state.listaProdutos.map((produto) => {
            return(
                <Produtos>
                    <div>
                    <Imgproduto src={produto.fotoProduto} alt="imagem do produto"/>
                    <NomeProduto>{produto.tituloProduto}</NomeProduto>
                    <Preco>{produto.precoProduto}</Preco>
                    <Add onClick={this.addCarrinho}>+</Add>
                    </div>
                </Produtos>
                )
        })
        return listaDeProdutos
    }
}

export default Produto;