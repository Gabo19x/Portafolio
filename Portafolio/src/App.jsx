import { useState } from 'react'

import Menu from "./componetes/Menu"
import Header from "./componetes/Header"
import Skills from "./componetes/skills"
import Proyectos from "./componetes/Proyectos"
import Formulario from './componetes/formulario'

function App() {
  

  return (
    <>
      <Menu/>

      <Header/>

      <main>
        <Skills/>
        <Proyectos/>
        <Formulario/>
      </main>


      // Footer
    </>
  )
}

export default App
