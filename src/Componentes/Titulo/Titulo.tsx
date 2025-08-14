import React from 'react'
import css from "./Titulo.module.css";

type TituloProps = {
  titulo: string;
}

const Titulo = ({ titulo }: TituloProps) => <h1 className={`${css.titulo} font-2-xxl`}>{titulo}</h1>

export default Titulo