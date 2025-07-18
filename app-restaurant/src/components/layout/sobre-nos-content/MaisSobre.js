import React from 'react'
import style from "./MaisSobre.module.css"
import Card from "./Card.js"
import ambiente from "../../../images/ambiente.png"
import equipe from "../../../images/equipe.png"
import familia from "../../../images/donos.png"

function MaisSobre() {
  return (
    <div className={style.cardContainer}>
        <Card src={equipe} titulo="Equipe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat dui non suscipit tempor. Proin ultrices elit vel sapien aliquam, ac posuere ante aliquam." />
        <Card src={ambiente} titulo="Ambiente" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat dui non suscipit tempor. Proin ultrices elit vel sapien aliquam, ac posuere ante aliquam."/>
        <Card src={familia} titulo="Historia" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat dui non suscipit tempor. Proin ultrices elit vel sapien aliquam, ac posuere ante aliquam."/>
    </div>
  )
}

export default MaisSobre