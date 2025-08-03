import React from 'react'
import Opcoes from './Opcoes.js'
import style from "./Pratos.module.css"
import img from "../../../images/pratoVegano.webp"
import img2 from "../../../images/pratoVegano2.jpeg"

function Pratos(props) {

  return (
    <div className={style.pratosContainer}>
        <h1>Pratos Principais</h1>
        <div className={style.pratos}>
          <Opcoes img={img} titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img={img2} titulo="Buddha Bowl Especial" desc="quinoa, abacate, grão-de-bico, abóbora, castanhas" preco="R$100.00"/>
          <Opcoes img={img} titulo="Buddha Bowl Fit" desc="rúcula, quinoa, abacate, grão-de-bico, tomate seco" preco="R$85.00"/>
          <Opcoes img={img} titulo="Buddha Bowl Oriental" desc="tofu grelhado, arroz integral, brócolis, cenoura e molho teriyaki" preco="R$90.00"/>
        </div>
        <h1>Lanches</h1>
        <div className={style.pratos}>
          <Opcoes img={img} titulo="Hambúrguer de Grão" desc="pão integral, hambúrguer de grão-de-bico, alface, tomate, molho de ervas" preco="R$28.90"/>
          <Opcoes img={img} titulo="Wrap de Falafel" desc="pão sírio, falafel, homus, rúcula, tomate seco" preco="R$32.50"/>
          <Opcoes img={img} titulo="Sanduíche de Abobrinha" desc="pão de grãos, abobrinha grelhada, berinjela, patê de ervilha" preco="R$26.90"/>
          <Opcoes img={img} titulo="Tacos Mexicanos" desc="tortilhas de milho, feijão, abacate, pico de gallo, creme de castanha" preco="R$35.00"/>
        </div>
        <h1>Sobremesas Deliciosas</h1>
        <div className={style.pratos}>
          <Opcoes img={img} titulo="Mousse de Cacau" desc="mousse cremosa de cacau 70% com calda de frutas vermelhas" preco="R$18.90"/>
          <Opcoes img={img} titulo="Cheesecake de Castanha" desc="cheesecake vegano com calda de frutas vermelhas" preco="R$22.50"/>
          <Opcoes img={img} titulo="Pudim de Chia" desc="pudim de chia com leite de coco e frutas frescas" preco="R$16.90"/>
          <Opcoes img={img} titulo="Brownie de Feijão" desc="brownie de chocolate com feijão preto e nozes" preco="R$19.90"/>
        </div>
        <h1>Bebidas refrescantes</h1>
        <div className={style.pratos}>
          <Opcoes img={img} titulo="Suco Detox" desc="suco verde com couve, abacaxi, gengibre e hortelã" preco="R$14.90"/>
          <Opcoes img={img} titulo="Água Saborizada" desc="água com rodelas de limão, hortelã e gengibre" preco="R$8.90"/>
          <Opcoes img={img} titulo="Chá Gelado" desc="chá verde com pêssego e hortelã" preco="R$12.90"/>
          <Opcoes img={img} titulo="Café Cremoso" desc="café com leite de aveia e canela" preco="R$10.90"/>
        </div>

    </div>
  )
}

export default Pratos
