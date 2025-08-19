import React from "react";
import css from "./BestSellers.module.css";
import Titulo from "../Titulo/Titulo";
import Quasar from "../../assets/quasar.jpg";
import Malbec from "../../assets/malbec.jpg";

const BestSellers = () => {
  return (
    <section className={`container ${css.bestSellers}`}>
      <Titulo titulo="Marcas mais vendidas" />

      <div className={css.bestSellersItens}>
        <a href="">
          {" "}
          <img src={Quasar} alt="" />
        </a>
        <div className={css.divisor}></div>
        <a href="">
          {" "}
          <img src={Malbec} alt="" />
        </a>
      </div>
    </section>
  );
};

export default BestSellers;
