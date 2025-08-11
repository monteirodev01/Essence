import React from 'react'

type TituloProps = {
  titulo: string;
}

const Titulo = ({ titulo }: TituloProps) => <h1>{titulo}</h1>

export default Titulo