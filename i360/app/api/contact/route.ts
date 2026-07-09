import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      )
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL || "contact@n360agency.com"
    const contactFromEmail =
      process.env.RESEND_CONTACT_FROM_EMAIL || "contact@n360agency.com"
    const contactFromName =
      process.env.RESEND_CONTACT_FROM_NAME || "N360 Agency Contact"
    const apiKey = process.env.RESEND_API_KEY

    // Simulation de développement si la clé API n'est pas configurée
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn("⚠️ Resend API Key is missing or placeholder. Logging email submission instead:")
      console.log({
        to: notificationEmail,
        subject: `[Contact n360] ${subject}`,
        data: { name, email, phone, subject, message }
      })

      return NextResponse.json({
        success: true,
        message: "Simulation d'envoi réussie (clé API Resend manquante ou par défaut).",
        debug: true
      })
    }

    const resend = new Resend(apiKey)

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
        <h2 style="color: #1fa882; margin-top: 0;">Nouveau message de contact - n360 Agency</h2>
        <p><strong>Nom complet :</strong> ${name}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap; background-color: #f7fafc; padding: 15px; border-radius: 8px; color: #4a5568; line-height: 1.6;">${message}</p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: `${contactFromName} <${contactFromEmail}>`,
      to: [notificationEmail],
      replyTo: email,
      subject: `[Contact n360] ${subject}`,
      html: htmlContent,
    })

    if (error) {
      console.error("Erreur Resend :", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error("Erreur serveur :", err)
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    )
  }
}

