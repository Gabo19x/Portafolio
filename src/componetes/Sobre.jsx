import "../styles/SobreMi/styleSobre.css"

export default function SobreMi() {
  return (
    <section className="SobreMi">
        <h3># <span>Sobre mi</span> ---</h3>

        <div className="Textos">
            <p>
              Soy desarrollador <span className="ResaltarAmarillo">web frontend con enfoque en React</span>, diseño UI/UX y experiencia construyendo productos reales. 
              Me especializo en crear interfaces funcionales, bien diseñadas y pensadas para el usuario, combinando código y criterio de diseño en cada proyecto.
              Ademas, conozco la herramienta BaaS de <span className="ResaltarAmarillo">SUPABASE</span> para crear aplicaciones robustas y completas.
            </p>
            <br />
            <p>
              <span className="ResaltarRojo">Lo que me diferencia es que no solo desarrollo:</span> diseño primero en Figma, entiendo al usuario y al cliente, y luego construyo. 
              Esto me permite trabajar de forma más autónoma y comunicarme mejor con equipos de diseño o con clientes directos. 
              Además, integro herramientas de IA como Claude y Kilo Code en mi flujo de trabajo para ser más eficiente y entregar mejor código.
            </p>
            <br />
            <p>
              Cuento con título de <span className="ResaltarAmarillo">Tecnólogo en Análisis y Desarrollo de Sistemas del SENA </span>  
              y actualmente curso <span className="ResaltarAmarillo">Ingeniería de Sistemas en la UNAD</span> (universidad nacional abierta y a distancia), Colombia.
            </p>
        </div>
        
    </section>
  );  
}

{/* 
<span className="ResaltarRojo"></span>
<span className="ResaltarAmarillo"></span> 
*/}