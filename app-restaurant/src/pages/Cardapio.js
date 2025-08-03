import React, { useState, useEffect } from 'react';
import Header from '../components/layout/header/Header.js';
import Pratos from '../components/layout/cardapio/Pratos.js';
import Carrinho from '../components/layout/cardapio/Carrinho.js';
import style from "./Cardapio.module.css";

function Cardapio() {
  // Estado para armazenar os pedidos do carrinho e o preço total
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os pedidos da API
  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/orders');
      
      if (!response.ok) {
        throw new Error('Falha ao buscar os pedidos.');
      }
      
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      console.error('Erro ao buscar pedidos:', err);
      setError('Erro ao carregar o carrinho. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  // useEffect para buscar os pedidos quando o componente é montado
  useEffect(() => {
    fetchOrders();
  }, []);

  // useEffect para calcular o preço total sempre que a lista de pedidos mudar
  useEffect(() => {
    const calculatedTotal = orders.reduce((total, order) => {
      // É importante garantir que o preço e a quantidade sejam números
      return total + (Number(order.price) * Number(order.quantity));
    }, 0);
    setTotalPrice(calculatedTotal);
  }, [orders]);

  return (
    <div className={style.body}>
      <Header />
      <div className={style.pratosContainer}>
        <Pratos />
        {/* Passa o preço total calculado para o componente Carrinho */}
        <Carrinho btn="Ver carrinho" preco={totalPrice} />
      </div>
    </div>
  );
}

export default Cardapio;

// import React from 'react'
// import Header from '../components/layout/header/Header.js'
// import Pratos from '../components/layout/cardapio/Pratos.js'
// import Carrinho from '../components/layout/cardapio/Carrinho.js'
// import style from "./Cardapio.module.css"

// function Cardapio() {
//   return (
//     <div className={style.body}>
//         <Header />
//         <div className={style.pratosContainer}>
//           <Pratos />  
//           <Carrinho btn="Ver carrinho"/>
//         </div>
//     </div>
//   )
// }

// export default Cardapio