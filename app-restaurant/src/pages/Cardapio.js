import React from 'react'
import Header from '../components/layout/header/Header.js'
import Pratos from '../components/layout/cardapio/Pratos.js'
import Carrinho from '../components/layout/cardapio/Carrinho.js'
import style from "./Cardapio.module.css"

function Cardapio() {
  return (
    <div className={style.body}>
        <Header />
        <div className={style.pratosContainer}>
          <Pratos />  
          <Carrinho btn="Ver carrinho"/>
        </div>
    </div>
  )
}

export default Cardapio