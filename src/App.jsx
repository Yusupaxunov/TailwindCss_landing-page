import React from 'react'
import Analyticts from './componenst/analyticts'
import Cards from './componenst/cards'
import Footer from './componenst/footer'
import Hero from './componenst/hero'
import Navbar from './componenst/navbar'
import Newsletter from './componenst/newsletter'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analyticts />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;