import React from 'react'
import style from "./MeuCarrinho.module.css"
import Pedidos from "../components/layout/carrinho/Pedidos.js"
import HeaderCarrinho from '../components/layout/carrinho/HeaderCarrinho.js'

function MeuCarrinho() {


  return (
    <div className={style.container}>
        <HeaderCarrinho />
        <div className={style.carrinhoContainer}>
            <div className={style.pedidosDoCarrinho}>
                <div className={style.items}>
                    <h1>Meu carrinho(0 itens)</h1>
                </div>
                <div className={style.categorias}>
                    <p>Item</p>
                    <p>Valor</p>
                </div>
                <div className={style.pedidos}>
                    <Pedidos />
                    <Pedidos />
                    <Pedidos />
                    <Pedidos />
                </div>
            </div>
        </div>
        <div className={style.finalizarContainer}>
            <div className={style.finalizarPedido}>
                <div className={style.itemsDesconto}>
                    <div className={style.itens}>
                        <p>Itens</p>
                        <p>R$100.00</p>
                    </div>
                    <div className={style.desconto}>
                        <p>desconto</p>
                        <p>R$00.00</p>
                    </div>
                </div>
                <div className={style.total}>
                    <p>Total a pagar: </p>
                    <p>R$00.00</p>
                </div>
            </div>
            <button className={style.btnFinalizar}>Finalizar Compra</button>
        </div>
    </div>
  )
}

export default MeuCarrinho