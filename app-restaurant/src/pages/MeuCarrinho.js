import React from 'react';
import { useState, useEffect } from 'react';
import style from "./MeuCarrinho.module.css";
import Pedidos from "../components/layout/carrinho/Pedidos.js";
import HeaderCarrinho from '../components/layout/carrinho/HeaderCarrinho.js';

function MeuCarrinho() {
    // Estados para armazenar os pedidos, o estado de carregamento e erros.
    const [orders, setOrders] = useState([]);
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

    // useEffect para buscar os pedidos quando o componente é montado.
    useEffect(() => {
        fetchOrders();
    }, []); // O array vazio de dependências garante que o useEffect rode apenas uma vez.

    // Nova função para remover um pedido diretamente.
    // Ela recebe o ID do pedido e faz a requisição DELETE para a API.
    const handleRemoveOrder = async (orderId) => {
        try {
            const response = await fetch(`http://localhost:5000/orders/${orderId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Falha ao remover o pedido.');
            }

            // Atualiza a lista de pedidos no estado, removendo o pedido excluído.
            setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
            
        } catch (err) {
            console.error('Erro ao remover pedido:', err);
            setError('Erro ao remover o pedido. Tente novamente.');
        }
    };

    // Função para finalizar a compra, limpando todos os pedidos do carrinho.
    const handleFinalizarCompra = async () => {
        try {
            const response = await fetch('http://localhost:5000/orders', {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Falha ao finalizar a compra.');
            }
            // Limpa todos os pedidos do estado.
            setOrders([]);
            // Você pode adicionar um redirecionamento aqui, se desejar.
            // window.location.href = '/sucesso';
        } catch (err) {
            console.error('Erro ao finalizar compra:', err);
            setError('Erro ao finalizar a compra. Tente novamente.');
        }
    };

    // Calcula o preço total e a quantidade de itens.
    const totalPrice = orders.reduce((total, order) => {
        // Multiplica o preço pela quantidade de cada pedido e soma ao total.
        return total + (Number(order.price) * order.quantity);
    }, 0);

    const totalItems = orders.length;

    // Lógica para renderizar o estado de carregamento, erro ou a lista de pedidos.
    if (loading) {
        return <div className={style.container}><p>Carregando carrinho...</p></div>;
    }

    if (error) {
        return <div className={style.container}><p style={{ color: 'red' }}>{error}</p></div>;
    }

    return (
        <div className={style.container}>
            <HeaderCarrinho />
            <div className={style.carrinhoContainer}>
                <div className={style.pedidosDoCarrinho}>
                    <div className={style.items}>
                        <h1>Meu carrinho({totalItems} itens)</h1>
                    </div>
                    <div className={style.categorias}>
                        <p>Item</p>
                        <p>Valor</p>
                    </div>
                    <div className={style.pedidos}>
                        {orders.length > 0 ? (
                            orders.map(order => (
                                <Pedidos 
                                    key={order.id} // É crucial ter uma chave única para cada item na lista.
                                    order={order}
                                    name={order.dish_name}
                                    img={order.image_url}
                                    preco={Number(order.price) * order.quantity} // O preço do pedido é multiplicado pela quantidade.
                                    onDelete={handleRemoveOrder} // Passa a nova função de exclusão direta
                                />
                            ))
                        ) : (
                            <p>O seu carrinho está vazio!</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={style.finalizarContainer}>
                <div className={style.finalizarPedido}>
                    <div className={style.itemsDesconto}>
                        <div className={style.itens}>
                            <p>Itens</p>
                            <p>R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
                        </div>
                        <div className={style.desconto}>
                            <p>desconto</p>
                            <p>R$ 0,00</p>
                        </div>
                    </div>
                    <div className={style.total}>
                        <p>Total a pagar: </p>
                        <p>R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
                    </div>
                </div>
                <button 
                    onClick={handleFinalizarCompra} 
                    className={style.btnFinalizar}
                    disabled={orders.length === 0}
                >
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
}

export default MeuCarrinho;

// import React from 'react';
// import { useState, useEffect } from 'react';
// import style from "./MeuCarrinho.module.css";
// import Pedidos from "../components/layout/carrinho/Pedidos.js";
// import HeaderCarrinho from '../components/layout/carrinho/HeaderCarrinho.js';

// function MeuCarrinho() {
//     // Estados para armazenar os pedidos, o estado de carregamento e erros.
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     // Novos estados para controlar o modal de exclusão
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [orderToDeleteId, setOrderToDeleteId] = useState(null);

//     // Função para buscar os pedidos da API
//     const fetchOrders = async () => {
//         setLoading(true);
//         setError(null);
//         try {
//             const response = await fetch('http://localhost:5000/orders');
            
//             if (!response.ok) {
//                 throw new Error('Falha ao buscar os pedidos.');
//             }
            
//             const data = await response.json();
//             setOrders(data);
//         } catch (err) {
//             console.error('Erro ao buscar pedidos:', err);
//             setError('Erro ao carregar o carrinho. Tente novamente.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // useEffect para buscar os pedidos quando o componente é montado.
//     useEffect(() => {
//         fetchOrders();
//     }, []); // O array vazio de dependências garante que o useEffect rode apenas uma vez.

//     // Função para abrir o modal de confirmação.
//     // Recebe o ID do pedido que será excluído.
//     const handleDeleteClick = (orderId) => {
//         setOrderToDeleteId(orderId);
//         setIsModalOpen(true);
//     };

//     // Função para confirmar a exclusão.
//     const handleConfirmDelete = async () => {
//         if (!orderToDeleteId) return;

//         try {
//             const response = await fetch(`http://localhost:5000/orders/${orderToDeleteId}`, {
//                 method: 'DELETE',
//             });

//             if (!response.ok) {
//                 throw new Error('Falha ao remover o pedido.');
//             }

//             // Atualiza a lista de pedidos no estado, removendo o pedido excluído.
//             setOrders(prevOrders => prevOrders.filter(order => order.id !== orderToDeleteId));
            
//         } catch (err) {
//             console.error('Erro ao remover pedido:', err);
//             setError('Erro ao remover o pedido. Tente novamente.');
//         } finally {
//             // Fecha o modal e limpa o ID do pedido para exclusão.
//             setIsModalOpen(false);
//             setOrderToDeleteId(null);
//         }
//     };

//     // Função para cancelar a exclusão.
//     const handleCancelDelete = () => {
//         setIsModalOpen(false);
//         setOrderToDeleteId(null);
//     };

//     // Função para finalizar a compra, limpando todos os pedidos do carrinho.
//     const handleFinalizarCompra = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/orders', {
//                 method: 'DELETE',
//             });
//             if (!response.ok) {
//                 throw new Error('Falha ao finalizar a compra.');
//             }
//             // Limpa todos os pedidos do estado.
//             setOrders([]);
//             // Você pode adicionar um redirecionamento aqui, se desejar.
//             // window.location.href = '/sucesso';
            
//         } catch (err) {
//             console.error('Erro ao finalizar compra:', err);
//             setError('Erro ao finalizar a compra. Tente novamente.');
//         }
//     };

//     // Calcula o preço total e a quantidade de itens.
//     const totalPrice = orders.reduce((total, order) => {
//         // Multiplica o preço pela quantidade de cada pedido e soma ao total.
//         return total + (Number(order.price) * order.quantity);
//     }, 0);

//     const totalItems = orders.length;

//     // Lógica para renderizar o estado de carregamento, erro ou a lista de pedidos.
//     if (loading) {
//         return <div className={style.container}><p>Carregando carrinho...</p></div>;
//     }

//     if (error) {
//         return <div className={style.container}><p style={{ color: 'red' }}>{error}</p></div>;
//     }

//     return (
//         <div className={style.container}>
//             <HeaderCarrinho />
//             <div className={style.carrinhoContainer}>
//                 <div className={style.pedidosDoCarrinho}>
//                     <div className={style.items}>
//                         <h1>Meu carrinho({totalItems} itens)</h1>
//                     </div>
//                     <div className={style.categorias}>
//                         <p>Item</p>
//                         <p>Valor</p>
//                     </div>
//                     <div className={style.pedidos}>
//                         {orders.length > 0 ? (
//                             orders.map(order => (
//                                 <Pedidos 
//                                     key={order.id} // É crucial ter uma chave única para cada item na lista.
//                                     order={order}
//                                     name={order.dish_name}
//                                     img={order.image_url}
//                                     preco={Number(order.price) * order.quantity} // O preço do pedido é multiplicado pela quantidade.
//                                     onDelete={handleDeleteClick} // Passa a nova função de exclusão
//                                 />
//                             ))
//                         ) : (
//                             <p>O seu carrinho está vazio!</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div className={style.finalizarContainer}>
//                 <div className={style.finalizarPedido}>
//                     <div className={style.itemsDesconto}>
//                         <div className={style.itens}>
//                             <p>Itens</p>
//                             <p>R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
//                         </div>
//                         <div className={style.desconto}>
//                             <p>desconto</p>
//                             <p>R$ 0,00</p>
//                         </div>
//                     </div>
//                     <div className={style.total}>
//                         <p>Total a pagar: </p>
//                         <p>R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
//                     </div>
//                 </div>
//                 <button 
//                     onClick={handleFinalizarCompra} 
//                     className={style.btnFinalizar}
//                     disabled={orders.length === 0}
//                 >
//                     Finalizar Compra
//                 </button>
//             </div>
            
//             {/* Modal de Confirmação */}
//             {isModalOpen && (
//                 <div className={style.modalOverlay}>
//                     <div className={style.modal}>
//                         <h3>Tem certeza que deseja remover este item?</h3>
//                         <div className={style.modalButtons}>
//                             <button onClick={handleCancelDelete} className={style.modalBtnCancel}>Cancelar</button>
//                             <button onClick={handleConfirmDelete} className={style.modalBtnConfirm}>Remover</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default MeuCarrinho;

// import React from 'react';
// import { useState, useEffect } from 'react';
// import style from "./MeuCarrinho.module.css";
// import Pedidos from "../components/layout/carrinho/Pedidos.js";
// import HeaderCarrinho from '../components/layout/carrinho/HeaderCarrinho.js';

// function MeuCarrinho() {
//     // Estados para armazenar os pedidos, o estado de carregamento e erros.
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // useEffect para buscar os pedidos da API quando o componente é montado.
//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/orders');
                
//                 // Verifica se a resposta da API foi bem-sucedida.
//                 if (!response.ok) {
//                     throw new Error('Falha ao buscar os pedidos.');
//                 }
                
//                 const data = await response.json();
//                 setOrders(data);
//             } catch (err) {
//                 console.error('Erro ao buscar pedidos:', err);
//                 setError('Erro ao carregar o carrinho. Tente novamente.');
//             } finally {
//                 setLoading(false); // Define o carregamento como falso, independentemente do resultado.
//             }
//         };

//         fetchOrders();
//     }, []); // O array vazio de dependências garante que o useEffect rode apenas uma vez.

//     // Calcula o preço total e a quantidade de itens.
//     const totalPrice = orders.reduce((total, order) => {
//         // Multiplica o preço pela quantidade de cada pedido e soma ao total.
//         return total + (order.price * order.quantity);
//     }, 0);

//     const totalItems = orders.length;

//     // Lógica para renderizar o estado de carregamento, erro ou a lista de pedidos.
//     if (loading) {
//         return <div className={style.container}><p>Carregando carrinho...</p></div>;
//     }

//     if (error) {
//         return <div className={style.container}><p style={{ color: 'red' }}>{error}</p></div>;
//     }

//     return (
//         <div className={style.container}>
//             <HeaderCarrinho />
//             <div className={style.carrinhoContainer}>
//                 <div className={style.pedidosDoCarrinho}>
//                     <div className={style.items}>
//                         <h1>Meu carrinho({totalItems} itens)</h1>
//                     </div>
//                     <div className={style.categorias}>
//                         <p>Item</p>
//                         <p>Valor</p>
//                     </div>
//                     <div className={style.pedidos}>
//                         {orders.length > 0 ? (
//                             orders.map(order => (
//                                 <Pedidos 
//                                     key={order.id} // É crucial ter uma chave única para cada item na lista.
//                                     name={order.dish_name}
//                                     img={order.image_url}
//                                     preco={Number(order.price) * order.quantity} // O preço do pedido é multiplicado pela quantidade.
//                                 />
//                             ))
//                         ) : (
//                             <p>O seu carrinho está vazio!</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div className={style.finalizarContainer}>
//                 <div className={style.finalizarPedido}>
//                     <div className={style.itemsDesconto}>
//                         <div className={style.itens}>
//                             <p>Itens</p>
//                             <p>R${totalPrice.toFixed(2).replace('.', ',')}</p>
//                         </div>
//                         <div className={style.desconto}>
//                             <p>desconto</p>
//                             <p>R$00,00</p>
//                         </div>
//                     </div>
//                     <div className={style.total}>
//                         <p>Total a pagar: </p>
//                         <p>R${totalPrice.toFixed(2).replace('.', ',')}</p>
//                     </div>
//                 </div>
//                 <button className={style.btnFinalizar}>Finalizar Compra</button>
//             </div>
//         </div>
//     );
// }

// export default MeuCarrinho;

