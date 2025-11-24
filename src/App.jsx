import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Heros from './components/Heros'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Heros />
      <Cocktails />
      <About />
      <Art />
    </main>
  )
}

export default App