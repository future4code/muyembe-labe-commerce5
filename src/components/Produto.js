import React from 'react'
import styled from 'styled-components'


const Produtos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

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
    text-align: center;
    color:white;
    padding-left:25px;
`

class Produto extends React.Component { 
    state = {
        
    }
    
    
    render() {
        return(
            <Produtos>
                <div>
                    <Imgproduto src={this.props.fotoProduto} alt="imagem do produto"/>
                    <NomeProduto>{this.props.tituloProduto}</NomeProduto>
                    <Preco>R$ {this.props.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Preco>
                    <Add onClick={this.props.colocaNoCarrinho}>+</Add>
                </div>
            </Produtos>
        )
 
        

    }
        

}

export default Produto;