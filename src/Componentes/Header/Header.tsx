import { React, useState } from "react";
import css from "./Header.module.css";
import logo from "../../assets/icons/Essence.svg";
import searchIcon from "../../assets/icons/search.svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";
import account from "../../assets/icons/account.svg";
import menu from "../../assets/icons/menu-hamburguer.svg";
import close from "../../assets/icons/close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuIcon = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsMenuOpen((prev) => !prev);
  };
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
            <button>
              <img
                className={css.menu}
                src={isMenuOpen ? close : menu}
                width="32px"
                height="32px"
                alt=""
                onClick={toggleMenuIcon}
              />
            </button>
          </ul>
        </div>
        <div className={css.menuMobile}>
          <button>
            <img
              src={isMenuOpen ? close : menu}
              width="32px"
              height="32px"
              alt=""
              onClick={toggleMenuIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
