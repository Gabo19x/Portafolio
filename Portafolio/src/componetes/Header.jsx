import Logo from "../assets/Logo.svg"
import "../styles/header/styleHeader.css"

export default function Header() {
    return(
        <header>
            <section className="Header_SeccionPresentacion" id="SeccionPrese">
                <p>Bienvenido a mi portafolio. Hola soy...</p>

                <h1>Gabriel Arturo Pinzón Páez</h1>
                <h2>Desarrollador web, enfocado en el frontend</h2>
                <p>"Los grandes productos, son primero: útiles, luego usables, por ultimo bonitos" - Anónimo</p>

                <div className="Header_Botones">
                    <a className="BotonRecurso" href="https://github.com/Gabo19x">Github</a>
                    <a className="BotonRecurso" href="https://www.linkedin.com/in/gabriel-pinz%C3%B3n/">LinkedIn</a>
                    <a href="#SeccionCorreo" className="BotonRecurso">Correo</a>
                </div>

                <a className="BotonPrincipal" href="#SeccionProyectos">Ver proyectos</a>
            </section>

            <section className="Header_SeccionImagen">
                <img src={Logo} alt="Logo en representacion del creador" />
            </section>
            
        </header>
    );
}