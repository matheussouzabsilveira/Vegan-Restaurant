import React from 'react'
import { useState } from 'react'
import img from "../images/pratoVegano.webp"
import style from "./FinalizarPedido.module.css"
import Carrinho from "../components/layout/cardapio/Carrinho.js"
import HeaderCarrinho from '../components/layout/carrinho/HeaderCarrinho.js'

let banco = JSON.parse(localStorage.getItem("banco"));
console.log(banco);
function FinalizarPedido() {
  const [num, setNum] = useState(1);

  function mais() {
    setNum(num + 1);
  }

  function menos() {
    if (num > 1) {
      setNum(num - 1);
    }
  }
  return (
    <div className={style.finalizarPedido}>
        <HeaderCarrinho />
        <div className={style.finalizarPedidoContainer}>
        <img className={style.img} src={img}/>
            <div className={style.finalizarPedidoContent}>
                <div className={style.quantidade}>
                    <h1>{banco.titulo}</h1>
                    <btn><span  onClick={menos} className='menos'>-</span>{num}<span onClick={mais} className='mais'>+</span></btn>
                </div>
                <p className={style.desc}>{banco.desc}</p>
                <input className={style.obs} type='text' placeholder='Observações' />
            </div>
        </div>
        <Carrinho btn="finalizar pedido"/>
    </div>
  )
}

export default FinalizarPedido