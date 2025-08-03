import React from 'react';
import style from './Carrinho.module.css';

function Carrinho({ preco, btn, handleFinalizarPedido, loading }) {
  // A função agora chama a prop que contém a lógica de envio para a API
  function handleButtonClick() {
    // Adicionei uma verificação aqui para garantir que a prop é uma função
    if (typeof handleFinalizarPedido === 'function') {
      handleFinalizarPedido();
    } else {
      // Caso não seja, ele volta para a lógica de navegação padrão
      window.location.href = "/carrinho";
    }
  }

  return (
    <div className={style.carrinho}>
      <p>R$ {typeof preco === 'number' ? preco.toFixed(2).replace('.', ',') : '0,00'}</p>
      <input
        onClick={handleButtonClick}
        type="button"
        value={loading ? 'Finalizando...' : btn}
        disabled={loading} // Desabilita o botão enquanto a requisição está em andamento
      />
    </div>
  );
}

export default Carrinho;

// import React from 'react';
// import style from './Carrinho.module.css';

// function Carrinho({ preco, btn, handleFinalizarPedido, loading }) {
//   // A função agora chama a prop que contém a lógica de envio para a API
//   function handleButtonClick() {
//     handleFinalizarPedido();
//   }

//   return (
//     <div className={style.carrinho}>
//       <p>R$ {typeof preco === 'number' ? preco.toFixed(2).replace('.', ',') : '0,00'}</p>
//       <input
//         onClick={handleButtonClick}
//         type="button"
//         value={loading ? 'Finalizando...' : btn}
//         disabled={loading} // Desabilita o botão enquanto a requisição está em andamento
//       />
//     </div>
//   );
// }

// export default Carrinho;


