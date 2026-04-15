import { Resend } from 'resend';

export default async function handler(req, res) {
    const resend = new Resend(process.env.API_RESEND);
    console.log("API KEY:", process.env.API_RESEND);

    if (req.method !== "POST") {
        return res.status(405).json({ error: "No es POST" });
    }

    const { correo, mensaje } = req.body;

    if (!correo || !mensaje) {
        return res.status(400).json({ error: "Faltan campos" });
    }

    try {
        await resend.emails.send({ 
            from: 'onboarding@resend.dev',
            to: 'arturopinzon19@gmail.com',
            subject: 'MENSAJE AUTO | Mi portafolio',
            html: `
                <h2>Nuevo mensaje de contacto</h2>
                <p><strong>De:</strong> ${correo}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p>
            `,
        });

        return res.status(200).json({ message: "Mensaje enviado!" });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "No se pudo enviar el correo" }); 
    }
}