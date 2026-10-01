// ═══ TES PROJETS ═══
// Ajouter un projet : 1) crée public/projects/<id>/ et dépose tes médias (thumbnail.jpg, cover.jpg, image-01.jpg, video.mp4…)
//                     2) copie un bloc ci-dessous, change les infos  3) c'est tout.
// TRADUCTION : title, description, details, role, software, client peuvent être { fr: ..., en: ... } (sinon le même texte est utilisé dans les 2 langues).
// Champs facultatifs : cover, details, images, video, videos, externalLink, client, year, size ("s" | "m" | "l")
// Ordre d'affichage = ordre de la liste. Un média manquant est remplacé par un dégradé.
const dir = (id) => `/projects/${id}`

export const projects = [
  {
    id: 'cactoon',
    title: 'Cactoon',
    category: 'Animation',
    year: '', // PLACEHOLDER — ex. '2025'
    thumbnail: `${dir('cactoon')}/thumbnail.jpg`,
    cover: `${dir('cactoon')}/cover.jpg`,
    description: {
      fr: 'Cactoon met en scène Spike, un personnage vivant des situations simples et décalées.',
      en: 'Cactoon follows Spike, a character living simple, offbeat situations.'
    },
    details: {
      fr: "Le style se rapproche du dessin animé 2D, avec un travail sur le rythme, la fluidité et les effets de lumière. PLACEHOLDER — ajoute ta démarche.",
      en: 'The style is close to 2D cartoons, with a focus on rhythm, fluidity and lighting effects. PLACEHOLDER — add your process.'
    },
    role: { fr: ['Animation 2D'], en: ['2D animation'] },
    software: [],
    size: 'l'
  },
  {
    id: 'chupachups',
    title: 'ChupaChups',
    category: 'Graphisme',
    year: '',
    thumbnail: `${dir('chupachups')}/thumbnail.jpg`,
    description: { fr: "Moderniser l'identité visuelle tout en conservant son ADN.", en: 'Modernising the visual identity while keeping its DNA.' },
    details: {
      fr: "J'ai proposé une direction artistique inspirée du pop art, avec la création d'un logo, d'une affiche et d'une bannière, dans un univers coloré et dynamique.",
      en: 'I proposed an art direction inspired by pop art, creating a logo, a poster and a banner in a colourful, dynamic universe.'
    },
    role: { fr: ['Direction artistique', 'Logo', 'Affiche', 'Bannière'], en: ['Art direction', 'Logo', 'Poster', 'Banner'] },
    software: ['Illustrator']
  },
  {
    id: 'storytelling-visuel',
    title: { fr: 'Storytelling Visuel', en: 'Visual Storytelling' },
    category: 'Graphisme',
    year: '',
    thumbnail: `${dir('storytelling-visuel')}/thumbnail.jpg`,
    description: { fr: 'Six illustrations racontent le passage du temps et la transformation.', en: 'Six illustrations tell a story of time passing and transformation.' },
    details: {
      fr: "Une histoire se développe à travers six illustrations, en laissant une part d'interprétation au spectateur.",
      en: "A story unfolds through six illustrations, leaving room for the viewer's interpretation."
    },
    role: { fr: ['Illustration', 'Storytelling'], en: ['Illustration', 'Storytelling'] },
    software: ['Illustrator']
  },
  {
    id: 'livre-coloriage-cactoon',
    title: { fr: 'Livre coloriage Cactoon', en: 'Cactoon Coloring Book' },
    category: 'Graphisme',
    year: '',
    thumbnail: `${dir('livre-coloriage-cactoon')}/thumbnail.jpg`,
    description: {
      fr: 'Un livre de coloriage autour des quatre saisons avec les personnages de la chaîne.',
      en: "A coloring book built around the four seasons, featuring the channel's characters."
    },
    details: { fr: 'PLACEHOLDER — complète avec la suite de ta description.', en: 'PLACEHOLDER — complete with the rest of your description.' },
    role: { fr: ['Illustration'], en: ['Illustration'] },
    software: []
  }
]
