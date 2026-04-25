import "../styles/SobreMi/styleSobre.css"

export default function SobreMi() {
  return (
    <section className="SobreMi">
        <h3># <span>Sobre mi</span> ---</h3>

        <div className="Textos">
            <p>
              Estudio <span className="ResaltarAmarillo">ingeniería de sistemas</span> en la <span className="ResaltarAmarillo">UNAD</span> (universidad abierta y a distancia de colombia); 
              además tengo un titulo de <span className="ResaltarAmarillo">tecnólogo en analisis y desarrollo de sistemas de información del SENA</span> .
            </p>
            <br />

            <p>
              Y soy principalmente desarrollador <span className="ResaltarRojo">web frontend</span>, pero también conozco las <span className="ResaltarRojo">funciones serverless y uso BaaS</span> para apoyar el backend.
              Algo a destacar, es que tengo conocimientos de <span className="ResaltarRojo">diseño web y UI/UX</span>, esto para entender mejor el producto y a quién va dirigido.
              Además, conozco y uso <span className="ResaltarRojo">herramientas IA</span> para optimización de mi trabajo, como: claude, kilo code, y la creación de prompts...
            </p>
        </div>
        
    </section>
  );  
}

{/* 
<span className="ResaltarRojo"></span>
<span className="ResaltarAmarillo"></span> 
*/}