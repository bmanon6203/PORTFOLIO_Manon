// ═══ TES INFORMATIONS — modifie uniquement ce fichier pour le texte du site ═══
// TRADUCTION : un texte peut être simple ('Manon') ou bilingue { fr: '...', en: '...' }.
export const site = {
  name: 'Manon',
  tagline: 'Creative designer / Motion / 3D / Visuals',
  hint: { fr: 'Explore my universe — choisis un objet', en: 'Explore my universe — pick an object' },
  // Décor d'accueil : type "image" (public/background.jpg) ou "video" (public/background.mp4)
  background: { type: 'image', src: '/background.jpg', poster: '/background.jpg' },
  profile: {
    title: { fr: 'Profil', en: 'Profile' },
    text: {
      fr: [
        "PLACEHOLDER — Étudiante en BUT MMI, je crée des univers en animation 3D, motion design et post-production.",
        "PLACEHOLDER — Ajoute ici 2 ou 3 phrases sur ton parcours, ce qui t'anime et ce que tu recherches."
      ],
      en: [
        "PLACEHOLDER — I'm a multimedia and web student creating worlds through 3D animation, motion design and post-production.",
        "PLACEHOLDER — Add 2 or 3 sentences here about your background, what drives you and what you are looking for."
      ]
    }
  },
  // Objets de navigation (l'id "profile" / "projects" / "contact" est fixe ; libellés, icônes et positions modifiables)
  // icon : un emoji, ou un chemin d'image (ex. '/icons/chapeau.png')
  nav: [
    { id: 'profile',  icon: '🎩', label: { fr: 'Profil', en: 'Profile' },   hint: { fr: 'Qui je suis', en: 'Who I am' },           x: 16, y: 62 },
    { id: 'projects', icon: '🎞️', label: { fr: 'Projets', en: 'Projects' }, hint: { fr: 'Mes réalisations', en: 'My work' },     x: 50, y: 74 },
    { id: 'contact',  icon: '💌', label: 'Contact',                           hint: { fr: 'Écrivons-nous', en: "Let's talk" },     x: 84, y: 62 }
  ],
  // Contact / réseaux : remplace les valeurs MON_...
  socials: [
    { id: 'mail',     label: 'Gmail',    href: 'mailto:b.manon6203@gmail.com',     logo: '/icons/gmail.svg' },
    { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/qr/FSFPNOQU4EIOP1',  logo: '/icons/whatsapp.svg' },
    { id: 'linkedin', label: 'LinkedIn', href: 'MON_LIEN_LINKEDIN',                logo: '/icons/linkedin.svg' },
    { id: 'facebook', label: 'Facebook', href: 'MON_LIEN_FACEBOOK',                logo: '/icons/facebook.svg' }
  ],
  // CV téléchargeable : dépose ton PDF dans public/ et indique son nom ici (file: '' pour masquer le bouton)
  // Astuce : pour un CV par langue, mets file: { fr: '/cv-fr.pdf', en: '/cv-en.pdf' }
  cv: { label: { fr: 'Télécharger mon CV', en: 'Download my CV' }, file: '/cv-manon.pdf' },
  // Endpoint du formulaire (Formspree, etc.) : défini dans Netlify > Environment variables : VITE_FORM_ENDPOINT
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || ''
}

// Catégories : ajoute-en une ici, elle apparaît toute seule (seulement si elle contient au moins un projet)
// name = nom en français, utilisé dans projects.js ; en = nom affiché en anglais
export const categories = [
  { name: 'Animation', en: 'Animation', icon: '🎬' },
  { name: 'Post-production', en: 'Post-production', icon: '🎚️' },
  { name: 'Jeu vidéo', en: 'Video games', icon: '🎮' },
  { name: 'Graphisme', en: 'Graphic design', icon: '🖌️' },
  { name: 'Stop Motion', en: 'Stop motion', icon: '🧶' },
  { name: 'Autres', en: 'Other', icon: '✦' }
]

export const skills = {
  hard: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'Blender', 'Cinema 4D', 'Substance Painter'],
  soft: [
    { fr: 'Créativité', en: 'Creativity' }, { fr: 'Curiosité', en: 'Curiosity' }, { fr: 'Autonomie', en: 'Autonomy' },
    { fr: "Travail d'équipe", en: 'Teamwork' }, { fr: 'Adaptabilité', en: 'Adaptability' },
    { fr: 'Organisation', en: 'Organisation' }, { fr: 'Communication', en: 'Communication' }
  ]
}
