import React from "react";
import css from "./Banners.module.css";
import oboticario from "../../assets/boticario.jpg";
import eudora from "../../assets/eudora.jpg";
import oui from "../../assets/oui-paris.jpg";

const Banners = () => {
  return (
    <section className={`container ${css.gridContainer}`}>
      <a href="" className={css.oboticario}>
        <img src={oboticario} alt="" />
      </a>
      <a href="" className={css.eudora}>
        <img src={eudora} alt="Banner Eudora" />
      </a>
      <a href="" className={css.oui}>
        <img src={oui} alt="Banner OUI Paris" />
      </a>
    </section>
  );
};

export default Banners;
