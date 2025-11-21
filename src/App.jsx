import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Heros from './components/Heros'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Heros />
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App