import React from 'react'
import Header from './Componentes/Header/Header'
import Hero from './Componentes/Hero/Hero'
import BestSellers from './Componentes/BestSellers/BestSellers'
import FathersDay from './Componentes/FathersDay/FathersDay'
import Promocoes from './Componentes/Promocoes/Promocoes'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellers />
      <FathersDay />
      <Promocoes />
    </div>
  )
}

export default App