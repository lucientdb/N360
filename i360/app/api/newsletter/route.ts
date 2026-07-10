import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const CONTACT_EMAIL = "contact@n360agency.com"

// Remplace par ton Audience ID Resend (créé dans ton dashboard Resend > Audiences)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? ""

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      )
    }

    // Ajouter le contact à l'audience Resend (si AUDIENCE_ID configuré)
    if (AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      })
    }

    // Email de confirmation à l'abonné
    await resend.emails.send({
      from: "N360 Agency <contact@n360agency.com>",
      to: email,
      subject: "Bienvenue dans la newsletter N360 Agency",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #1fa882;">Bienvenue !</h2>
          <p>Vous êtes maintenant abonné à la newsletter de <strong>N360 Agency</strong>.</p>
          <p>Vous recevrez nos analyses et insights sur la <strong>cybersécurité</strong>, le <strong>digital</strong> et le <strong>renseignement</strong> en Afrique.</p>

          <p style="margin-top: 24px; color: #666; font-size: 13px;">
            Pour vous désabonner à tout moment, répondez simplement à cet email avec "désabonnement".
          </p>

          <p style="color: #888; font-size: 12px; margin-top: 32px;">
            N360 Agency — Dakar Plateau, Sénégal<br>
            Emails envoyés depuis newsletters.n360agency.com
          </p>
        </div>
      `,
    })

    // Notification interne
    await resend.emails.send({
      from: "N360 Newsletter <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `Nouvel abonné newsletter — ${email}`,
      html: `
        <div style="font-family: sans-serif; color: #1a1a1a;">
          <p>Nouvel abonnement newsletter :</p>
          <p><strong>${email}</strong></p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur API newsletter:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
