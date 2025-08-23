import React from "react";
import css from "./NewsLetters.module.css";

const NewsLetters = () => {
  return (
    <section className={css.bg}>
      <div className={`container ${css.container}`}>
        <h3 className="font-1-xl">
          Quer receber promoções exclusivas antes de todo mundo?
        </h3>
        <form className={`font-1-s  ${css.infos}`}>
          <input id="nome" type="text" placeholder="Nos informe seu nome" />
          <input
            id="numero"
            type="number"
            placeholder="Nos informe seu numero"
          />
          <input
            className={css.email}
            id="email"
            type="mail"
            placeholder="Nos informe seu email"
          />
          <label htmlFor="" className={css.checkBox}>
            {" "}
            <input type="checkbox" />
            Concordo em receber e-mails comerciais
          </label>
          <input className={`font-1-xs ${css.btn}`} type="submit" value="Enviar" />
        </form>
      </div>
    </section>
  );
};

export default NewsLetters;
