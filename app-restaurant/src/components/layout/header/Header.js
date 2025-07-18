import React from 'react'
import style from "./Header.module.css"
import {Link} from "react-router-dom"
import logo from "../../../images/image.png"

function Header() {
  return (
    <div className={style.header}>
        <div className={style.logo}>
            <img src={logo}></img>
        </div>
        <div className={style.nav}>
            <Link className={style.links} to="/">Home</Link>
            <Link className={style.links} to="/sobre-nos">Sobre Nós</Link>
            <Link className={style.links} to="/cardapio">Cardápio</Link>
            <Link className={style.links} to="/cardapio">Login</Link>
            <Link className={style.cadastro} to="/cardapio">Cadastro</Link>
        </div>
    </div>
  )
}

export default Header