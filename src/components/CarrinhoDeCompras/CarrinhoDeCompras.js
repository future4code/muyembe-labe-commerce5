import React from 'react'
import styled from 'styled-components'
import botaoDeletarProduto from '../../imagens/excluir.png'

const DivisaoCarrinhoCompras = styled.div`
    height: 15vh;
    width: 400px;
    

    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    color: white;

    margin: 0 auto 8px auto;

    border: 1px solid white;
    border-radius: 08px;

    
    
`

const Titulo = styled.h1`
    color: white;
    text-align: center;
`

const DivisaoImagemProduto = styled.div`
    height: 100%;
    margin-left: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
   
`

const ImagemProduto = styled.img`
    height: 100%;
    
`

const DivisaoTituloProduto = styled.div`
    
`
const TituloProduto = styled.h3`

`

const DivisaoPrecoProduto = styled.div`
    
`

const PrecoProduto = styled.h5`

`
const DivisaoCompras = styled.div`
    height:400px;
    overflow:auto; 
`

const DivisaoIconeExcluir = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const BotaoDeletarProduto = styled.img`
    height: 30%;
`
const MensagemListaVazia = styled.p`
    font-weight: bold;
`
const ValorTotal = styled.h6`
    color: white;
    text-align: center;
    font-size: 32px;
`  

class CarrinhoDeCompras extends React.Component {

    
    onClickExcluirProduto = (nomeProduto) => {
        this.props.excluirProduto(nomeProduto)
    }

    

    render() {

        console.log("props do carrinho de compras: ", this.props)

        let componenteCarrinhoDeCompras
        componenteCarrinhoDeCompras = this.props.produtos.map((item) => {
            return (
                <DivisaoCarrinhoCompras key={item.tituloProduto}>
                    <DivisaoImagemProduto>
                        <ImagemProduto src={item.fotoProduto} alt={'Imagem do produto'}/>
                    </DivisaoImagemProduto>
                    <DivisaoTituloProduto>
                        <TituloProduto>{item.tituloProduto} </TituloProduto>
                    </DivisaoTituloProduto>
                    <DivisaoPrecoProduto>
                        <PrecoProduto>R$ {item.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</PrecoProduto>
                    </DivisaoPrecoProduto>
                    <DivisaoIconeExcluir>
                        <BotaoDeletarProduto src={botaoDeletarProduto} alt={'Imagem do icone excluir'} onClick={() => this.onClickExcluirProduto(item.tituloProduto)} />
                    </DivisaoIconeExcluir>
                </DivisaoCarrinhoCompras>

            )
        })
        
        return <DivisaoCompras>
            <Titulo>Carrinho de Compras:</Titulo>
            {componenteCarrinhoDeCompras}
            <ValorTotal>Total: R$ {this.props.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</ValorTotal>
        </DivisaoCompras>
    }
}


export default CarrinhoDeCompras;