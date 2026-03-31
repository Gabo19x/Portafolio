import "../styles/skills/styleSkills.css"

export default function Skills() {
    return(
        <section className="Skills">
            <h3># <span>Conocimientos</span> -----</h3>

            <section className="Skills_Seccion">
                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <h3>// <span>Frontend</span></h3>
                    <p>
                        Manejo lenguajes de programación como: <span className="ResaltarRojo">HTML, SCSS, JS</span>.
                        También el framework de <span className="ResaltarRojo">REACT</span>.
                        Manejo buenas practicas de desarrollo y arquitectura como diseño MOBILE FIRST.
                        Trabajo por medio de <span className="ResaltarRojo">visual studio code</span>.
                    </p>
                </article>

                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>

                    <h3>// <span>Diseño</span></h3>
                    <p>
                        Manejo la plataforma de <span className="ResaltarAmarillo">FIGMA</span>, para crear mockups.
                        Tengo conocimientos en diseño web y experiencia <span className="ResaltarAmarillo">UI y UX</span>.
                        Todo esto para deselvolverme mejor para estar con el cliente y entender mejor sus necesidades.
                        </p>
                </article>

                <article>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
                    </svg>


                    <h3>// <span>Otros</span></h3>
                    <p>
                        Se consumir <span className="ResaltarRojo">APIs</span> y crear funciones backend para una mejor experiencia en las web.
                        Claramente, uso el sistema de repositorios de <span className="ResaltarRojo">github</span>.
                        Algo importante a destacar, es el uso profesional de <span className="ResaltarRojo">herramientas IA</span> para 
                        la productividad y depuración, como: claude, kilo code, etc...
                    </p>
                </article>
            </section>
        </section>
    );
}