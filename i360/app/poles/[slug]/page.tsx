import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PoleClient from "@/components/sections/PoleClient"

export type Service = {
  titre: string
  description: string
  points: string[]
}

export type Certification = {
  nom: string
  perimetre: string
  statut: string
}

export type TechStack = {
  categorie: string
  outils: string
  usage: string
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
  cibles: string[]
  livrables: string[]
  certifications?: Certification[]
  techStack?: TechStack[]
}

const poles: Pole[] = [
  {
    num: "01",
    slug: "cyber-renseignement-osint",
    name: "Cyber-Renseignement & OSINT",
    tagline: "Voir ce que les autres ne voient pas.",
    description:
      "Collecte et analyse de renseignements depuis des sources ouvertes pour anticiper les menaces, surveiller les acteurs malveillants et produire des rapports d'intelligence actionnables.",
    color: "#0071E3",
    bgColor: "#EEF4FD",
    image: "/images/poles/osint.jpg",
    pourquoi:
      "Intelligence360 dispose d'analystes OSINT formés aux techniques les plus avancées et d'un accès à des outils professionnels (Maltego Pro, MISP, OpenCTI). Nous opérons dans le contexte africain avec une connaissance fine des sources locales — réseaux sociaux sénégalais, presses régionales, bases de données UEMOA.",
    clients: [
      "Entreprises exposées à des risques concurrentiels",
      "Institutions publiques et ministères",
      "Cabinets d'avocats et d'audit",
      "Personnalités politiques et dirigeants",
      "Organisations internationales (ONU, USAID, ONG)",
    ],
    services: [
      {
        titre: "Recherche OSINT avancée",
        description:
          "Collecte structurée de données depuis le web ouvert, dark web, réseaux sociaux, bases de données publiques et registres officiels.",
        points: [
          "Indexation de sources web ouvertes et deep web",
          "Surveillance dark web et forums spécialisés",
          "Analyse des registres officiels et bases OHADA",
          "Extraction de données depuis les réseaux sociaux",
        ],
      },
      {
        titre: "Profilage numérique",
        description:
          "Identification et analyse approfondie d'individus, d'entreprises ou d'organisations à partir de sources ouvertes.",
        points: [
          "Cartographie des présences numériques",
          "Analyse des réseaux de relations",
          "Vérification d'identités et détection de faux profils",
          "Rapport de profilage confidentiel",
        ],
      },
      {
        titre: "Veille concurrentielle",
        description:
          "Surveillance continue des activités numériques de vos concurrents, partenaires stratégiques et acteurs clés de votre secteur.",
        points: [
          "Monitoring des actions digitales concurrentes",
          "Suivi des appels d'offres et marchés publics",
          "Analyse des recrutements et mouvements RH",
          "Alertes personnalisées en temps réel",
        ],
      },
      {
        titre: "Détection de menaces",
        description:
          "Identification proactive des acteurs malveillants ciblant votre organisation avant toute attaque concrète.",
        points: [
          "Surveillance des mentions de votre organisation sur le dark web",
          "Détection de tentatives de phishing ciblé",
          "Identification des hacktivistes et groupes APT actifs",
          "Alertes préventives avec plan de réponse",
        ],
      },
      {
        titre: "Rapports d'intelligence",
        description:
          "Production de rapports exécutifs et techniques exploitables par vos équipes décisionnelles et opérationnelles.",
        points: [
          "Rapport exécutif synthétique pour décideurs",
          "Rapport technique détaillé pour équipes IT",
          "Cartographies visuelles des réseaux et acteurs",
          "Recommandations actionnables priorisées",
        ],
      },
    ],
    cibles: [
      "Entreprises exposées à des risques concurrentiels",
      "Institutions publiques et ministères",
      "Cabinets d'avocats et d'audit",
      "Personnalités politiques et dirigeants",
    ],
    livrables: [
      "Rapport d'intelligence complet",
      "Cartographie des acteurs et réseaux",
      "Tableau de bord de veille",
      "Alertes temps réel personnalisées",
    ],
  },
  {
    num: "02",
    slug: "social-listening-e-reputation",
    name: "Social Listening & E-Réputation",
    tagline: "Maîtriser ce qui se dit de vous en ligne.",
    description:
      "Surveillance en temps réel de votre image sur le web et les réseaux sociaux. Détection des crises naissantes, analyse des sentiments et gestion proactive de votre réputation digitale.",
    color: "#6E44FF",
    bgColor: "#F0EBFF",
    image: "/images/poles/reputation.jpg",
    pourquoi:
      "En Afrique de l'Ouest, une crise e-réputation se propage en quelques heures sur WhatsApp, Twitter et les groupes Facebook avant d'atteindre les médias traditionnels. Intelligence360 est la seule structure locale à combiner outils de monitoring professionnels, veille humaine et capacité de réponse rapide en français et en langues locales.",
    clients: [
      "Marques et enseignes à forte présence digitale",
      "Personnalités publiques et politiques",
      "Institutions en période de crise ou de fusion",
      "Entreprises du secteur financier et bancaire",
      "Groupes hôteliers et de restauration",
    ],
    services: [
      {
        titre: "Monitoring 24h/24",
        description:
          "Surveillance continue de toutes les mentions de votre marque sur les réseaux sociaux, forums, blogs et médias en ligne.",
        points: [
          "Couverture Facebook, Instagram, X, TikTok, LinkedIn, YouTube",
          "Surveillance des groupes WhatsApp publics et forums",
          "Monitoring des médias en ligne sénégalais et africains",
          "Alertes instantanées par SMS et email",
        ],
      },
      {
        titre: "Analyse des sentiments",
        description:
          "Mesure de la tonalité des conversations autour de votre marque grâce à des outils d'IA et d'analyse sémantique.",
        points: [
          "Score de sentiment positif/négatif/neutre en temps réel",
          "Analyse des émotions dominantes",
          "Détection des influenceurs amplificateurs",
          "Évolution historique du sentiment",
        ],
      },
      {
        titre: "Gestion de crise e-réputation",
        description:
          "Protocoles de réponse rapide en cas de bad buzz, rumeur ou attaque numérique coordonnée.",
        points: [
          "Cellule de crise activable en moins de 2 heures",
          "Stratégie de contre-narratif et messages clés",
          "Coordination avec vos équipes communication",
          "Rapport post-crise et retour d'expérience",
        ],
      },
      {
        titre: "Audit de réputation",
        description:
          "Évaluation complète de votre image en ligne avec identification des points faibles et des opportunités d'amélioration.",
        points: [
          "Audit de toutes les plateformes et mentions existantes",
          "Analyse des résultats de recherche Google",
          "Benchmark concurrentiel sur la réputation",
          "Plan d'action de renforcement d'image",
        ],
      },
      {
        titre: "Rapports & tableaux de bord",
        description:
          "Reporting structuré et personnalisé avec KPIs de réputation, évolutions et recommandations concrètes.",
        points: [
          "Dashboard temps réel accessible en ligne",
          "Rapport hebdomadaire de synthèse",
          "Rapport mensuel approfondi avec tendances",
          "Présentation executive pour comité de direction",
        ],
      },
    ],
    cibles: [
      "Marques et enseignes à forte présence digitale",
      "Personnalités publiques",
      "Institutions politiques",
      "Entreprises en période de crise ou de fusion",
    ],
    livrables: [
      "Dashboard de monitoring temps réel",
      "Rapport mensuel e-réputation",
      "Plan de gestion de crise",
      "Guide de réponse aux commentaires",
    ],
  },
  {
    num: "03",
    slug: "viralisation-reseaux-sociaux",
    name: "Viralisation & Réseaux Sociaux",
    tagline: "Amplifier votre message au-delà de vos frontières.",
    description:
      "Stratégies de croissance organique et virale pour maximiser votre reach sur les plateformes digitales. Création de contenus, gestion de communautés et campagnes d'influence.",
    color: "#FF6B35",
    bgColor: "#FFF0EB",
    image: "/images/poles/viral.jpg",
    pourquoi:
      "Le marché sénégalais a ses codes, ses influenceurs, ses formats viraux. Ce qui fonctionne en Europe ne fonctionne pas nécessairement à Dakar. Notre équipe crée des contenus ancrés dans la culture locale, avec des références pertinentes et une connaissance fine des algorithmes des plateformes les plus utilisées en Afrique de l'Ouest.",
    clients: [
      "Marques B2C en croissance",
      "Artistes et créateurs de contenu",
      "Startups cherchant à s'imposer rapidement",
      "Événements et lancements de produits",
      "Institutions souhaitant engager leur audience",
    ],
    services: [
      {
        titre: "Stratégie de contenu",
        description:
          "Élaboration d'une ligne éditoriale cohérente et différenciante adaptée à chaque plateforme.",
        points: [
          "Audit de votre présence sociale actuelle",
          "Définition des personas et audiences cibles",
          "Calendrier éditorial mensuel multiplateforme",
          "Charte éditoriale et tone of voice",
        ],
      },
      {
        titre: "Création de contenus viraux",
        description:
          "Production de visuels, vidéos courtes, reels et stories optimisés pour l'engagement maximal.",
        points: [
          "Visuels et carousels haute qualité",
          "Vidéos courtes et reels (30s à 90s)",
          "Contenus adaptés à chaque format plateforme",
          "A/B testing des formats pour optimiser les résultats",
        ],
      },
      {
        titre: "Community management",
        description:
          "Gestion quotidienne de vos communautés, modération et animation pour fidéliser votre audience.",
        points: [
          "Publication et programmation des contenus",
          "Réponse aux commentaires et messages privés",
          "Animation et engagement de la communauté",
          "Modération et gestion des commentaires négatifs",
        ],
      },
      {
        titre: "Campagnes d'influence",
        description:
          "Identification et activation d'influenceurs pertinents pour le marché sénégalais et ouest-africain.",
        points: [
          "Base de données d'influenceurs sénégalais qualifiés",
          "Négociation et gestion des partenariats",
          "Brief créatif et validation des contenus",
          "Mesure du ROI et rapport de campagne",
        ],
      },
      {
        titre: "Publicité sociale (Ads)",
        description:
          "Gestion de campagnes payantes avec optimisation continue du ROI sur toutes les plateformes.",
        points: [
          "Facebook Ads, Instagram Ads, TikTok Ads",
          "Ciblage précis des audiences sénégalaises et CEDEAO",
          "Optimisation budgétaire quotidienne",
          "Rapport de performance hebdomadaire",
        ],
      },
    ],
    cibles: [
      "Marques B2C en croissance",
      "Artistes et créateurs de contenu",
      "Startups cherchant à s'imposer rapidement",
      "Événements et lancements de produits",
    ],
    livrables: [
      "Calendrier éditorial mensuel",
      "Rapports de performance hebdomadaires",
      "Bibliothèque de contenus",
      "Rapport ROI campagnes payantes",
    ],
  },
  {
    num: "04",
    slug: "gestion-image-personnalites",
    name: "Gestion d'Image & Personnalités",
    tagline: "Construire et protéger votre capital image.",
    description:
      "Personal branding et gestion de réputation pour dirigeants, personnalités politiques, artistes et célébrités. Nous construisons des narratifs puissants et protégeons votre image publique.",
    color: "#C8972A",
    bgColor: "#FDF6E3",
    image: "/images/poles/image.jpg",
    pourquoi:
      "En Afrique de l'Ouest, la réputation personnelle est inextricablement liée à la crédibilité professionnelle et politique. Intelligence360 dispose d'une équipe de conseillers en image qui comprennent les enjeux locaux — qu'il s'agisse d'un ministre, d'un PDG ou d'un artiste en pleine ascension.",
    clients: [
      "Dirigeants d'entreprise",
      "Personnalités politiques",
      "Artistes et sportifs de haut niveau",
      "Entrepreneurs influents",
      "Professionnels cherchant à renforcer leur influence",
    ],
    services: [
      {
        titre: "Audit d'image personnel",
        description:
          "Évaluation complète de votre présence numérique actuelle — forces, faiblesses, risques et opportunités.",
        points: [
          "Analyse de tous vos profils en ligne",
          "Résultats de recherche Google vous concernant",
          "Analyse du sentiment public à votre égard",
          "Rapport confidentiel avec recommandations",
        ],
      },
      {
        titre: "Stratégie de personal branding",
        description:
          "Construction d'un positionnement unique, d'un storytelling authentique et d'une identité numérique cohérente.",
        points: [
          "Définition de votre positionnement et valeurs clés",
          "Élaboration de votre storytelling personnel",
          "Charte de communication personnelle",
          "Plan de présence sur les réseaux appropriés",
        ],
      },
      {
        titre: "Gestion des réseaux sociaux personnels",
        description:
          "Création et animation de vos comptes officiels avec une voix authentique et des contenus à forte valeur.",
        points: [
          "LinkedIn, X, Instagram — gestion complète",
          "Contenus alignés sur votre positioning",
          "Interactions stratégiques avec votre réseau",
          "Croissance organique de votre audience qualifiée",
        ],
      },
      {
        titre: "Gestion de crise d'image",
        description:
          "Intervention rapide en cas de polémique, rumeur ou attaque médiatique pour limiter les dégâts.",
        points: [
          "Cellule de crise disponible 24h/24",
          "Stratégie de contre-narratif personnalisée",
          "Coordination médias et réseaux sociaux",
          "Suivi et mesure de la récupération d'image",
        ],
      },
      {
        titre: "Relations presse digitale",
        description:
          "Placement d'articles, interviews et mentions positives dans les médias en ligne sénégalais et africains.",
        points: [
          "Réseau de journalistes et médias partenaires",
          "Rédaction de communiqués et dossiers de presse",
          "Organisation d'interviews et prises de parole",
          "Suivi des retombées presse",
        ],
      },
    ],
    cibles: [
      "Dirigeants d'entreprise",
      "Personnalités politiques",
      "Artistes et sportifs de haut niveau",
      "Entrepreneurs influents",
    ],
    livrables: [
      "Stratégie de personal branding",
      "Charte de communication personnelle",
      "Rapport mensuel d'image",
      "Plan de gestion de crise",
    ],
  },
  {
    num: "05",
    slug: "production-audiovisuelle",
    name: "Production Audiovisuelle",
    tagline: "Des contenus qui marquent les esprits.",
    description:
      "Création de contenus vidéo, podcasts et supports visuels à fort impact. De la conception à la diffusion, nous produisons des œuvres audiovisuelles au standard international.",
    color: "#E03B3B",
    bgColor: "#FDE8E8",
    image: "/images/poles/audiovisuel.jpg",
    pourquoi:
      "Notre équipe est équipée de matériel professionnel de référence (Sony FX3, DJI Mavic 3 Pro, éclairage Aputure) et maîtrise les logiciels de post-production Adobe (Premiere Pro, After Effects, Audition). Nous produisons des contenus qui rivalisent avec les standards internationaux tout en restant ancrés dans l'esthétique et les codes africains.",
    clients: [
      "Entreprises souhaitant renforcer leur présence vidéo",
      "Organisateurs d'événements",
      "ONG et institutions internationales",
      "Artistes et labels musicaux",
      "Agences publicitaires cherchant un partenaire de production",
    ],
    services: [
      {
        titre: "Production vidéo corporate",
        description:
          "Films institutionnels, présentations d'entreprise, témoignages clients et documentaires corporate au standard international.",
        points: [
          "Films institutionnels et présentations d'entreprise",
          "Témoignages clients et case studies vidéo",
          "Documentaires corporate et reportages",
          "Vidéos de formation et e-learning",
        ],
      },
      {
        titre: "Contenu pour réseaux sociaux",
        description:
          "Reels, shorts, stories et vidéos publicitaires optimisés pour chaque plateforme.",
        points: [
          "Reels Instagram et TikTok (15s à 90s)",
          "YouTube Shorts et Facebook Reels",
          "Stories animées et formats verticaux",
          "Versions adaptées par format et plateforme",
        ],
      },
      {
        titre: "Couverture événementielle",
        description:
          "Captation et montage de conférences, lancements de produits, galas et événements d'entreprise.",
        points: [
          "Multi-caméras avec régie mobile",
          "Diffusion live sur réseaux sociaux",
          "Montage express J+1 pour les stories",
          "Film de soirée haute qualité",
        ],
      },
      {
        titre: "Prises de vue drone",
        description:
          "Captation aérienne professionnelle pour plans cinématographiques et couvertures de grands espaces.",
        points: [
          "DJI Mavic 3 Pro — qualité cinématographique",
          "Plans d'introduction et transitions aériennes",
          "Couverture de chantiers et infrastructures",
          "Autorisations légales de vol au Sénégal",
        ],
      },
      {
        titre: "Post-production & Motion Design",
        description:
          "Montage professionnel, étalonnage, effets visuels et animations pour valoriser chaque contenu.",
        points: [
          "Montage Adobe Premiere Pro",
          "Étalonnage couleur professionnel",
          "Motion design et animations After Effects",
          "Mixage audio et habillage sonore",
        ],
      },
    ],
    cibles: [
      "Entreprises souhaitant renforcer leur présence vidéo",
      "Organisateurs d'événements",
      "ONG et institutions internationales",
      "Artistes et labels musicaux",
    ],
    livrables: [
      "Fichiers vidéo master HD/4K",
      "Versions adaptées par plateforme",
      "Génériques et habillages",
      "Droits cédés et livrables RAW",
    ],
  },
  {
    num: "06",
    slug: "cybersecurite-infrastructures",
    name: "Cybersécurité & Infrastructures",
    tagline: "Notre pôle phare — protéger ce que vous avez mis des années à construire.",
    description:
      "La cybersécurité est le pôle stratégique central d'Intelligence360. Dans un contexte d'explosion des cyberattaques en Afrique de l'Ouest, nous proposons une offre complète qui couvre l'ensemble du cycle de protection numérique des organisations.",
    color: "#2BAE6E",
    bgColor: "#E5F8EE",
    image: "/images/poles/cyber.jpg",
    pourquoi:
      "Intelligence360 est le seul acteur en Afrique de l'Ouest à proposer une chaîne complète de cybersécurité opérationnelle : de l'audit initial à la surveillance continue en passant par la réponse aux incidents. Nos consultants visent les certifications les plus reconnues (CISSP, CEH, ISO 27001) et utilisent les mêmes outils que les cabinets internationaux.",
    clients: [
      "Banques & établissements financiers — CBAO, Ecobank, UBA, BSIC, fintech",
      "Télécoms & opérateurs — Orange Sénégal, Free, Expresso",
      "Institutions publiques — ministères, DGI, Trésor Public, ARTP",
      "PME, grandes entreprises et groupes industriels",
      "ONG & organismes internationaux — USAID, Banque Mondiale, ONU, AFD",
    ],
    services: [
      {
        titre: "Audit des Systèmes d'Information (Audit SI)",
        description:
          "Évaluation complète de la posture de sécurité d'une organisation. Nous analysons l'infrastructure réseau, les applications web et mobiles, les politiques de sécurité, la gestion des accès et la conformité réglementaire (ISO 27001, RGPD, directives BCEAO pour les institutions financières).",
        points: [
          "Audit réseau : pare-feux, routeurs, VPN, segmentation, points d'accès",
          "Audit applicatif : tests OWASP Top 10, injections SQL, XSS, API security",
          "Audit organisationnel : politiques, procédures, sensibilisation des équipes",
          "Tests d'ingénierie sociale : simulation de phishing, vishing",
          "Livrable : rapport exécutif + rapport technique + plan de remédiation priorisé",
        ],
      },
      {
        titre: "Tests d'Intrusion (Pentest)",
        description:
          "Simulation d'attaques réelles pour identifier les vulnérabilités avant que des acteurs malveillants ne les exploitent. Tests en boîte noire, boîte grise ou boîte blanche selon les besoins.",
        points: [
          "Pentest réseau interne et externe",
          "Pentest applicatif web et mobile",
          "Pentest social engineering",
          "Red Team exercises pour grandes organisations",
        ],
      },
      {
        titre: "Investigation Forensique Numérique",
        description:
          "Analyse post-incident pour comprendre ce qui s'est passé, collecter les preuves numériques et prévenir les récidives. Nos investigations respectent les chaînes de custody légales pour une éventuelle utilisation judiciaire.",
        points: [
          "Analyse de disques durs et systèmes compromis",
          "Récupération de données effacées ou chiffrées",
          "Analyse des journaux d'événements et traces numériques",
          "Rapport d'investigation avec valeur probatoire",
        ],
      },
      {
        titre: "Security Operations Center (SOC)",
        description:
          "Centre de surveillance et de réponse aux incidents de sécurité, opérationnel 24h/24 et 7j/7. Trois niveaux adaptés à chaque taille d'organisation.",
        points: [
          "SOC Externalisé (SOCaaS) — surveillance depuis Dakar, SLA garanti (PME, ETI)",
          "SOC Hybride — infrastructure partagée, transfert de compétences (entreprises avec équipe IT)",
          "SOC Interne clé en main — déploiement complet, formation, autonomie totale (grandes organisations)",
        ],
      },
      {
        titre: "Formation en Cybersécurité",
        description:
          "Programmes de formation adaptés à tous les niveaux : sensibilisation générale, formations techniques certifiantes et formations pour dirigeants.",
        points: [
          "Sensibilisation générale pour tous les collaborateurs",
          "Formations techniques certifiantes (CEH, CompTIA Security+, ISO 27001)",
          "Formations pour dirigeants et décideurs",
        ],
      },
      {
        titre: "Sécurisation des Infrastructures",
        description:
          "Hardening des serveurs Linux et Windows, sécurisation des environnements cloud, IAM, chiffrement, vidéosurveillance CCTV/IP et plans PRA/PCA.",
        points: [
          "Hardening des serveurs Linux et Windows",
          "Sécurisation cloud AWS, Azure, GCP",
          "Mise en place de solutions IAM et chiffrement des données",
          "Déploiement CCTV/IP, câblage réseau structuré et plan PRA/PCA",
        ],
      },
    ],
    cibles: [
      "Banques et établissements financiers",
      "Télécoms et opérateurs",
      "Institutions publiques",
      "PME et grandes entreprises",
    ],
    livrables: [
      "Rapport d'audit exécutif + technique",
      "Plan de remédiation priorisé",
      "Rapport de pentest",
      "Tableau de bord SOC",
      "Certificats de formation",
    ],
    certifications: [
      { nom: "CISSP (ISC²)", perimetre: "Sécurité SI globale — standard mondial", statut: "Objectif Responsable Pôle" },
      { nom: "CEH — Certified Ethical Hacker", perimetre: "Pentest et ethical hacking", statut: "Objectif Consultants Senior" },
      { nom: "OSCP — Offensive Security", perimetre: "Pentest avancé", statut: "Objectif Pentesters" },
      { nom: "ISO 27001 Lead Auditor", perimetre: "Audit conformité SMSI", statut: "Objectif Consultants conformité" },
      { nom: "CompTIA Security+ / CySA+", perimetre: "Analystes SOC", statut: "Objectif Analystes" },
      { nom: "AWS Security Specialty", perimetre: "Cloud security", statut: "Objectif Expert Cloud" },
    ],
    techStack: [
      { categorie: "SIEM", outils: "Wazuh (open source) / IBM QRadar (grands comptes)", usage: "Corrélation événements, alertes temps réel" },
      { categorie: "EDR", outils: "CrowdStrike Falcon / SentinelOne", usage: "Protection endpoints, détection comportementale" },
      { categorie: "OSINT & Threat Intel", outils: "Maltego Pro, MISP, OpenCTI, AlienVault OTX", usage: "Renseignement cyber menaces africaines" },
      { categorie: "Pentest", outils: "Metasploit Pro, Burp Suite Pro, Nessus Professional", usage: "Tests d'intrusion, scan vulnérabilités" },
      { categorie: "Forensic", outils: "Autopsy, Volatility, FTK Imager", usage: "Analyse post-incident, preuve numérique" },
      { categorie: "Réseau", outils: "Wireshark, Nmap, Zeek, Suricata", usage: "Analyse trafic, détection intrusion" },
    ],
  },
  {
    num: "07",
    slug: "developpement-ingenierie-it",
    name: "Développement & Ingénierie IT",
    tagline: "Des solutions sur mesure qui durent.",
    description:
      "Conception et développement d'applications web, mobiles et solutions informatiques sur mesure. De l'architecture technique à la mise en production, nous livrons des produits robustes et scalables.",
    color: "#1A8FE3",
    bgColor: "#E8F3FE",
    image: "/images/poles/dev.jpg",
    pourquoi:
      "Notre équipe développe avec les technologies les plus modernes tout en intégrant les contraintes du marché africain : connectivité variable, paiements mobile money, langues locales, comportements utilisateurs spécifiques. Chaque solution est conçue pour fonctionner efficacement dans le contexte sénégalais et ouest-africain.",
    clients: [
      "Startups et scale-ups tech",
      "PME cherchant à se digitaliser",
      "Institutions souhaitant moderniser leurs outils",
      "Entrepreneurs avec un projet digital",
      "Agences cherchant un partenaire technique",
    ],
    services: [
      {
        titre: "Développement web",
        description:
          "Applications web modernes — sites vitrines, plateformes e-commerce, dashboards, portails clients.",
        points: [
          "Next.js, React, Node.js — stack moderne",
          "Sites vitrines et landing pages optimisées SEO",
          "Plateformes e-commerce et marketplaces",
          "Dashboards et outils de gestion internes",
        ],
      },
      {
        titre: "Développement mobile",
        description:
          "Applications iOS et Android natives ou cross-platform avec UX optimisée pour le marché africain.",
        points: [
          "React Native et Flutter (cross-platform)",
          "Applications natives iOS et Android",
          "UX adaptée aux usages mobiles africains",
          "Optimisation pour connexions lentes (3G)",
        ],
      },
      {
        titre: "ERP & solutions métier",
        description:
          "Déploiement et personnalisation de solutions ERP, CRM et outils de gestion sur mesure.",
        points: [
          "Déploiement et personnalisation Odoo",
          "CRM sur mesure avec pipeline de ventes",
          "Outils de gestion RH et paie",
          "Intégration avec les systèmes existants",
        ],
      },
      {
        titre: "Intégrations & API",
        description:
          "Développement d'APIs RESTful, intégrations avec systèmes de paiement mobile money.",
        points: [
          "APIs RESTful et GraphQL",
          "Intégration Wave, Orange Money, PayDunya",
          "Connexions aux systèmes bancaires locaux",
          "Webhooks et automatisations métier",
        ],
      },
      {
        titre: "Infrastructure & DevOps",
        description:
          "Architecture cloud, déploiement continu, containerisation et supervision applicative.",
        points: [
          "Architecture cloud AWS, GCP, Azure",
          "CI/CD avec GitHub Actions ou GitLab CI",
          "Containerisation Docker et Kubernetes",
          "Monitoring et alertes en production",
        ],
      },
    ],
    cibles: [
      "Startups et scale-ups tech",
      "PME cherchant à se digitaliser",
      "Institutions souhaitant moderniser leurs outils",
      "Entrepreneurs avec un projet digital",
    ],
    livrables: [
      "Code source versionné sur GitHub",
      "Documentation technique complète",
      "Application déployée en production",
      "Formation équipe client",
      "Contrat de maintenance",
    ],
  },
  {
    num: "08",
    slug: "transformation-digitale-conseil",
    name: "Transformation Digitale & Conseil",
    tagline: "Accompagner votre organisation vers le futur.",
    description:
      "Accompagnement stratégique pour digitaliser et moderniser votre organisation. Diagnostic, feuille de route, gestion du changement et formation des équipes pour une transformation réussie et durable.",
    color: "#7B61FF",
    bgColor: "#EEEAFE",
    image: "/images/poles/digital.jpg",
    pourquoi:
      "La transformation digitale en Afrique de l'Ouest ne se décrète pas — elle s'accompagne. Intelligence360 combine expertise technique et compréhension des réalités organisationnelles africaines pour proposer des feuilles de route réalistes, progressives et adaptées aux contraintes budgétaires et humaines de chaque organisation.",
    clients: [
      "Grandes entreprises en mutation",
      "Institutions publiques en modernisation",
      "PME familiales souhaitant se digitaliser",
      "ONG et organisations internationales",
      "Groupes régionaux UEMOA/CEDEAO",
    ],
    services: [
      {
        titre: "Diagnostic de maturité digitale",
        description:
          "Évaluation de votre niveau de digitalisation actuel selon un référentiel structuré.",
        points: [
          "Grille d'évaluation sur 5 dimensions clés",
          "Benchmark sectoriel et comparatif",
          "Identification des quick wins et priorités",
          "Rapport de diagnostic avec scoring",
        ],
      },
      {
        titre: "Feuille de route de transformation",
        description:
          "Plan stratégique sur 12 à 36 mois avec jalons, ressources, budgets et indicateurs.",
        points: [
          "Roadmap détaillée avec jalons trimestriels",
          "Estimation budgétaire et business case",
          "Plan de ressources humaines et techniques",
          "KPIs de suivi et tableaux de bord",
        ],
      },
      {
        titre: "AMOA & conduite du changement",
        description:
          "Assistance à maîtrise d'ouvrage pour vos projets SI, gestion des résistances et accompagnement humain.",
        points: [
          "Rédaction des cahiers des charges fonctionnels",
          "Pilotage des appels d'offres et sélection prestataires",
          "Gestion des résistances au changement",
          "Communication interne sur la transformation",
        ],
      },
      {
        titre: "Formation & montée en compétences",
        description:
          "Programmes de formation sur mesure pour vos équipes sur les outils et pratiques digitaux.",
        points: [
          "Programmes de formation personnalisés",
          "Ateliers pratiques et hands-on",
          "Formation des formateurs internes",
          "Suivi post-formation et coaching",
        ],
      },
      {
        titre: "Conseil en stratégie digitale",
        description:
          "Recommandations stratégiques sur votre positionnement digital, vos canaux et votre organisation.",
        points: [
          "Analyse de votre positionnement digital actuel",
          "Recommandations sur les canaux prioritaires",
          "Conseil sur l'organisation et les compétences",
          "Veille sur les tendances et technologies émergentes",
        ],
      },
    ],
    cibles: [
      "Grandes entreprises en mutation",
      "Institutions publiques en modernisation",
      "PME familiales souhaitant se digitaliser",
      "ONG et organisations internationales",
    ],
    livrables: [
      "Rapport de diagnostic complet",
      "Feuille de route stratégique",
      "Plan de formation",
      "Tableaux de bord de suivi",
      "Rapports d'avancement mensuels",
    ],
  },
]

export function getPoleBySlug(slug: string): Pole | undefined {
  return poles.find((p) => p.slug === slug)
}

export function getAllPoles(): Pole[] {
  return poles
}

export async function generateStaticParams() {
  return poles.map((pole) => ({ slug: pole.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const pole = getPoleBySlug(slug)
  if (!pole) return { title: "Pôle introuvable" }
  return {
    title: `${pole.name} — Intelligence360`,
    description: pole.description,
  }
}

export default async function PolePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pole = getPoleBySlug(slug)
  if (!pole) notFound()

  const allPoles = getAllPoles()
  const currentIndex = allPoles.findIndex((p) => p.slug === slug)
  const prevPole = currentIndex > 0 ? allPoles[currentIndex - 1] : null
  const nextPole =
    currentIndex < allPoles.length - 1 ? allPoles[currentIndex + 1] : null

  return (
    <main>
      <Navbar />
      <PoleClient pole={pole} prevPole={prevPole} nextPole={nextPole} />
      <Footer />
    </main>
  )
}
