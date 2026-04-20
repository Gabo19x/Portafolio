import Logo from "../assets/Logo.svg";
import "../styles/menu/styleMenu.css";

export default function Menu() {
    return(
        <nav>
            <img src={Logo} alt="Imagen logo en representacion del creador" />
            <a href="#SeccionPrese" className="BotonMenu">Gabo19</a>
            <a href="#SeccionSkills" className="BotonMenu">Skills</a>
            <a href="#SeccionProyectos" className="BotonMenu">Proyectos</a>
            <a href="#SeccionCorreo" className="BotonMenu">Contacto</a>
        </nav>
    );
}