import React from 'react'
import style from "./Carrinho.module.css"

function Carrinho(props) {
  function acessarCarrinho(){
    window.location.href = "/carrinho";
  }
  return (
    <div className={style.carrinho}>
      <p>Total: R$150</p>
      <input onClick={acessarCarrinho} type="button" value={props.btn} />
    </div>
  )
}

export default Carrinho
