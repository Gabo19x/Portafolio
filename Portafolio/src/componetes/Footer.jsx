import "../styles/footer/styleFooter.css"

export default function Footer() {
    const fecha = new Date();

    return(
        <footer>
            <p>&copy; {fecha.getFullYear()}/ Todos los derechos reservados.</p>
            <p>Por: <span>Gabo19</span></p>
        </footer>
    );
}