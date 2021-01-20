import React from 'react'
import styled from 'styled-components'

import astronauta from './imagens/astronauta.png'
// import lupa from './imagens/lupa.png'
import astrodev from "./imagens/astrodev.png"
import triangulo from './imagens/triangulo.png'
import subir from './imagens/subir.png'
import camisa1 from './imagens/camisa1.png'
import camisa2 from './imagens/camisa2.png'
import camisa3 from './imagens/camisa3.png'
import camisa4 from './imagens/camisa4.png'
import camisa5 from './imagens/camisa5.png'
import camisa6 from './imagens/camisa6.png'
import camisa7 from './imagens/camisa7.png'
import camisa8 from './imagens/camisa8.png'
import camisa9 from './imagens/camisa9.png'
import camisaF1 from './imagens/camisaF1.png'
import camisaF2 from './imagens/camisaF2.png'
import camisaF3 from './imagens/camisaF3.png'
import camisaF4 from './imagens/camisaF4.png'
import camisaF5 from './imagens/camisaF5.png'
import camisaF6 from './imagens/camisaF6.png'
import Produto from './components/Produto'
import { IconeComContador } from './components/IconeComContador/IconeComContador'
import iconeCarrinhoCompras from './imagens/shopping-cart.png'
import CarrinhoDeCompras from './components/CarrinhoDeCompras/CarrinhoDeCompras'

const Principal = styled.div`
  margin: 0;
  padding: 0;
  background-color: #0e0d09;
  position:relative;

  display: flex;
  
  
`
const DivisaoPaginaPrincipal = styled.div`
  
`
const Cabecalho = styled.div`
  height: 08vh;
  

  display: flex;
  justify-content: space-around;
  align-items: center;
`
const DivisaoCarrinhoDeCompras = styled.div`
  height: 100%;
`
const Titulo = styled.header`
  color: #A901DB;
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
`
const Banner = styled.div`
  display: flex;
`
const Menu = styled.main`
  margin-top:300px;
  margin-left:200px;
  z-index:1;
`

const Blocopesquisa = styled.form`
   display: flex;
   justify-content: space-around;
`
const DivPesquisa = styled.div`
  border: 1px solid white;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
 
`
const DivisaoCategoria = styled.div`
  border: 1px solid white;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
`
const BotaoCategoria = styled.button`
  background-color: #16A182;
  color:white;
  border-style: none;
  border: solid green 1px;
  border-radius:5px;
  &:hover{
    font-weight: bold;
  }
  padding: 8px;

  margin: 0 16px;
`
const LabelPesquisa = styled.label`
  margin-right: 16px;
`
const Inputpesquisa = styled.input`
  border:solid 1px #0080FF;
  border-radius:5px;
  box-shadow: 0px 5px 10px #819FF7;
  color:green; 

  height: 24px;
`

const BotaoPesquisar = styled.input`
  background-color: #16A182;
  color:white;
  border-style: none;
  border: solid green 1px;
  border-radius:5px;
  &:hover{
    box-shadow: 0px 5px 10px #81F7D8;
  }
  width: 64px;
  padding: 8px;
`
const DivFiltro = styled.div`
  border: 1px solid white;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
`

const SelectFiltro = styled.select`
  height: 24px;
`

const OptionFiltro = styled.option`
  
`

const Lista = styled.li`
  list-style: none;
  color: white;
  background-color: #A901DB;
  margin-bottom: 10px;
  text-align: center;
  padding: 5px;
  &:hover{
    box-shadow: 2px 5px 10px #D0A9F5;
  }
`

const Imghome = styled.img`
  margin-left: 20%;
`

const Subir = styled.img`
  bottom:0px;
  right:3px;
  width:100px;
  position:absolute;
`

const Referencia = styled.a`
  text-decoration:none; 
  color: inherit; 
`
const ListaDeProdutos = styled.div`
  margin-top: 25px;
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content: center;
`
const MensagemNaoEncontrado = styled.p`
  color: white;
  font-size: 32px;
`

const Tituloprodutos = styled.h1`
  color: #A901DB;
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
  margin-top:20px;
`
const Triangulo = styled.img`
  position: absolute;
  width:300px;
  z-index:0;
  top:300px;
  left:150px;
`

const Rodape = styled.footer`
  bottom:0px;
  color: white;
  text-align: center;
  margin: 100px 10px 5px 0px;
  padding-bottom:50px;
`
const Direciona = styled.button`
  border:none;
  background-color: #A901DB;
  color:white;
`
const Astrodev = styled.img`
  width:50px;
`
const DiviCarrinhoDeCompras = styled.div`
  margin-right: 16px;
`



