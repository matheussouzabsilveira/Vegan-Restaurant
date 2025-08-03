import React from 'react'
import style from "./Opcoes.module.css"

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
    // Pega o preço diretamente da prop, já que é passado como string formatada
    const precoTexto = props.preco; // Já vem como "R$75.00"
    
    // Converte para número (remove R$, troca vírgula por ponto e converte para float)
    const precoNumerico = parseFloat(
      precoTexto
        .replace('R$', '')
        .trim()
        .replace(',', '.')
    );

    banco = {
      titulo: h2.innerHTML,
      desc: desc.innerHTML,
      preco: isNaN(precoNumerico) ? 0 : precoNumerico,
      img: props.img // Adicionando a URL da imagem ao objeto banco
    }
    localStorage.setItem("banco", JSON.stringify(banco));
    window.location.href = "/finalizar-pedido";
  }
  return (
    <div onClick={conteudoDoPedido} className={style.opcoesContainer}>
        <div className={style.Opcoesimg}>
            <img src={props.img} alt={'Prato vegano'} />
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
