import React from "react";
import css from "./Promocoes.module.css";
import Titulo from "../Titulo/Titulo";
import { products } from "../../data/products";
import CustomSelect from "../CustomSelect/CustomSelect";
import addToCar from "../../assets/icons/add-shopping-cart.svg"

const Promocoes: React.FC = () => {
  const options = [
    { label: "Opção 1", value: "1" },
    { label: "Opção 2", value: "2" },
    { label: "Opção 3", value: "3" },
  ];

  return (
    <section className={`container ${css.gridContainer}`}>
      <Titulo titulo="Produtos em promoção" />

      <div className={css.filter}>
        <CustomSelect options={options} />
      </div>
      <ul className={`${css.productContainer}`}>
        {products.map((product) => (
          <div className={css.produtoItem}>
            <a href="">
              <img src={product.img} alt={product.name} />
              <h3 className={`font-1-m-b ${css.itemTitulo}`}>{product.name}</h3>
          </a>
            <p className={`font-1-xs ${css.itemDescricao}`}>
              {product.descricao}
            </p>
            <span className={`font-1-s ${css.itemPreco}`}>
              R${product.preco} <span className={`font-1-xs ${css.itemDesconto}`}>-{product.desconto}%</span>
            </span>
            <button className={`font-1-xs ${css.itemBtn}`}><img className={css.btnIcon} src={addToCar} alt="" /> ADD TO CART</button>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Promocoes;
