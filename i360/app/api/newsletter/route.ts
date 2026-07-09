import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Veuillez fournir une adresse email valide." },
        { status: 400 }
      )
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL || "contact@n360agency.com"
    const newsletterFromEmail =
      process.env.RESEND_NEWSLETTER_FROM_EMAIL ||
      "newsletters@n360agency.com"
    const newsletterFromName =
      process.env.RESEND_NEWSLETTER_FROM_NAME || "N360 Newsletter"
    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    // Simulation de développement si la clé API n'est pas configurée
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn("⚠️ Resend API Key is missing or placeholder. Logging newsletter subscription instead:")
      console.log({
        subscriberEmail: email,
        notificationTarget: notificationEmail,
        audienceId: audienceId || "Non configurée"
      })

      return NextResponse.json({
        success: true,
        message: "Simulation d'abonnement newsletter réussie.",
        debug: true
      })
    }

    const resend = new Resend(apiKey)
    let addedToAudience = false
    let errorAudience = null

    // Essayer d'ajouter le contact dans l'audience Resend si configuré
    if (audienceId) {
      try {
        const contactResult = await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: audienceId,
        })
        
        if (contactResult.error) {
          errorAudience = contactResult.error.message
          console.error("Erreur d'ajout de contact Resend :", contactResult.error)
        } else {
          addedToAudience = true
        }
      } catch (err) {
        errorAudience = err instanceof Error ? err.message : String(err)
        console.error("Exception lors de la création du contact :", err)
      }
    }

    // Toujours envoyer une notification email à l'équipe
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #1fa882; margin-top: 0; font-size: 20px;">Nouvelle inscription Newsletter - n360 Agency</h2>
        <p>Un nouvel abonné s'est inscrit depuis le site web :</p>
        <p style="background-color: #f7fafc; padding: 12px; border-radius: 8px; font-size: 16px; font-weight: bold; color: #1a202c; border: 1px solid #edf2f7;">
          Email : <a href="mailto:${email}">${email}</a>
        </p>
        <p style="font-size: 12px; color: #718096; margin-top: 20px;">
          Date : ${new Date().toLocaleString("fr-FR")}
        </p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="font-size: 12px; color: #a0aec0; font-style: italic;">
          Status Audience : ${
            audienceId 
              ? addedToAudience 
                ? "Ajouté avec succès dans l'audience Resend." 
                : `Erreur d'ajout à l'audience : ${errorAudience}`
              : "Aucune Audience ID configurée."
          }
        </p>
      </div>
    `

    const { error: emailError } = await resend.emails.send({
      from: `${newsletterFromName} <${newsletterFromEmail}>`,
      to: [notificationEmail],
      subject: `[Newsletter n360] Nouvel abonné : ${email}`,
      html: htmlContent,
    })

    if (emailError && !addedToAudience) {
      console.error("Erreur envoi email de notification :", emailError)
      return NextResponse.json({ error: emailError.message }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      addedToAudience,
      message: addedToAudience 
        ? "Inscription enregistrée et équipe notifiée." 
        : "Inscription reçue (équipe notifiée)."
    })
  } catch (err) {
    console.error("Erreur serveur newsletter :", err)
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    )
  }
}
