import React from "react";
import css from "./Copy.module.css";
import logo from "../../assets/icons/Essence.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";

const Copy = () => {
  return (
    <div className={`container ${css.copy}`}>
      <div className={css.leftSide}>
        <a href="">
          <img src={logo} alt="Essence Logo" />
        </a>
        <ul className={css.copyIcons}>
          <li>
            <a href="">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <p className="font-1-s">Essence Inc. Todos os direitos reservados.</p>
    </div>
  );
};

export default Copy;
