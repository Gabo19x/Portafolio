import { useState } from 'react'

import Menu from "./componetes/Menu"
import Header from "./componetes/Header"
import Skills from "./componetes/skills"
import Proyectos from "./componetes/Proyectos"

function App() {
  

  return (
    <>
      <Menu/>

      <Header/>

      <main>
        <Skills/>
        <Proyectos/>
      </main>

      // Seccion de correo

      // Footer
    </>
  )
}

export default App
