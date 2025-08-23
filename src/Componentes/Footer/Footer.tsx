import React from "react";
import css from "./Footer.module.css";
import paypal from '../../assets/icons/pagamentos/paypal.svg';
import mastercard from '../../assets/icons/pagamentos/mastercard.svg';
import visa from '../../assets/icons/pagamentos/visa.svg';
import pix from '../../assets/icons/pagamentos/pix.svg';
import boleto from '../../assets/icons/pagamentos/boleto.png';


const Footer = () => {
  return (
    <footer className={`${css.bg}`}>
      <section className={`container ${css.footer}`}>
        <div className={css.faqs}>
          <h3 className={`font-1-m-b`}>Dúvidas frequentes</h3>
          <ul className={`${css.faqLinks} font-1-xs`}>
            <li>
              <a href="#">Perguntas frequentes</a>
            </li>
            <li>
              <a href="#">Formas de pagamento</a>
            </li>
            <li>
              <a href="#">Frete e entrega</a>
            </li>
            <li>
              <a href="#">Trocas e devoluções</a>
            </li>
          </ul>
        </div>
        <div className={css.faqs}>
          <h3 className={`font-1-m-b`}>Marcas</h3>
          <ul className={`${css.faqLinks} font-1-xs`}>
            <li>
              <a href="#">Boticario</a>
            </li>
            <li>
              <a href="#">Eudora</a>
            </li>
            <li>
              <a href="#">O.U.I Paris</a>
            </li>
          </ul>
        </div>
        <div className={css.faqs}>
          <h3 className={`font-1-m-b`}>Institucional</h3>
          <ul className={`${css.faqLinks} font-1-xs`}>
            <li>
              <a href="#">Nossa história</a>
            </li>
            <li>
              <a href="#">Grupo Boticario</a>
            </li>
            <li>
              <a href="#">Fidelidade</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
          </ul>
        </div>

        <div className={`${css.faqs}`}>
          <h3 className={`font-1-m-b`}>Formas de pagamento</h3>
          <ul className={`${css.pagamento}`}>
            <li><img src={paypal} alt="" /></li>
            <li><img src={mastercard} alt="" /></li>
            <li><img src={visa} alt="" /></li>
            <li><img src={pix} alt="" /></li>
            <li><img src={boleto} alt="" /></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
