import { Resend } from "resend"
import { NextResponse } from "next/server"

const CONTACT_EMAIL = "contact@n360agency.com"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { poles, budget, delai, name, organisation, email, phone, description } = body

    if (!name || !email || !description || !poles?.length) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      )
    }

    // Email interne à N360 (notification)
    await resend.emails.send({
      from: "N360 Devis <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name}${organisation ? ` (${organisation})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #1fa882; border-bottom: 2px solid #1fa882; padding-bottom: 8px;">
            Nouvelle demande de devis
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Nom</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            ${organisation ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Organisation</strong></td>
              <td style="padding: 8px 0;">${organisation}</td>
            </tr>` : ""}
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
              <td style="padding: 8px 0; color: #666;"><strong>Pôles</strong></td>
              <td style="padding: 8px 0;">${poles.join(", ")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Budget</strong></td>
              <td style="padding: 8px 0;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Délai</strong></td>
              <td style="padding: 8px 0;">${delai}</td>
            </tr>
          </table>

          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <strong>Description du projet :</strong>
            <p style="margin: 8px 0 0; line-height: 1.6;">${description.replace(/\n/g, "<br>")}</p>
          </div>

          <p style="color: #888; font-size: 12px; margin-top: 32px;">
            Demande reçue via le formulaire de devis de n360agency.com
          </p>
        </div>
      `,
    })

    // Email de confirmation au client
    await resend.emails.send({
      from: "N360 Agency <contact@n360agency.com>",
      to: email,
      subject: "Votre demande de devis a bien été reçue",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #1fa882;">Merci, ${name} !</h2>
          <p>Nous avons bien reçu votre demande de devis et nos experts l'analysent dès maintenant.</p>
          <p>Vous recevrez une proposition personnalisée <strong>sous 24h</strong>.</p>

          <div style="background: #f0fdf9; border: 1px solid #1fa882; padding: 16px; border-radius: 8px; margin: 24px 0;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #1fa882;">Récapitulatif de votre demande</p>
            <p style="margin: 4px 0;"><strong>Pôles :</strong> ${poles.join(", ")}</p>
            <p style="margin: 4px 0;"><strong>Budget :</strong> ${budget}</p>
            <p style="margin: 4px 0;"><strong>Délai :</strong> ${delai}</p>
          </div>

          <p>Pour toute question urgente, contactez-nous directement :</p>
          <ul>
            <li>Email : <a href="mailto:contact@n360agency.com">contact@n360agency.com</a></li>
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
    console.error("Erreur API devis:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
