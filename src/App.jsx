import { useState } from 'react'
import './App.css'
import Header from '../src/Component/Header'
import Slider from './Component/Slider'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App
