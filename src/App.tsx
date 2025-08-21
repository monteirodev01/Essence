import React from 'react'
import Header from './Componentes/Header/Header'
import Hero from './Componentes/Hero/Hero'
import BestSellers from './Componentes/BestSellers/BestSellers'
import FathersDay from './Componentes/FathersDay/FathersDay'
import Promocoes from './Componentes/Promocoes/Promocoes'
import Banners from './Componentes/Banners/Banners'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellers />
      <FathersDay />
      <Promocoes />
      <Banners />
    </div>
  )
}

export default App