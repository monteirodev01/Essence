import React from "react";
import css from "./FathersDay.module.css";
import img from "../../assets/dia-dos-pais-banner.jpg";

const FathersDay = () => {
  return (
    <section className={css.container}>
      <a href="#">
        <img src={img} alt="" />
      </a>
    </section>
  );
};

export default FathersDay;
