import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import SwiperCustom from '../components/Swiper'
import Products from '../components/Products'
import Footer from '../components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SwiperCustom />
      <Products />
      <Footer />
    </>
  )
}

export default App
