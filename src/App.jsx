import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <>
         <Navbar />
          <Routes>
            <Route path="/" element={<Home count={count}/>} />
            <Route path="/about" element={<About count={count}/>} />
         
          </Routes> 
    </>
  )
}

export default App
