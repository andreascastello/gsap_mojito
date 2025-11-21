import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Heros from './components/Heros'
import Cocktails from './components/Cocktails'
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Heros />
      <Cocktails />
    </main>
  )
}

export default App