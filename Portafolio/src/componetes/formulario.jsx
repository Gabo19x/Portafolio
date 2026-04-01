import "../styles/formulario/styleForm.css"

export default function Formulario() {
    
    return (
        <section className="Formulario" id="SeccionCorreo">
            <h3># <span>Envíame un correo ¿No?</span> -----</h3>

            <section className="Formulario_contenido">
                <div className="Formulario_contenido_texto">
                    <p>¿Tienes algo que decirme?</p>
                    <p>
                        Un proyecto en mente. Enviar unas felicitaciones. ¿Un insulto?
                        Contáctame por mis redes o envíame un correo.
                    </p>
                </div>

                <div className="Formulario_contenido_correo">
                    <form action="">
                        <label htmlFor="correo">Correo</label>
                        <input type="email" id="correo" placeholder="ejemplo@correo.com"/>

                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" placeholder="Escribe tu mensaje aquí..."></textarea>

                        <button className="BotonPrincipal" type="submit" onClick={(e) => {
                            e.preventDefault()
                            alert("Prueba de envio")
                        }}>Enviar</button>
                    </form>
                </div>
            </section>

        </section>
    );
}