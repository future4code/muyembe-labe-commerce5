import React from 'react'
import styled from 'styled-components'
import Produto from './componentes/Produto'
import astronauta from './img/astronauta.png'
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
import triangulo from './img/triangulo.PNG'
import subir from './img/subir.PNG'

const Fundo = styled.div`
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

function App() {
  return (
    <Fundo>
      <Titulo id="voltarAotopo">Labecommerce</Titulo>
      <Banner>
        <Triangulo src={triangulo}/>
        <Menu>
          <ul>
            <Lista>Home</Lista>
            <Lista><Referencia href="#feminino">Feminino</Referencia></Lista>
            <Lista><Referencia href="#masculino" >Masculino</Referencia></Lista>
          </ul>
        </Menu>
        <div><Imghome src={astronauta}/></div>
      </Banner>

      <Tituloprodutos id="feminino">Produtos</Tituloprodutos>
      <ListaDeProdutos>
        
        <Produto
          tituloProduto={"camisa1"}
          produtoCamisa={camisa1}
          precoProduto={"R$ 59,90"}
        />

        <Produto
          tituloProduto={"camisa2"}
          produtoCamisa={camisa2}
          precoProduto={"R$ 59,90"}
        />

        <Produto 
          tituloProduto={"camisa3"}
          produtoCamisa={camisa9}
          precoProduto={"R$ 59,90"}
        />
      </ListaDeProdutos>
      <a href="#voltarAotopo"><Subir src={subir}/></a>
      <Rodape>
        <h3>Labecommerce faz parte da coorporação Astrodev</h3>
        <p></p>
      </Rodape>
    </Fundo>

  );
}

export default App;
