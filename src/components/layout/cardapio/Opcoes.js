import React from 'react'
import style from "./Opcoes.module.css"
import img from "../../../images/pratoVegano.webp"


  let banco = JSON.parse(localStorage.getItem("banco"));
  if(banco == null){
    banco = [];
  }
function Opcoes(props) {

  function conteudoDoPedido(evt) {
    console.log('Elemento clicado:', evt.target);
  
    const container = evt.currentTarget;
    console.log('Container:', container);
    
    const h2 = container.querySelector('h2');
    const desc = container.querySelector('p');
    const preco = container.querySelector('p:last-child');
    
    console.log('h2:', h2);
    console.log('desc:', desc);
    console.log('preco:', preco);
    banco = {
      titulo: h2.innerHTML,
      desc: desc.innerHTML,
      preco: preco.innerHTML
    }
    localStorage.setItem("banco", JSON.stringify(banco));
    window.location.href = "/finalizar-pedido";
  }
  return (
    <div onClick={conteudoDoPedido} className={style.opcoesContainer}>
        <div className={style.img}>
            <img src={img} />
        </div>
        <div className={style.content}>
            <h2>{props.titulo}</h2>
            <p>{props.desc}</p>
            <p className={style.preco}>{props.preco}</p>
        </div>
    </div>
  )
}

export default Opcoes
