# N360 Agency — Site web

Site vitrine Next.js de N360 Agency.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Resend (emails et newsletter)

## URLs

- Production : https://www.n360agency.com
- Email contact : contact@n360agency.com
- Email newsletter : newsletters@n360agency.com

## Installation locale

```bash
npm install
cp .env.example .env.local
npm run dev
```

Application locale : http://localhost:3000

## Variables d'environnement

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site |
| `SITE_URL` | URL publique (serveur) |
| `RESEND_API_KEY` | Clé API Resend |
| `RESEND_AUDIENCE_ID` | Audience newsletter Resend |
| `NOTIFICATION_EMAIL` | Email de réception interne |
| `RESEND_CONTACT_FROM_EMAIL` | Expéditeur formulaire contact |
| `RESEND_DEVIS_FROM_EMAIL` | Expéditeur formulaire devis |
| `RESEND_NEWSLETTER_FROM_EMAIL` | Expéditeur notifications newsletter |

## Commandes

```bash
npm run dev      # développement
npm run build    # build production
npm run start    # serveur production
npm run lint     # vérification ESLint
```

## Déploiement Hostinger

1. Créer une application Node.js (Node 20+).
2. Déployer le contenu du dossier `i360`.
3. Exécuter `npm install`, puis `npm run build`, puis `npm run start`.
4. Configurer les variables d'environnement dans hPanel.
5. Pointer le domaine `www.n360agency.com` vers l'application.
6. Configurer les enregistrements DNS Resend (SPF, DKIM, DMARC).

## Structure utile

```text
app/                 Pages et routes API
components/          Interface (layout, sections)
lib/                 Configuration site et données pôles
public/images/       Logos et visuels
```

## Routes API

- `POST /api/contact` — formulaire contact
- `POST /api/devis` — demande de devis
- `POST /api/newsletter` — inscription newsletter

## Vérifications post-déploiement

- Accueil et pages légales
- Formulaires contact, devis, newsletter
- `https://www.n360agency.com/sitemap.xml`
- Redirection `n360agency.com` vers `www.n360agency.com`
