// ═══ TES INFORMATIONS — modifie uniquement ce fichier pour le texte du site ═══
// TRADUCTION : un texte peut être simple ('Manon') ou bilingue { fr: '...', en: '...' }.
export const site = {
  name: 'Manon',
  tagline: { fr: 'Motion, 3D, Animation, Graphisme', en: 'Motion, 3D, Animation, Graphic Design' },
  //hint: { fr: 'Explore my universe — choisis un objet', en: 'Explore my universe — pick an object' },
  // Décor d'accueil : type "image" (public/background.jpg) ou "video" (public/background.mp4)
  background: { type: 'video', src: '/background.jpg', poster: '/background.jpg' },
  profile: {
    title: { fr: 'Profil', en: 'Profile' },
    text: {
      fr: [
        "Étudiante en BUT MMI, je crée des univers en animation 3D, motion design et création numérique.",
        "J’aime donner forme, mouvement et histoire à mes idées pour transmettre une émotion ou raconter quelque chose."
      ],
      en: [
        "MMI student, I create worlds through 3D animation, motion design, and digital creation.",
        "I love giving shape, movement, and stories to my ideas to convey emotions and tell a story."
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
    { id: 'linkedin', label: 'LinkedIn', href: 'www.linkedin.com/in/manon-belguerbi-44214033a',                logo: '/icons/linkedin.svg' },
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100004813877717',                logo: '/icons/facebook.svg' }
  ],
  // CV téléchargeable : dépose ton PDF dans public/ et indique son nom ici (file: '' pour masquer le bouton)
  // Astuce : pour un CV par langue, mets file: { fr: '/cv-fr.pdf', en: '/cv-en.pdf' }
  cv: {
  label: { fr: 'Télécharger mon CV', en: 'Download my CV' },
  file: { fr: '/cv-fr.pdf', en: '/cv-en.pdf' }
},
  // Endpoint du formulaire (Formspree, etc.) : défini dans Netlify > Environment variables : VITE_FORM_ENDPOINT
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || ''
}

// Catégories : ajoute-en une ici, elle apparaît toute seule (seulement si elle contient au moins un projet)
// name = nom en français, utilisé dans projects.js ; en = nom affiché en anglais
export const categories = [
  { name: 'Animation', en: 'Animation', icon: '🎬' },
  { name: 'Post-production', en: 'Post-production', icon: '🎚️' },
  { name: '3D', en: '3D', icon: '🧊' },
  { name: 'Graphisme', en: 'Graphic design', icon: '🖌️' },
  { name: 'Autres', en: 'Other', icon: '✦' },
  { name: 'Motion', en: 'Motion', icon: '💫' }
]

export const skills = {
  hard: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'Blender', 'Unreal Engine', 'Substance Painter', 'Subtitles Edit'],
  soft: [
    { fr: 'Créativité', en: 'Creativity' }, { fr: 'Observatrice', en: 'Observational Skills' }, { fr: 'Autonomie', en: 'Autonomy' },
    { fr: "Travail d'équipe", en: 'Teamwork' }, { fr: 'Adaptabilité', en: 'Adaptability' },
    { fr: 'Organisation', en: 'Organisation' }, { fr: 'À l’écoute des retours', en: 'Receptive to feedback' }
  ]
}
