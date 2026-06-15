import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { poles, budget, delai, name, organisation, email, phone, description } = await req.json()

    // Validation des champs requis
    if (!poles || !Array.isArray(poles) || poles.length === 0 || !budget || !delai || !name || !email || !description) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires du formulaire." },
        { status: 400 }
      )
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL || "contact@n360agency.com"
    const apiKey = process.env.RESEND_API_KEY

    // Simulation de développement si la clé API n'est pas configurée
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn("⚠️ Resend API Key is missing or placeholder. Logging quote request instead:")
      console.log({
        to: notificationEmail,
        subject: `[Devis n360] Demande de ${name}`,
        data: { poles, budget, delai, name, organisation, email, phone, description }
      })

      return NextResponse.json({
        success: true,
        message: "Simulation de demande de devis réussie (clé API Resend manquante ou par défaut).",
        debug: true
      })
    }

    const resend = new Resend(apiKey)

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 650px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #0071E3; margin: 0; font-size: 24px;">Demande de Devis - n360 Agency</h2>
          <p style="color: #718096; font-size: 14px; margin-top: 5px;">Nouvelle demande de devis reçue depuis le site internet.</p>
        </div>
        
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

        <h3 style="color: #1a202c; border-left: 4px solid #0071E3; padding-left: 10px; margin-bottom: 15px; font-size: 16px;">Coordonnées du demandeur</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 25px;">
          <tr>
            <td style="padding: 6px 0; color: #718096; width: 150px;"><strong>Nom complet :</strong></td>
            <td style="padding: 6px 0; color: #1a202c;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #718096;"><strong>Organisation :</strong></td>
            <td style="padding: 6px 0; color: #1a202c;">${organisation || "Non spécifiée"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #718096;"><strong>Email :</strong></td>
            <td style="padding: 6px 0; color: #1a202c;"><a href="mailto:${email}" style="color: #0071E3; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #718096;"><strong>Téléphone :</strong></td>
            <td style="padding: 6px 0; color: #1a202c;">${phone || "Non renseigné"}</td>
          </tr>
        </table>

        <h3 style="color: #1a202c; border-left: 4px solid #0071E3; padding-left: 10px; margin-bottom: 15px; font-size: 16px;">Détails du besoin</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 25px;">
          <tr>
            <td style="padding: 6px 0; color: #718096; width: 150px; vertical-align: top;"><strong>Pôles d'intérêt :</strong></td>
            <td style="padding: 6px 0; color: #1a202c;">
              <ul style="margin: 0; padding-left: 20px;">
                ${poles.map((p: string) => `<li>${p}</li>`).join("")}
              </ul>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #718096;"><strong>Budget estimé :</strong></td>
            <td style="padding: 6px 0; color: #1a202c; font-weight: bold;">${budget}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #718096;"><strong>Délai souhaité :</strong></td>
            <td style="padding: 6px 0; color: #1a202c;">${delai}</td>
          </tr>
        </table>

        <h3 style="color: #1a202c; border-left: 4px solid #0071E3; padding-left: 10px; margin-bottom: 15px; font-size: 16px;">Description du projet</h3>
        <div style="background-color: #f7fafc; padding: 20px; border-radius: 12px; border: 1px solid #edf2f7; font-size: 14px; color: #4a5568; line-height: 1.6; white-space: pre-wrap;">${description}</div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: "n360 Agency Devis <onboarding@resend.dev>",
      to: [notificationEmail],
      replyTo: email,
      subject: `[Devis n360] Demande de ${name}`,
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
