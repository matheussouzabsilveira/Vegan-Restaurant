import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]); // Estado para armazenar a lista de usuários
    const [loading, setLoading] = useState(true); // Estado para indicar carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros

    const BACKEND_URL = 'http://localhost:3000'; // URL do seu backend Node.js

    useEffect(() => {
        // useEffect é usado para efeitos colaterais, como buscar dados
        // Ele roda após a primeira renderização e a cada atualização das dependências
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/usuarios`); // Faz a requisição GET

                if (!response.ok) {
                    // Se a resposta não for OK (status 2xx), lança um erro
                    const errorData = await response.json();
                    throw new Error(`Erro ${response.status}: ${errorData.message || 'Falha ao carregar usuários.'}`);
                }

                const data = await response.json(); // Converte a resposta para JSON
                setUsers(data); // Atualiza o estado com os usuários recebidos
            } catch (err) {
                console.error("Erro ao buscar usuários:", err);
                setError(err.message); // Armazena a mensagem de erro no estado
            } finally {
                setLoading(false); // Finaliza o estado de carregamento, independentemente do sucesso ou falha
            }
        };

        fetchUsers(); // Chama a função de busca de dados
    }, []); // O array vazio [] como segundo argumento significa que este useEffect rodará apenas uma vez,
          // após a montagem inicial do componente, como componentDidMount.

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-semibold text-gray-700">Carregando usuários...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md shadow-md">
                    <p className="font-bold">Erro ao carregar usuários:</p>
                    <p>{error}</p>
                    <p className="text-sm mt-2">Verifique se o seu backend está rodando em {BACKEND_URL} e se o CORS está configurado corretamente.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4 my-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Usuários Cadastrados</h1>
            {users.length === 0 ? (
                <p className="text-center text-gray-600">Nenhum usuário cadastrado ainda.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map(user => (
                        <div key={user.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p className="text-lg font-semibold text-blue-700">ID: {user.id}</p>
                            <p className="text-gray-700">Nome: <span className="font-medium">{user.nome}</span></p>
                            <p className="text-gray-700">Email: <span className="font-medium">{user.email}</span></p>
                            <p className="text-gray-700">Endereço: <span className="font-medium">{user.endereco || 'Não informado'}</span></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserList;