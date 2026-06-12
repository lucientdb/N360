export type Service = {
  titre: string
  description: string
  points: string[]
}

export type Pole = {
  num: string
  slug: string
  name: string
  tagline: string
  description: string
  color: string
  bgColor: string
  image: string
  services: Service[]
  clients: string[]
  pourquoi: string
}

export const poles: Pole[] = [
  {
    num: "01",
    slug: "cyber-renseignement-osint",
    name: "Cyber-Renseignement & OSINT",
    tagline: "Voir avant d'être vu.",
    description:
      "Collecte et analyse de renseignements depuis des sources ouvertes pour anticiper les menaces, identifier les acteurs malveillants et protéger vos intérêts numériques.",
    color: "#0071E3",
    bgColor: "#EEF4FD",
    image: "/images/poles/osint.jpg",
    services: [
      {
        titre: "Investigations OSINT",
        description: "Collecte et analyse de données depuis des sources publiques.",
        points: [
          "Recherche sur des individus, entités ou organisations",
          "Cartographie des réseaux d'influence",
          "Analyse des traces numériques",
          "Identification de faux profils et comptes malveillants",
        ],
      },
      {
        titre: "Veille cyber & Threat Intelligence",
        description: "Surveillance proactive des menaces émergentes.",
        points: [
          "Monitoring du dark web et forums cybercriminels",
          "Détection précoce de fuites de données",
          "Analyse des groupes APT ciblant l'Afrique",
          "Rapports de threat intelligence mensuels",
        ],
      },
      {
        titre: "Due Diligence numérique",
        description: "Vérification approfondie avant tout partenariat ou recrutement stratégique.",
        points: [
          "Vérification de l'identité et des antécédents numériques",
          "Analyse de la réputation en ligne",
          "Détection de conflits d'intérêts",
          "Rapport confidentiel et actionnable",
        ],
      },
    ],
    clients: ["Banques & institutions financières", "Cabinets d'avocats", "Grandes entreprises", "Institutions publiques"],
    pourquoi:
      "Dans un contexte où les menaces numériques sont de plus en plus sophistiquées, anticiper vaut mieux que subir. Notre pôle OSINT vous donne les moyens de voir avant d'être vu.",
  },
  {
    num: "02",
    slug: "social-listening-e-reputation",
    name: "Social Listening & E-Réputation",
    tagline: "Maîtriser ce que le web dit de vous.",
    description:
      "Surveillance en temps réel de votre image sur le web et les réseaux sociaux. Détection des crises, analyse des sentiments, gestion proactive de votre réputation digitale.",
    color: "#6E44FF",
    bgColor: "#F0EBFF",
    image: "/images/poles/reputation.jpg",
    services: [
      {
        titre: "Veille réputation 24/7",
        description: "Monitoring continu de vos mentions sur l'ensemble du web.",
        points: [
          "Surveillance des réseaux sociaux, forums et médias",
          "Alertes en temps réel en cas de mention négative",
          "Analyse des sentiments (positif, négatif, neutre)",
          "Tableau de bord de réputation personnalisé",
        ],
      },
      {
        titre: "Gestion de crise e-réputation",
        description: "Intervention rapide pour contenir et inverser une crise digitale.",
        points: [
          "Cellule de crise activable en moins de 2 heures",
          "Stratégie de communication de crise",
          "Coordination avec les médias et influenceurs",
          "Rapport post-crise et recommandations",
        ],
      },
      {
        titre: "Optimisation de présence digitale",
        description: "Amélioration de votre image en ligne sur le long terme.",
        points: [
          "Stratégie de contenu pour valoriser votre image",
          "Déréférencement de contenus négatifs",
          "Construction d'une présence positive durable",
          "Reporting mensuel de performance",
        ],
      },
    ],
    clients: ["Personnalités publiques", "Entreprises du CAC 40 local", "Marques premium", "Institutions"],
    pourquoi:
      "Une crise e-réputation peut détruire des années de construction de marque en 48 heures. Notre pôle vous protège et vous arme pour réagir avec précision.",
  },
  {
    num: "03",
    slug: "viralisation-reseaux-sociaux",
    name: "Viralisation & Réseaux Sociaux",
    tagline: "Amplifier votre impact digital.",
    description:
      "Stratégies de croissance organique et virale pour maximiser votre reach sur les réseaux sociaux. Création de contenus, community management et campagnes d'influence.",
    color: "#FF6B35",
    bgColor: "#FFF0EB",
    image: "/images/poles/viral.jpg",
    services: [
      {
        titre: "Stratégie social media",
        description: "Définition et déploiement d'une stratégie réseaux sociaux sur mesure.",
        points: [
          "Audit de votre présence sociale actuelle",
          "Définition de la ligne éditoriale",
          "Calendrier éditorial mensuel",
          "Formation des équipes internes",
        ],
      },
      {
        titre: "Production de contenus viraux",
        description: "Création de contenus conçus pour générer de l'engagement et du partage.",
        points: [
          "Reels, TikToks et contenus courts haute qualité",
          "Infographies et carrousels engageants",
          "Threads et contenus textuels à fort impact",
          "A/B testing des formats",
        ],
      },
      {
        titre: "Campagnes d'influence & Growth",
        description: "Activation de leviers d'influence pour une croissance rapide.",
        points: [
          "Identification et activation d'influenceurs locaux",
          "Campagnes hashtag et challenges",
          "Publicité sociale ciblée (Meta Ads, TikTok Ads)",
          "Analyse des performances et optimisation",
        ],
      },
    ],
    clients: ["Startups & scale-ups", "Marques FMCG", "Artistes & créateurs", "E-commerce"],
    pourquoi:
      "En Afrique de l'Ouest, les réseaux sociaux sont le premier point de contact entre une marque et ses clients. Être viral n'est plus une option, c'est une nécessité.",
  },
  {
    num: "04",
    slug: "gestion-image-personnalites",
    name: "Gestion d'Image & Personnalités",
    tagline: "Votre image, notre priorité absolue.",
    description:
      "Personal branding et gestion de réputation pour dirigeants, personnalités politiques, artistes et célébrités. Une approche discrète, stratégique et sur mesure.",
    color: "#C8972A",
    bgColor: "#FDF6E3",
    image: "/images/poles/image.jpg",
    services: [
      {
        titre: "Personal Branding",
        description: "Construction d'une image publique forte et cohérente.",
        points: [
          "Audit de votre image actuelle",
          "Définition de votre positionnement unique",
          "Stratégie de visibilité multi-canal",
          "Coaching média et prise de parole",
        ],
      },
      {
        titre: "Communication de personnalité",
        description: "Gestion quotidienne de votre communication publique.",
        points: [
          "Rédaction de discours et prises de position",
          "Gestion des interviews et relations presse",
          "Modération et animation de vos réseaux",
          "Veille médiatique quotidienne",
        ],
      },
      {
        titre: "Protection & gestion de crise",
        description: "Protection proactive et réactive de votre image.",
        points: [
          "Surveillance des menaces à votre réputation",
          "Plan de crise personnalisé",
          "Coordination juridique si nécessaire",
          "Stratégie de contre-communication",
        ],
      },
    ],
    clients: ["Dirigeants d'entreprise", "Personnalités politiques", "Artistes & sportifs", "Célébrités"],
    pourquoi:
      "Votre image est votre actif le plus précieux. Nous la protégeons, la construisons et l'amplifions avec la discrétion absolue que vous méritez.",
  },
  {
    num: "05",
    slug: "production-audiovisuelle",
    name: "Production Audiovisuelle",
    tagline: "Des contenus qui marquent les esprits.",
    description:
      "Création de contenus vidéo, podcasts et supports visuels à fort impact. De la conception à la diffusion, nous produisons des contenus qui convertissent.",
    color: "#E03B3B",
    bgColor: "#FDE8E8",
    image: "/images/poles/audiovisuel.jpg",
    services: [
      {
        titre: "Production vidéo",
        description: "Tournage et montage professionnel pour tous vos besoins.",
        points: [
          "Films institutionnels et corporate",
          "Spots publicitaires TV et digitaux",
          "Reportages et documentaires",
          "Captation d'événements (drone inclus)",
        ],
      },
      {
        titre: "Contenus digitaux & Social",
        description: "Formats optimisés pour les plateformes digitales.",
        points: [
          "Reels et TikToks professionnels",
          "Motion design et animations",
          "Interviews et témoignages clients",
          "Lives et streaming événementiel",
        ],
      },
      {
        titre: "Podcast & Audio",
        description: "Production audio professionnelle pour vos projets de podcast.",
        points: [
          "Enregistrement en studio ou en extérieur",
          "Montage, mixage et mastering",
          "Distribution sur toutes les plateformes",
          "Identité sonore et jingle",
        ],
      },
    ],
    clients: ["Entreprises & institutions", "Artistes & labels", "ONG & organisations internationales", "Agences"],
    pourquoi:
      "Le contenu vidéo représente plus de 80% du trafic internet mondial. Notre studio à Dakar produit des contenus au standard international pour un marché africain exigeant.",
  },
  {
    num: "06",
    slug: "cybersecurite-infrastructures",
    name: "Cybersécurité & Infrastructures",
    tagline: "Protéger ce qui compte vraiment.",
    description:
      "Audit, protection et sécurisation de vos systèmes informatiques. De l'audit SI au SOC 24/7, en passant par le pentest et l'investigation forensique.",
    color: "#2BAE6E",
    bgColor: "#E5F8EE",
    image: "/images/poles/cyber.jpg",
    services: [
      {
        titre: "Audit des Systèmes d'Information",
        description: "Évaluation complète de votre posture de sécurité.",
        points: [
          "Audit réseau : pare-feux, routeurs, VPN, segmentation",
          "Audit applicatif : OWASP Top 10, injections SQL, XSS",
          "Audit organisationnel : politiques et procédures",
          "Tests d'ingénierie sociale et phishing",
        ],
      },
      {
        titre: "Tests d'Intrusion (Pentest)",
        description: "Simulation d'attaques réelles pour identifier vos vulnérabilités.",
        points: [
          "Pentest réseau interne et externe",
          "Pentest applicatif web et mobile",
          "Red Team exercises pour grandes organisations",
          "Rapport technique + plan de remédiation priorisé",
        ],
      },
      {
        titre: "SOC & Surveillance 24/7",
        description: "Centre de surveillance et réponse aux incidents de sécurité.",
        points: [
          "SOC externalisé (SOCaaS) pour PME et ETI",
          "SOC hybride pour entreprises avec équipe IT",
          "SOC interne clé en main pour grandes structures",
          "SLA garanti, alertes en temps réel",
        ],
      },
      {
        titre: "Investigation Forensique",
        description: "Analyse post-incident avec valeur probatoire légale.",
        points: [
          "Analyse de disques durs et systèmes compromis",
          "Récupération de données effacées ou chiffrées",
          "Analyse des journaux d'événements",
          "Rapport d'investigation à valeur juridique",
        ],
      },
    ],
    clients: ["Banques & fintech", "Télécoms", "Institutions publiques", "Grandes entreprises"],
    pourquoi:
      "73% des entreprises africaines n'ont aucun plan de réponse aux incidents cyber. Nous changeons cette réalité, une organisation à la fois.",
  },
  {
    num: "07",
    slug: "developpement-ingenierie-it",
    name: "Développement & Ingénierie IT",
    tagline: "Des solutions qui performent.",
    description:
      "Conception et développement d'applications web, mobiles et solutions sur mesure. Du cahier des charges au déploiement, nous construisons des produits qui durent.",
    color: "#1A8FE3",
    bgColor: "#E8F3FE",
    image: "/images/poles/dev.jpg",
    services: [
      {
        titre: "Développement web & mobile",
        description: "Applications web et mobiles modernes et performantes.",
        points: [
          "Sites vitrines et plateformes e-commerce",
          "Applications web sur mesure (SaaS, ERP, CRM)",
          "Applications mobiles iOS et Android",
          "PWA et solutions hybrides",
        ],
      },
      {
        titre: "Infrastructure & Réseaux",
        description: "Conception et déploiement d'infrastructures IT robustes.",
        points: [
          "Câblage réseau structuré (Cat6, fibre)",
          "Déploiement serveurs et NAS",
          "Solutions cloud (AWS, Azure, GCP)",
          "VPN, firewall et sécurisation réseau",
        ],
      },
      {
        titre: "Intégration & AMOA",
        description: "Accompagnement dans vos projets de transformation IT.",
        points: [
          "Intégration ERP et progiciels métier",
          "AMOA et conduite du changement",
          "Formation et transfert de compétences",
          "Maintenance et support technique",
        ],
      },
    ],
    clients: ["PME & startups", "Institutions financières", "Groupes industriels", "ONG"],
    pourquoi:
      "Une infrastructure IT solide est le socle de toute entreprise moderne. Nous la construisons avec les standards internationaux et l'ancrage africain qui fait la différence.",
  },
  {
    num: "08",
    slug: "transformation-digitale-conseil",
    name: "Transformation Digitale & Conseil",
    tagline: "Penser demain, agir aujourd'hui.",
    description:
      "Accompagnement stratégique pour digitaliser et moderniser votre organisation. De l'audit digital au déploiement des solutions, nous vous guidons à chaque étape.",
    color: "#7B61FF",
    bgColor: "#EEEAFE",
    image: "/images/poles/digital.jpg",
    services: [
      {
        titre: "Audit & stratégie digitale",
        description: "Évaluation de votre maturité digitale et définition d'une feuille de route.",
        points: [
          "Audit de maturité digitale (360°)",
          "Benchmark concurrentiel",
          "Définition de la roadmap digitale",
          "Business case et ROI projeté",
        ],
      },
      {
        titre: "Conduite du changement",
        description: "Accompagnement humain de votre transformation digitale.",
        points: [
          "Diagnostic organisationnel et culturel",
          "Plan de communication interne",
          "Formation des collaborateurs",
          "Suivi et mesure de l'adoption",
        ],
      },
      {
        titre: "Formation & Conseil",
        description: "Programmes de formation sur mesure pour vos équipes.",
        points: [
          "Formations cybersécurité tous niveaux",
          "Formations marketing digital et réseaux sociaux",
          "Séminaires et ateliers sur mesure",
          "E-learning et modules distanciels",
        ],
      },
    ],
    clients: ["Grands groupes", "Institutions publiques", "ONG internationales", "ETI en croissance"],
    pourquoi:
      "La transformation digitale n'est pas qu'un projet IT — c'est un changement culturel. Nous vous accompagnons sur les deux dimensions pour garantir le succès.",
  },
]

export function getPoleBySlug(slug: string): Pole | undefined {
  return poles.find((p) => p.slug === slug)
}