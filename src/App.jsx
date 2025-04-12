import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Heading from "./major components/heading"
import About from "./major components/about"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Heading />
      <About />
    </main>
  )
}

export default App
