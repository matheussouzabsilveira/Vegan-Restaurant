import React from 'react'
import style from "./Main.module.css"
import especial from "../../../images/prato-especial.png"
import MainSlide from './MainSlide.js'

function Main() {

    let slides = [
        {titulo: 'Buddha Bowl Supremo', preco: '25% OFF', img: especial},
        {titulo: 'Bowl Supremo', preco: '25% OFF', img: especial},
        {titulo: 'buddha Supremo', preco: '25% OFF', img: especial},
        {titulo: 'Bowl buddha', preco: '25% OFF', img: especial},
    ]
     let currentIndex = 0;
  let intervalId = null;

  const handleInterval = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    console.log(currentIndex);
  };

  const startInterval = () => {
    intervalId = setInterval(handleInterval, 3000);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
  };

  startInterval();



  return (
    <div className={style.main}>
            <MainSlide titulo={slides[currentIndex].titulo} preco={slides[currentIndex].preco} img={slides[currentIndex].img}/>
        
    </div>
  )
}

export default Main