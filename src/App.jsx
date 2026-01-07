import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import SwiperCustom from '../components/Swiper'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <SwiperCustom />
    </>
  )
}

export default App
