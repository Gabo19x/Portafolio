import {useState} from "react"

import "../styles/formulario/styleForm.css"

export default function Formulario() {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [estado, setEstado] = useState(null)

    async function Enviar(e) {
        e.preventDefault()
        setEstado("ENVIANDO")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({nombre, correo, mensaje})
            })

            const data = await res.json()

            if(res.ok) {
                setEstado("OK")
                setNombre("")
                setCorreo("")
                setMensaje("")
            } else {
                console.log("ERROR, algo salio mal")
                setEstado("ERROR")
            }
        } catch (error) {
            console.log("ERROR, no se envio el correo: ", error)
            setEstado("ERROR")
        }
    
    }

    function MensajeCorreo() {
        if(estado === "OK") {
            return <p>✅ Mensaje enviado correctamente</p>
        }
        else if(estado === "ERROR") {
            return <p>❌ Error al enviar</p>
        }
        else {
            return <p>( -_-) (-_- )</p>
        }
    }

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
                    <form onSubmit={Enviar}>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            placeholder="Tú nombre" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />

                        <label htmlFor="correo">Correo</label>
                        <input 
                            type="email" 
                            id="correo" 
                            placeholder="ejemplo@correo.com" 
                            value={correo} 
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />

                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea 
                            name="mensaje" 
                            id="mensaje" 
                            placeholder="Escribe tu mensaje aquí..." 
                            value={mensaje} 
                            onChange={(e) => setMensaje(e.target.value)}>

                        </textarea>

                        <button 
                            className="BotonPrincipal" 
                            type="submit" 
                            disabled={estado === "ENVIANDO"}
                        >
                            {estado === "ENVIANDO" ? "Procesando..." : "Enviar"}
                        </button>
                        
                        { MensajeCorreo()}
                    </form>
                </div> 
            </section> 

        </section>
    );
}