class App extends React.Component {
  state = {
    produtos:[
        {
            fotoProduto:camisa1,
            tituloProduto:"Hexagono Laranja",
            precoProduto: 35.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisa2,
            tituloProduto:"Foguete",
            precoProduto: 40.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisa3,
            tituloProduto:"Dominador",
            precoProduto: 37.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisa4,
            tituloProduto:"Wakanda",
            precoProduto: 32.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisa5,
            tituloProduto:"Astro Music",
            precoProduto: 38.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisa6,
            tituloProduto:"Descansando",
            precoProduto: 37.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisa7,
            tituloProduto:"Bolhas",
            precoProduto: 39.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisa8,
            tituloProduto:"Astrodev",
            precoProduto: 41.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisa9,
            tituloProduto:"Buraco Negro",
            precoProduto: 39.00,
            tipo:"masculino"
        },
        {
            fotoProduto:camisaF1,
            tituloProduto:"Foguete Feminina",
            precoProduto: 31.00,
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF2,
            tituloProduto:"Dominadora",
            precoProduto: 30.00,
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF3,
            tituloProduto:"Wakanda Feminina",
            precoProduto: 32.00,
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF4,
            tituloProduto:"Music",
            precoProduto: 37.00,
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF5,
            tituloProduto:"Descansando Feminina",
            precoProduto: 31.00,
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF6,
            tituloProduto:"Bolhas Feminina",
            precoProduto: 33.00,
            tipo:"feminino"
        }
    ],

    carrinhoCompras: [],
    compra: false,
    valorTotalCarrinhoCompras: 0,

    categoriaAtual: "todos",
    listaCategoriaMasculino: [],
    listaCategoriaFeminino: [],

    inputPesquisa: "",

    listaPesquisa: [], 
    pesquisa: false,

    selectFiltro: "selecione",
    filtro: false
    
  }

  onClickTodos = () => {
    this.setState({categoriaAtual: "todos", pesquisa: false, filtro: false, selectFiltro: "selecione" })
  }
  
  onClickFeminino = () => {
    this.setState({categoriaAtual: "feminino", pesquisa: false, filtro: false, selectFiltro: "selecione"})
  }
  
  onClickMasculino = () => {
    this.setState({categoriaAtual: "masculino", pesquisa: false, filtro: false, selectFiltro: "selecione"})
  }

  onChangePesq = (event) => {
    this.setState({ inputPesquisa: event.target.value })
  }

  pesquisa = (valorInputPesquisa) => {
    this.setState({ pesquisa: true })

    const valorInputPesquisaMinusculo = valorInputPesquisa.toLowerCase()
    
    const retornoPesquisa = this.state.produtos.filter((produto) => {
      let tituloProdutoMinusculo = produto.tituloProduto.toLowerCase()
      
      if(tituloProdutoMinusculo === valorInputPesquisaMinusculo) {
        return true
      } 
      
    })

    
    this.setState({ listaPesquisa: retornoPesquisa })
  }

  onClickCarrinhoDeCompras = () => {
    this.setState({ compra: !this.state.compra})
   
  }
  
  noCarrinho = (nomeProduto) => {
    
    const novaCompra = this.state.produtos.filter((produto) => {
      if(produto.tituloProduto === nomeProduto) {
        return true
      }
    })
    
    const compra = {
      fotoProduto: novaCompra[0].fotoProduto,
      tituloProduto: novaCompra[0].tituloProduto,
      precoProduto: novaCompra[0].precoProduto,
      tipo: novaCompra[0].tipo
    }

    

    const novasCompras = [compra, ...this.state.carrinhoCompras]
    this.setState({ carrinhoCompras:  novasCompras})

  }
  
  onClickExcluirProduto = (nome) => {
    const novaListaCarrinhoDeCompras = this.state.carrinhoCompras.filter((item) => {
      return item.tituloProduto !== nome
    })

    this.setState({ carrinhoCompras: novaListaCarrinhoDeCompras })
  }

  calculaValorTotal = () => {
    let valor = 0
    this.state.carrinhoCompras.forEach((item) => {
      valor = valor + item.precoProduto
    })
    return valor
  }

  onChangeSelectFiltro = (event) => {
    this.setState({ selectFiltro: event.target.value, filtro: true})
  }

