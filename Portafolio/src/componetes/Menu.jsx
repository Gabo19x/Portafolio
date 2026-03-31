import Logo from "../assets/Logo.svg";
import "../styles/menu/styleMenu.css";

export default function Menu() {
    return(
        <nav>
            <img src={Logo} alt="Imagen logo en representacion del creador" />
            <button className="BotonMenu">Gabo19</button>
            <button className="BotonMenu">Skills</button>
            <button className="BotonMenu">Proyectos</button>
            <button className="BotonMenu">Contacto</button>
        </nav>
    );
}