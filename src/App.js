import React from 'react'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Hexaslider from './components/Hexaslider'
import Boxslider from './components/Boxslider'
import Aicard from './components/Aicard'
import Tocken from './components/Tocken'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Hexaslider/>
      <Boxslider/>
      <Aicard/>
      <Tocken/>
      <Footer/>
    </>
  )
}

export default App