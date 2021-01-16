import React from 'react'
import styled from 'styled-components'
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
import triangulo from './img/triangulo.PNG'

const Fundo = styled.div`
  margin: 0;
  padding: 0;
  background-color: #0e0d09;
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
`

const Imghome = styled.img`
  margin-left: 20%;
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
`
const Produto = styled.div`
  margin: 10px 5px 10px 15px;
  width:400px;
  background-color: #191512;
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
      <Titulo>Labecommerce</Titulo>
      <Banner>
        <Triangulo src={triangulo}/>
        <Menu>
          <ul>
            <Lista>Home</Lista>
            <Lista><Referencia href="#masculino" >Masculino</Referencia></Lista>
            <Lista>Feminino</Lista>
            <Lista>Infantil</Lista>
          </ul>
        </Menu>
        <div><Imghome src={astronauta}/></div>
      </Banner>

      <Tituloprodutos id="masculino">Produtos</Tituloprodutos>
      <ListaDeProdutos>
        
        <Produto>
          <div>
            <img src={camisa1}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>

        <Produto>
          <div>
            <img src={camisa2}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>

        <Produto>
          <div>
            <img src={camisa3}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>

        <Produto>
          <div>
            <img src={camisa4}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>

        <Produto>
          <div>
            <img src={camisa5}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>

        <Produto>
          <div>
            <img src={camisa6}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>

        <Produto>
          <div>
            <img src={camisa7}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>

        <Produto>
          <div>
            <img src={camisa8}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>

        <Produto>
          <div>
            <img src={camisa9}/>
            <Preco>R$ 59,90</Preco><Add>+</Add>
          </div>
        </Produto>
      </ListaDeProdutos>
      <Rodape>
        <h3>Labecommerce faz parte da coorporação Astrodev</h3>
        <p></p>
      </Rodape>
    </Fundo>

  );
}

export default App;
