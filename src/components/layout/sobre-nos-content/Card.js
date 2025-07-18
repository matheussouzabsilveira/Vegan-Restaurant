import React from 'react'
import style from "./Card.module.css"

function Card(props) {
  return (
    <div className={style.card}>
        <div className={style.imageCard}>
            <img src={props.src}></img>
        </div>
        <div className={style.content}>
            <h1>{props.titulo}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Card