"use server";

export async function enviarMensaje(formData: FormData) {
  // Extraemos los datos del formulario
  const payload = {
    Nombre: formData.get("nombre"),
    Email: formData.get("email"),
    Telefono: formData.get("telefono"),
    Proyecto: formData.get("proyecto"),
  };

  try {
    // Enviamos la petición POST a la API de Strapi
    const res = await fetch("http://localhost:1337/api/mensajes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Strapi requiere que los datos vayan dentro de un objeto "data"
      body: JSON.stringify({ data: payload }), 
    });

    if (!res.ok) {
      throw new Error("Fallo al guardar el mensaje en Strapi");
    }

    // Nota: Más adelante, aquí mismo añadiremos el código para enviar 
    // el email con Resend/Nodemailer consultando la Variable Global.

    return { success: true };
  } catch (error) {
    console.error("Error en enviarMensaje:", error);
    return { success: false, error: "Hubo un problema al enviar el mensaje." };
  }
}