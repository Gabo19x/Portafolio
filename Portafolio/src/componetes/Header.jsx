import Logo from "../assets/Logo.svg"
import "../styles/header/styleHeader.css"

export default function Header() {
    return(
        <header>
            <img src={Logo} alt="Logo en representacion del creador" />
            <p>Bienvenido a mi portafolio. Hola soy...</p>

            <h1>Gabriel Arturo Pinzón Páez</h1>
            <h2>Desarrollador web enfocado en el frontend</h2>
            <p>"Los grandes productos, son primero: útiles, luego usables, por ultimo bonitos" - Anónimo</p>

            <div className="Header_Botones">
                <button className="BotonRecurso"><a href="https://github.com/Gabo19x">Github</a></button>
                <button className="BotonRecurso"><a href="https://www.linkedin.com/in/gabriel-pinz%C3%B3n/">LinkedIn</a></button>
                <button className="BotonRecurso">Correo</button>
            </div>

            <button>Ver proyectos</button>
        </header>
    );
}