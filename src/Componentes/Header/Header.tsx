// import React from 'react'
import css from "./Header.module.css";
import logo from "../../assets/icons/Essence.svg";
import searchIcon from "../../assets/icons/search.svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";
import account from "../../assets/icons/account.svg";
import menu from "../../assets/icons/menu-hamburguer.svg";

const Header = () => {
  return (
    <div className={css.bg}>
      <div className={css.container}>
        <div className={css.logo}>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className={css.searchBox}>
          <input
            type="text"
            className={`font-2-xs`}
            placeholder="O que você procura?"
          />
          <img src={searchIcon} width="18px" height="18px" />
        </div>
        <div className={`${css.navContainer} font-2-l`}>
          <ul className={css.navItens}>
            <li>
              <a href="">Perfumaria</a>
            </li>
            <li>
              <a href="">Cosméticos</a>
            </li>
            <li>
              <a href="">Promoções</a>
            </li>
            <li>
              <a href="">Lançamentos</a>
            </li>
          </ul>
        </div>
        <div className={css.iconsContainer}>
          <ul className={css.navIcons}>
            <a href="">
              <img src={shoppingBag} width="32px" height="32px" alt="" />
            </a>
            <a href="">
              <img src={account} width="32px" height="32px" alt="" />
            </a>
            <a href="">
              <img src={menu} width="32px" height="32px" alt="" />
            </a>
          </ul>
        </div>
        <div className={css.menuMobile}>
          <a href="">
            <img src={menu} width="32px" height="32px" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
