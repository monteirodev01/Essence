// import React from 'react'
import css from "./Hero.module.css";
import hero from "../../assets/hero-img.jpg";

const Hero = () => {
  return (
    <section className={css.hero}>
      <a href="#"><img src={hero} alt="" /></a>
    </section>
  )
}

export default Hero