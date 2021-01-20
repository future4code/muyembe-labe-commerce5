import React from 'react'
import styled from 'styled-components'
import Produto from './componentes/Produto'
import astronauta from './img/astronauta.png'
import lupa from './img/lupa.png'
import astrodev from './img/astrodev.png'
import triangulo from './img/triangulo.PNG'
import subir from './img/subir.PNG'
import camisa1 from './img/camisa1.png'
import camisa2 from './img/camisa2.png'
import camisa3 from './img/camisa3.png'
import camisa4 from './img/camisa4.png'
import camisa5 from './img/camisa5.png'
import camisa6 from './img/camisa6.png'
import camisa7 from './img/camisa7.png'
import camisa8 from './img/camisa8.png'
import camisa9 from './img/camisa9.png'
import camisaF1 from './img/camisaF1.png'
import camisaF2 from './img/camisaF2.png'
import camisaF3 from './img/camisaF3.png'
import camisaF4 from './img/camisaF4.png'
import camisaF5 from './img/camisaF5.png'
import camisaF6 from './img/camisaF6.png'

const Principal = styled.div`
  margin: 0;
  padding: 0;
  background-color: #0e0d09;
  position:relative;
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
   margin-top:500px;
   margin-left:200px;
`

const Inputpesquisa = styled.input`
  border:solid 1px #0080FF;
  border-radius:5px;
  box-shadow: 0px 5px 10px #819FF7;
  color:green; 
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
`
const Lupa = styled.img`
  width:10px;
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


class App extends React.Component {
  state = {
    todosOsProdutos:[
        {
            fotoProduto:camisa1,
            tituloProduto:"Hexagono Laranja",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisa2,
            tituloProduto:"Foguete",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisa3,
            tituloProduto:"Dominador",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisa4,
            tituloProduto:"Wakanda",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisa5,
            tituloProduto:"Astro Music",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisa6,
            tituloProduto:"Descansando",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisa7,
            tituloProduto:"Bolhas",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisa8,
            tituloProduto:"Astrodev",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisa9,
            tituloProduto:"Buraco Negro",
            precoProduto:"R$ 59,90",
            tipo:"masculino"
        },
        {
            fotoProduto:camisaF1,
            tituloProduto:"Foguete Feminina",
            precoProduto:"R$ 59,90",
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF2,
            tituloProduto:"Dominadora",
            precoProduto:"R$ 59,90",
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF3,
            tituloProduto:"Wakanda Feminina",
            precoProduto:"R$ 59,90",
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF4,
            tituloProduto:"Music",
            precoProduto:"R$ 59,90",
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF5,
            tituloProduto:"Descansando Feminina",
            precoProduto:"R$ 59,90",
            tipo:"feminino"
        },
        {
            fotoProduto:camisaF6,
            tituloProduto:"Bolhas Feminina",
            precoProduto:"R$ 59,90",
            tipo:"feminino"
        }
    ],
    produtosAtual:[
      {
        fotoProduto:camisa1,
        tituloProduto:"Hexagono Laranja",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa2,
        tituloProduto:"Foguete",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa3,
        tituloProduto:"Dominador",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa4,
        tituloProduto:"Wakanda",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa5,
        tituloProduto:"Astro Music",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa6,
        tituloProduto:"Descansando",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa7,
        tituloProduto:"Bolhas",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa8,
        tituloProduto:"Astrodev",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa9,
        tituloProduto:"Buraco Negro",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisaF1,
        tituloProduto:"Foguete Feminina",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF2,
        tituloProduto:"Dominadora",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF3,
        tituloProduto:"Wakanda Feminina",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF4,
        tituloProduto:"Music",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF5,
        tituloProduto:"Descansando Feminina",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF6,
        tituloProduto:"Bolhas Feminina",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    }
    ],
    inputPesquisa:"",
    adicionadoAoCarrinho: [
      {
        fotoProduto:"",
        tituloProduto:"",
        precoProduto:"",
        tipo:""
    },
    ]
  }

  onClickTodos = () => {
    this.setState({produtosAtual:[
      {
        fotoProduto:camisa1,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa2,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa3,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa4,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa5,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa6,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa7,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa8,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa9,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
      fotoProduto:camisaF1,
      tituloProduto:"Astronauta",
      precoProduto:"R$ 59,90",
      tipo:"feminino"
    },
    {
      fotoProduto:camisaF2,
      tituloProduto:"Astronauta",
      precoProduto:"R$ 59,90",
      tipo:"feminino"
  },
  {
      fotoProduto:camisaF3,
      tituloProduto:"Astronauta",
      precoProduto:"R$ 59,90",
      tipo:"feminino"
  },
  {
      fotoProduto:camisaF4,
      tituloProduto:"Astronauta",
      precoProduto:"R$ 59,90",
      tipo:"feminino"
  },
  {
      fotoProduto:camisaF5,
      tituloProduto:"Astronauta",
      precoProduto:"R$ 59,90",
      tipo:"feminino"
  },
  {
      fotoProduto:camisaF6,
      tituloProduto:"Astronauta",
      precoProduto:"R$ 59,90",
      tipo:"feminino"
  }
    ]})
  }
  
  onClickFeminino = () => {
    this.setState({produtosAtual:[
      {
        fotoProduto:camisaF1,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF2,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF3,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF4,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF5,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    },
    {
        fotoProduto:camisaF6,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"feminino"
    }
    ]})
  }
  
  onClickMasculino = () => {
    this.setState({produtosAtual:[
      {
        fotoProduto:camisa1,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa2,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa3,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa4,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa5,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa6,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa7,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa8,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    },
    {
        fotoProduto:camisa9,
        tituloProduto:"Astronauta",
        precoProduto:"R$ 59,90",
        tipo:"masculino"
    }
    ]})
  }

  onChangePesq = (event) => {
    this.setState({inputPesquisa:event.target.value})
  }

  pesquisa = (event) => {
    event.preventDefault()
    const pesquisaProduto = this.state.todosOsProdutos.map((produto) => {
      if(produto.tituloProduto === this.state.inputPesquisa){
          this.setState({produtosAtual:[
              {
                fotoProduto: produto.fotoProduto,
                tituloProduto: produto.tituloProduto,
                precoProduto: produto.precoProduto
              }
          ]})  
      }
    })
  }

  noCarrinho = (addCar) => {
    const adicinando = this.state.todosOsProdutos.map((produto) => {
      if (produto.tituloProduto === addCar){
        const addCarrinho = {
          fotoProduto: produto.fotoProduto,
          tituloProduto: produto.tituloProduto,
          precoProduto: produto.precoProduto
        }

        const adicionandoProdutos = [addCarrinho, ...this.state.adicionadoAoCarrinho]
        this.setState({adicionadoAoCarrinho:adicionandoProdutos})
      }
    })  
      
    console.log(this.state.adicionadoAoCarrinho)
    alert("Adicionado, verifique no console.log")
  }


  render(){
    document.title = "Labecommerce"
    const relacaoProdutos = this.state.produtosAtual.map((produto) => {
      return (
        <Produto
          fotoProduto = {produto.fotoProduto}
          tituloProduto = {produto.tituloProduto}
          precoProduto = {produto.precoProduto}
          colocaNoCarrinho ={() => this.noCarrinho(produto.tituloProduto)}
        />
      )
    })
    return (
      <Principal>
        <Titulo id="voltarAotopo">Labecommerce</Titulo>
        <Banner>
          <Triangulo src={triangulo}/>
          <Menu>
            <ul>
              <Lista><Referencia href="#produtos"><Direciona onClick={this.onClickTodos}>Home</Direciona></Referencia></Lista>
              <Lista><Referencia href="#produtos"><Direciona onClick={this.onClickFeminino}>Feminino</Direciona></Referencia></Lista>
              <Lista><Referencia href="#produtos"><Direciona onClick={this.onClickMasculino}>Masculino</Direciona></Referencia></Lista>
              <Lista><Referencia href="#astro">Astrodev</Referencia></Lista>
            </ul>
          </Menu>
          <div><Imghome src={astronauta}/></div>
          
          <Blocopesquisa onSubmit={this.pesquisa}>
          
            <label>
              <Inputpesquisa type="text" value={this.state.inputPesq} onChange={this.onChangePesq} placeholder="pesquisar"/>
            </label>
            
            <BotaoPesquisar type="submit" value="Pesquisar" />
          
          </Blocopesquisa>
          
        </Banner>
  
        <Tituloprodutos id="produtos">Produtos</Tituloprodutos>

        <ListaDeProdutos>{relacaoProdutos}</ListaDeProdutos>

        <a href="#voltarAotopo"><Subir src={subir}/></a>

        <Rodape id="astro">
          <h3>Labecommerce faz parte da corporação Astrodev<Astrodev src={astrodev}/></h3>
          <p></p>
        </Rodape>

      </Principal>
  
    ) 
  }
}

export default App;
