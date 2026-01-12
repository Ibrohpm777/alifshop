import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import SwiperCustom from '../components/Swiper'
import Chegirma from '../components/Chegirma'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SwiperCustom />
      <Chegirma />
    </>
  )
}

export default App
