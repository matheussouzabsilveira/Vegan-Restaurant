import React from 'react'
import style from "./Pedidos.module.css"

// O componente agora recebe o objeto 'order' completo e a função 'onDelete' do componente pai.
// Usamos a desestruturação para facilitar o acesso às propriedades.
function Pedidos({ order, name, img, preco, onDelete }) {
  return (
    <div className={style.pedidoContainer}>
      <div className={style.info}>
        <div className={style.img}>
          <img src={img} alt="Imagem do pedido" />
        </div>
        <div className={style.name}>
          <h2>{name}</h2>
          {/* O botão agora tem um evento onClick que chama a função onDelete */}
          {/* Passamos o ID do pedido (order.id) para a função onDelete */}
          <button onClick={() => onDelete(order.id)}>Remover</button>
        </div>
      </div>
      <div className={style.preco}><p>R$ {Number(preco).toFixed(2).replace('.', ',')}</p></div>
    </div>
  )
}

export default Pedidos

// import React from 'react'
// import style from "./Pedidos.module.css"

// function Pedidos(props) {
//   return (
//     <div className={style.pedidoContainer}>
//         <div className={style.info}>
//             <div className={style.img}>
//                 <img src={props.img} alt="Imagem do pedido" />
//             </div>
//             <div className={style.name}>
//                 <h2>{props.name}</h2>
//                 <button>Remover</button>
//             </div>
//         </div>
//         <div className={style.preco}><p>{props.preco}</p></div>
//     </div>
//   )
// }

// export default Pedidos