import { useState } from 'react'

import Menu from "./componetes/Menu"
import Header from "./componetes/Header"
import SobreMi from './componetes/Sobre'
import Skills from "./componetes/skills"
import Proyectos from "./componetes/Proyectos"
import Formulario from './componetes/formulario'
import Footer from './componetes/Footer'

function App() {
  

  return (
    <>
      <Menu/>

      <Header/>

      <main>
        <SobreMi/>
        <Skills/>
        <Proyectos/>
        <Formulario/>
      </main>

      <Footer/>
    </>
  )
}

export default App
