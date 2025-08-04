import React, { useState } from 'react';
import style from '../../pages/Contato.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.mensagem.trim()) {
      setError('A mensagem é obrigatória');
      return;
    }
    
    if (!formData.email && !formData.telefone) {
      setError('Por favor, forneça pelo menos um meio de contato (email ou telefone)');
      return;
    }
    
    console.log('Dados do formulário:', formData);
    
    setSubmitted(true);
    setError('');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  if (submitted) {
    return (
      <div className={style.successMessage}>
        <h2>Mensagem enviada com sucesso!</h2>
        <p>Obrigado pelo seu contato. Retornaremos em breve.</p>
      </div>
    );
  }

  return (
    <div className={style.contactWrapper}>
      <h1>Fale Conosco</h1>
      <p>Envie sua mensagem, dúvida ou sugestão. Teremos prazer em atendê-lo!</p>
      
      {error && <div className={style.errorMessage}>{error}</div>}
      
      <form onSubmit={handleSubmit} className={style.contatoForm}>
        <div className={style.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome"
          />
        </div>
        
        <div className={style.formGroup}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
          />
        </div>
        
        <div className={style.formGroup}>
          <label htmlFor="telefone">Telefone (opcional):</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <div className={style.formGroup}>
          <label htmlFor="mensagem">Mensagem: <span className={style.required}>*</span></label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Digite sua mensagem aqui..."
            required
            rows="6"
          />
        </div>
        
        <button type="submit" className={style.submitButton}>
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
