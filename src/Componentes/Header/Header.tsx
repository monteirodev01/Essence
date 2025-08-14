import { React, useState } from "react";
import css from "./Header.module.css";
import logo from "../../assets/icons/Essence.svg";
import searchIcon from "../../assets/icons/search.svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";
import account from "../../assets/icons/account.svg";
import menu from "../../assets/icons/menu-hamburguer.svg";
import close from "../../assets/icons/close.svg";

const Header = () => {
  return (
    // Header background
    <header className={css.bg}>
      {/* Container */}
      <div className={css.container}>
        {/* Logo */}
        <a href="#" className={css.logo}>
          <img src={logo} alt="Essence Logo" />
        </a>

        {/* Search bar */}
        <div className={css.searchBar}>
          <input type="text" className="font-1-xs" placeholder="Search for products..." />
          <button>
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className={`${css.navLinks} font-1-m`}>
          <ul className={css.linksItems}>
            <li>
              <a href="">PERFUMARIA</a>
              <div className={css.dropDownLinks}>
                <ul className={css.dropDownItems}>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">COSMÉTICOS</a>
              <div className={css.dropDownLinks}>
                <ul>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">PROMOÇÕES</a>
              <div className={css.dropDownLinks}>
                <ul>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">LANÇAMENTOS</a>
              <div className={css.dropDownLinks}>
                <ul>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                  <li>
                    <a href="">SEU LINK AQUI</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* Navigation icons */}
        <nav className={css.navIcons}>
          <ul className={css.iconsItems}>
            <li className={`${css.shoppingBag} ${css.iconItem}`}>
              <a href="">
                <img src={shoppingBag} alt="" />
              </a>
            </li>
            <li className={`${css.account} ${css.iconItem}`}>
              <a href="">
                <img src={account} alt="" />
              </a>
            </li>
            <li className={`${css.menu} ${css.iconItem}`}>
              <a href="">
                <img src={menu} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
