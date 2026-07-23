"use server";

import nodemailer from "nodemailer";

export async function enviarMensaje(formData: FormData) {
  const payload = {
    Nombre: formData.get("nombre") as string,
    Email: formData.get("email") as string,
    Telefono: formData.get("telefono") as string,
    Proyecto: formData.get("proyecto") as string,
  };

  try {
    // 1. Guardar copia de seguridad en Strapi
    const strapiRes = await fetch("http://localhost:1337/api/mensajes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: payload }),
    });

    if (!strapiRes.ok) {
      console.error("Fallo al guardar el mensaje en la base de datos de Strapi");
    }

    // 2. Configurar el motor de envío de correos
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true para 465, false para 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Crear la plantilla del correo
    const mailOptions = {
      from: `"Videomaster Web" <${process.env.SMTP_USER}>`, 
      to: process.env.CONTACT_EMAIL, // El correo de tu cliente
      replyTo: payload.Email, // Para que al darle a "Responder" conteste al usuario
      subject: `Nuevo proyecto web de: ${payload.Nombre}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Nuevo contacto desde la web</h2>
          <p><strong>Nombre:</strong> ${payload.Nombre}</p>
          <p><strong>Email:</strong> ${payload.Email}</p>
          <p><strong>Teléfono:</strong> ${payload.Telefono || "No indicado"}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Detalles del proyecto:</h3>
          <p style="white-space: pre-wrap;">${payload.Proyecto}</p>
        </div>
      `,
    };

    // 4. Enviar el correo
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error en enviarMensaje:", error);
    return { success: false, error: "Hubo un problema al enviar el mensaje." };
  }
}