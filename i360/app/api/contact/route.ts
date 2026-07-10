import { Resend } from "resend"
import { NextResponse } from "next/server"

const CONTACT_EMAIL = "contact@n360agency.com"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      )
    }

    // Email interne à N360 (notification)
    await resend.emails.send({
      from: "N360 Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nouveau message — ${subject} (${name})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #1fa882; border-bottom: 2px solid #1fa882; padding-bottom: 8px;">
            Nouveau message de contact
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Nom</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Téléphone</strong></td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Sujet</strong></td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>

          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <strong>Message :</strong>
            <p style="margin: 8px 0 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>

          <p style="color: #888; font-size: 12px; margin-top: 32px;">
            Message reçu via le formulaire de contact de n360agency.com
          </p>
        </div>
      `,
    })

    // Email de confirmation au visiteur
    await resend.emails.send({
      from: "N360 Agency <contact@n360agency.com>",
      to: email,
      subject: "Votre message a bien été reçu",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #1fa882;">Merci, ${name} !</h2>
          <p>Nous avons bien reçu votre message concernant : <strong>${subject}</strong>.</p>
          <p>Notre équipe vous répondra <strong>dans les meilleurs délais</strong> (sous 4h pour les urgences, sous 24h pour les demandes standard).</p>

          <p style="margin-top: 24px;">Pour toute urgence, vous pouvez aussi nous joindre directement :</p>
          <ul>
            <li>WhatsApp : <a href="https://wa.me/221776872222">+221 77 687 22 22</a></li>
          </ul>

          <p style="color: #888; font-size: 12px; margin-top: 32px;">
            N360 Agency — Dakar Plateau, Sénégal
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur API contact:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
