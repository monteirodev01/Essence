import React from 'react'
import Header from './Componentes/Header/Header'
import Hero from './Componentes/Hero/Hero'
import BestSellers from './Componentes/BestSellers/BestSellers'
import FathersDay from './Componentes/FathersDay/FathersDay'
import Promocoes from './Componentes/Promocoes/Promocoes'
import Banners from './Componentes/Banners/Banners'
import NewsLetters from './Componentes/NewsLetters/NewsLetters'
import Footer from './Componentes/Footer/Footer'
import Copy from './Componentes/Footer/Copy'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellers />
      <FathersDay />
      <Promocoes />
      <Banners />
      <NewsLetters />
      <Footer />
      <Copy />
    </div>
  )
}

export default App