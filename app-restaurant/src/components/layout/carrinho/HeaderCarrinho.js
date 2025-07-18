import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import logo from "../../../images/image.png"
import style from "./HeaderCarrinho.module.css"
function HeaderCarrinho() {
    const voltar = () => {
        window.location.href = "/cardapio";
    };
  return (
    <div className={style.header}>
        <FontAwesomeIcon onClick={voltar} className={style.voltar} icon={faArrowLeft} />
        <img src={logo} alt="" />
    </div>
  )
}

export default HeaderCarrinho