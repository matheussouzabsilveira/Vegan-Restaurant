import React from 'react'
import style from "./Pedidos.module.css"
import img from "../../../images/pratoVegano.webp"

function Pedidos() {
  return (
    <div className={style.pedidoContainer}>
        <div className={style.info}>
            <div className={style.img}>
                <img src={img} alt="" />
            </div>
            <div className={style.name}>
                <h2>Buddha Bowl Supremo</h2>
                <button>Remover</button>
            </div>
        </div>
        <div className={style.preco}><p>R$100.00</p></div>
    </div>
  )
}

export default Pedidos