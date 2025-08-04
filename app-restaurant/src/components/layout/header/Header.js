import React from 'react'
import style from "./Header.module.css"
import {Link} from "react-router-dom"
import logo from "../../../images/image.png"

function Header() {
  return (
    <div className={style.header}>
        <div className={style.logo}>
            <img src={logo} alt="Logo do restaurante" />
        </div>
        <div className={style.nav}>
            <Link className={style.links} to="/">Home</Link>
            <Link className={style.links} to="/sobre-nos">Sobre Nós</Link>
            <Link className={style.links} to="/cardapio">Cardápio</Link>
            <Link className={style.links} to="/contato">Contato</Link>
        </div>
    </div>
  )
}

export default Header