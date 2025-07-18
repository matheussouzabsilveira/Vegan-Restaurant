import React from 'react'
import Opcoes from './Opcoes.js'
import style from "./Pratos.module.css"
function Pratos(props) {

  return (
    <div className={style.pratosContainer}>
        <h1>Pratos Principais</h1>
        <div className={style.pratos}>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
        </div>
        <h1>Lanches</h1>
        <div className={style.pratos}>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
        </div>
        <h1>Sobremesas Deliciosas</h1>
        <div className={style.pratos}>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
        </div>
        <h1>Bebidas refrescantes</h1>
        <div className={style.pratos}>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
          <Opcoes img="" titulo="Buddha Bowl Supremo" desc="tomate, alface, azeitona, arroz, batata" preco="R$75.00"/>
        </div>

    </div>
  )
}

export default Pratos
