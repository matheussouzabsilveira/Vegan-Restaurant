import React from 'react';
import Header from '../components/layout/header/Header';
import ContactForm from '../components/contato/ContactForm';
import style from './Contato.module.css';

function Contato() {
  return (
    <div className={style.pageContainer}>
      <Header />
      <div className={style.contentContainer}>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contato;