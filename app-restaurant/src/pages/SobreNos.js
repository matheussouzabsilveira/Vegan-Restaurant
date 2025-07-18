import React from 'react'
import Header from '../components/layout/header/Header.js'
import SobreNosContent from '../components/layout/sobre-nos-content/SobreNosContent.js'
import MaisSobre from "../components/layout/sobre-nos-content/MaisSobre.js"
import style from "./SobreNos.module.css"

function SobreNos() {
  return (
    <div className={style.body}>
        <Header />
        <SobreNosContent />
        <MaisSobre />
    </div>
  )
}

export default SobreNos