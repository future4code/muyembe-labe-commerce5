import React from 'react'
import styled from 'styled-components'
import Produto from './componentes/Produto'
import astronauta from './img/astronauta.png'
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

      <Tituloprodutos id="masculino">Produtos</Tituloprodutos>
      <ListaDeProdutos>
        
        <Produto/>

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