  // onClickFiltrar = () => {
  //   this.setState({filtro: true})
  // }

  
  // noCarrinho = (addCar) => {
  //   const adicinando = this.state.todosOsProdutos.map((produto) => {
  //     if (produto.tituloProduto === addCar){
  //       const addCarrinho = {
  //         fotoProduto: produto.fotoProduto,
  //         tituloProduto: produto.tituloProduto,
  //         precoProduto: produto.precoProduto
  //       }

  //       const adicionandoProdutos = [addCarrinho, ...this.state.adicionadoAoCarrinho]
  //       this.setState({adicionadoAoCarrinho:adicionandoProdutos})
  //     }
  //   })  
      
  //   console.log(this.state.adicionadoAoCarrinho)
  //   alert("Adicionado, verifique no console.log")
  // }


  render(){

    document.title = "Labecommerce"


    /* ====== EXIBIR TODOS OS PRODUTOS OU MASCULINO OU FEMININO: ====== */
    let relacaoProdutos

    // todos os produtos: 
    if(this.state.categoriaAtual === "todos") {
      relacaoProdutos = this.state.produtos.map((produto) => {
        return (
          <Produto
            key={produto.tituloProduto}
            fotoProduto = {produto.fotoProduto}
            tituloProduto = {produto.tituloProduto}
            precoProduto = {produto.precoProduto}
            colocaNoCarrinho ={() => this.noCarrinho(produto.tituloProduto)}
          />
        )
      })
    }
    // masculinos: 
    if(this.state.categoriaAtual === "masculino") {
      relacaoProdutos = this.state.produtos.map((produto) => {
        if(produto.tipo === "masculino") {
          return (
            <Produto
              key={produto.tituloProduto}
              fotoProduto = {produto.fotoProduto}
              tituloProduto = {produto.tituloProduto}
              precoProduto = {produto.precoProduto}
              colocaNoCarrinho ={() => this.noCarrinho(produto.tituloProduto)}
            />
          )
        }
      })
      
      

    }
    // femininos:
    if(this.state.categoriaAtual === "feminino") {
      relacaoProdutos = this.state.produtos.map((produto) => {
        if(produto.tipo === "feminino") {
          return (
            <Produto
              key={produto.tituloProduto}
              fotoProduto = {produto.fotoProduto}
              tituloProduto = {produto.tituloProduto}
              precoProduto = {produto.precoProduto}
              colocaNoCarrinho ={() => this.noCarrinho(produto.tituloProduto)}
            />
          )
        }
      })

    }

    /* ====== EXIBIR PESQUISA PELO NOME DO DO PRODUTO: ====== */
    if(this.state.pesquisa) {
    
      if(this.state.listaPesquisa !== []) {
        relacaoProdutos = this.state.listaPesquisa.map((produto) => {
          return (
            <Produto
                key={produto.tituloProduto}
                fotoProduto = {produto.fotoProduto}
                tituloProduto = {produto.tituloProduto}
                precoProduto = {produto.precoProduto}
                colocaNoCarrinho ={() => this.noCarrinho(produto.tituloProduto)}
              />
          )
        })
      }

      // Caso pesquisa não retorne nenhum resultado:
      if(this.state.listaPesquisa.length === 0) {
        relacaoProdutos = <MensagemNaoEncontrado>Infelizmente, produto {this.state.inputPesquisa} não foi encontrado.</MensagemNaoEncontrado>
      }
      
    }
    
    /* ====== CARRINHO DE COMPRAS: ====== */
    let componenteCarrinhoDeCompras
    if(this.state.compra) {  
      componenteCarrinhoDeCompras = <CarrinhoDeCompras 
        produtos = {this.state.carrinhoCompras}
        excluirProduto = {this.onClickExcluirProduto}
        valorTotal = {this.calculaValorTotal()}
      />
      
    }


    /* ====== FILTRO MAIOR E MENOR VALOR: ====== */
    
    let listaAtualParaComparacao
    if(this.state.filtro) {
      
      switch (this.state.categoriaAtual) {
        case "todos" :
          listaAtualParaComparacao = this.state.produtos
          break
        case "masculino" :
          listaAtualParaComparacao = this.state.produtos.filter((produto) => {
            if(produto.tipo === "masculino") {
              return true
            }
          })
          break
        case "feminino" :
          listaAtualParaComparacao = this.state.produtos.filter((produto) => {
            if(produto.tipo === "feminino") {
              return true
            }
          })
          break
      }
      // if(this.state.categoriaAtual === "todos") {
      //   listaAtualParaComparacao = this.state.produtos
      // }
      if(this.state.selectFiltro === "menor") {
        // listaMenorParaMaior = this.state.produtos
        listaAtualParaComparacao.sort(function(a,b) {
          return a.precoProduto - b.precoProduto
        })
        relacaoProdutos = listaAtualParaComparacao.map((produto) => {
          return (
            <Produto
                key={produto.tituloProduto}
                fotoProduto = {produto.fotoProduto}
                tituloProduto = {produto.tituloProduto}
                precoProduto = {produto.precoProduto}
                colocaNoCarrinho ={() => this.noCarrinho(produto.tituloProduto)}
              />
          )
        })
      }
      
      if(this.state.selectFiltro === "maior") {
        // listaMaiorParaMenor = this.state.produtos
        listaAtualParaComparacao.sort(function(a,b) {
          return b.precoProduto - a.precoProduto
        })
          relacaoProdutos = listaAtualParaComparacao.map((produto) => {
            return (
              <Produto
                key={produto.tituloProduto}
                fotoProduto = {produto.fotoProduto}
                tituloProduto = {produto.tituloProduto}
                precoProduto = {produto.precoProduto}
                colocaNoCarrinho ={() => this.noCarrinho(produto.tituloProduto)}
              />
            )
          })
      }
    }
    

    return (
      
      <Principal>

        <DivisaoPaginaPrincipal>
          <Cabecalho>
            <Titulo id="voltarAotopo">Labecommerce</Titulo>

            <DivisaoCarrinhoDeCompras>
              <IconeComContador
                icone={iconeCarrinhoCompras}
                onClickIcone= {this.onClickCarrinhoDeCompras}
                valorContador={this.state.carrinhoCompras.length}
              />
            </DivisaoCarrinhoDeCompras>
            
          </Cabecalho>
          
          

          <Banner>
            <Triangulo src={triangulo}/>
            <Menu>
              <ul>
                <Lista><Referencia href="#produtos"><Direciona onClick={this.onClickTodos}>Home</Direciona></Referencia></Lista>
                {/* <Lista><Referencia href="#produtos"><Direciona onClick={this.onClickFeminino}>Feminino</Direciona></Referencia></Lista>
                <Lista><Referencia href="#produtos"><Direciona onClick={this.onClickMasculino}>Masculino</Direciona></Referencia></Lista> */}
                <Lista><Referencia href="#astro">Astrodev</Referencia></Lista>
              </ul>
            </Menu>
            <div><Imghome src={astronauta}/></div>
            
            
            
          </Banner>
    
          <Tituloprodutos id="produtos">Produtos</Tituloprodutos>

          <Blocopesquisa >
            
            <DivPesquisa>
              <LabelPesquisa>
                <Inputpesquisa type="text" value={this.state.inputPesquisa} onChange={this.onChangePesq} placeholder="Digite o nome do produto"/>
              </LabelPesquisa>
              
              <BotaoPesquisar value="Pesquisar" onClick={() => this.pesquisa(this.state.inputPesquisa)} />

            </DivPesquisa>

            <DivisaoCategoria>
              <BotaoCategoria onClick={this.onClickFeminino}>Feminino</BotaoCategoria>
              <BotaoCategoria onClick={this.onClickMasculino}>Masculino</BotaoCategoria>
            </DivisaoCategoria>
            
            <DivFiltro>
              <SelectFiltro onChange={this.onChangeSelectFiltro} value={this.state.selectFiltro}>
                <OptionFiltro value="selecione">Ordem de exibição:</OptionFiltro>
                <OptionFiltro value="menor">Menor preço para Maior preço</OptionFiltro>
                <OptionFiltro value="maior">Maior preço para Menor preço</OptionFiltro>
              </SelectFiltro>

            </DivFiltro>
            
            
          </Blocopesquisa>

          <ListaDeProdutos>{relacaoProdutos}</ListaDeProdutos>

          <a href="#voltarAotopo"><Subir src={subir}/></a>

          <Rodape id="astro">
            <h3>Labecommerce faz parte da corporação Astrodev<Astrodev src={astrodev}/></h3>
            <p></p>
          </Rodape>

        </DivisaoPaginaPrincipal>

        <DiviCarrinhoDeCompras>
          { componenteCarrinhoDeCompras }
        </DiviCarrinhoDeCompras>
        
      </Principal>
  
    ) 
  }
}

export default App;