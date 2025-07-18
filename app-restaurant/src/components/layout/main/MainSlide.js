import React from 'react'
import style from "./Main.module.css"
import especial from "../../../images/prato-especial.png"

function MainSlide(props) {
  return (
    <>
            <div className={style.content}>
            <h1>{props.titulo}</h1>
            <div className={style.precoContainer}>
                <h2 className={style.especial}>SPECIAL</h2>
                <h2>{props.preco}</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat dui non suscipit tempor. Proin ultrices elit vel sapien aliquam, ac posuere ante aliquam. In ut tempus magna. Praesent vel dolor vitae nibh bibendum tincidunt vel nec orci. Quisque hendrerit tellus non urna tincidunt commodo.</p>
        </div>
        <div className={style.image}>
            <img src={props.img} />
        </div>
        <div className={style.slide}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>   
  )
}

export default MainSlide