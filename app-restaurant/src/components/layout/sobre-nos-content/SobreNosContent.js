import React from 'react'
import style from "./SobreNos.module.css"
import imageSobre from "../../../images/imagem-restaurante1-1.webp"

function SobreNosContent() {
  return (
    <div className={style.containerSobre}>
        <div className={style.content}>
            <h1>Sobre nós</h1>
            <p>No Vegan Restaurant, acreditamos que uma alimentação deliciosa e consciente pode transformar o mundo. Somos mais que um restaurante vegano; somos um convite para uma jornada de sabores incríveis que nutrem o corpo, a mente e o planeta. Cada prato é cuidadosamente elaborado com ingredientes frescos e de origem responsável, celebrando a riqueza da culinária vegetal. Nossa missão é oferecer uma experiência gastronômica vegana excepcional, promovendo a saúde, a sustentabilidade e o respeito a todas as formas de vida, através de pratos inovadores e saborosos que inspiram escolhas conscientes. Nossa visão é ser reconhecido como um farol da culinária vegana em Florianópolis, expandindo a percepção de que a alimentação à base de plantas é vibrante, diversificada e acessível a todos, contribuindo para um futuro mais compassivo e ecológico. Guiados por nossos valores de consciência em tudo o que fazemos, priorizando o impacto no planeta e nos seres vivos; qualidade, com comprometimento com a excelência dos ingredientes e a perfeição em cada prato; inovação, na busca constante por novas receitas e técnicas que elevem a experiência vegana; respeito por todas as formas de vida, pelo meio ambiente e por nossa comunidade; e paixão, pois acreditamos no poder transformador da alimentação vegetal e fazemos tudo com o coração.
            </p>
        </div>
        <div className={style.imageSobre}>
            <img src={imageSobre} alt="Sobre nós" />
        </div>
    </div>
  )
}

export default SobreNosContent