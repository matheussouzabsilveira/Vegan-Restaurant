
import React from 'react'
import { useState } from 'react'
import style from "./FinalizarPedido.module.css"
import Carrinho from "../components/layout/cardapio/Carrinho.js"
import HeaderCarrinho from '../components/layout/carrinho/HeaderCarrinho.js'

// Carrega os dados do localStorage
let banco = JSON.parse(localStorage.getItem("banco")) || {};

// Garante que o preço seja um número
if (banco && banco.preco) {
  if (typeof banco.preco === 'number') {
    // Preço já é um número
  } else {
    const precoTexto = banco.preco.toString();
    const precoLimpo = precoTexto
      .replace(/[^0-9,.]/g, '')
      .replace(/\./g, '')
      .replace(',', '.');
    
    const precoNumerico = parseFloat(precoLimpo);
    banco.preco = isNaN(precoNumerico) ? 0 : precoNumerico;
  }
} else {
  banco.preco = 0;
}

function FinalizarPedido() {
  const [num, setNum] = useState(1);
  const [observacoes, setObservacoes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Verificação para garantir que o prato existe no localStorage
  if (!banco.titulo) {
    return <div>Não foi possível carregar os detalhes do prato.</div>;
  }
  
  function mais() {
    setNum(num + 1);
  }

  function menos() {
    if (num > 1) {
      setNum(num - 1);
    }
  }

  // A função principal para enviar o pedido para a API
  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    // Os dados do pedido que serão enviados para a API
    const novoPedido = {
      dish_name: banco.titulo,
      ingredients: banco.desc,
      price: banco.preco,
      quantity: num,
      notes: observacoes,
      image_url: banco.img,
    };

    try {
      // Faz a requisição POST para o seu back-end
      const response = await fetch('https://elegant-imagination-production.up.railway.app/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoPedido), // Converte o objeto para JSON
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar o pedido.');
      }

      const dadosDoPedido = await response.json();
      console.log('Pedido enviado com sucesso!', dadosDoPedido);
      
      // Limpa os campos após o envio
      setNum(1);
      setObservacoes('');
      localStorage.removeItem("banco");
      
      // Adicionado: Redireciona para a página do carrinho após o sucesso
      window.location.href = '/carrinho';
      
    } catch (err) {
      console.error('Erro ao enviar o pedido:', err);
      setError('Erro ao enviar o pedido. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.finalizarPedido}>
      <HeaderCarrinho />
      <div className={style.finalizarPedidoContainer}>
        <img className={style.img} src={banco.img} alt="Prato vegano" />
        <div className={style.finalizarPedidoContent}>
          <div className={style.quantidade}>
            <h1>{banco.titulo}</h1>
            <btn>
              <span onClick={menos} className='menos'>-</span>
              {num}
              <span onClick={mais} className='mais'>+</span>
            </btn>
          </div>
          <p className={style.desc}>{banco.desc}</p>
          <input
            className={style.obs}
            type='text'
            placeholder='Observações'
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
          />
        </div>
      </div>
      {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
      
      {/* O componente Carrinho recebe as props necessárias */}
      <Carrinho 
        preco={Number(banco.preco) * num} 
        btn="finalizar pedido"
        handleFinalizarPedido={handleSubmit} // Passa a função como prop
        loading={loading} // Passa o estado de carregamento
      />
    </div>
  )
}

export default FinalizarPedido

