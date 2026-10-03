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
    year: '2023', // PLACEHOLDER — ex. '2025'
    thumbnail: `${dir('cactoon')}/thumbnail.jpg`,
    cover: `${dir('cactoon')}/Cactoon.png`,
    description: {
      fr: 'Cactoon met en scène Spike, un personnage vivant des situations simples et décalées.',
      en: 'Cactoon follows Spike, a character living simple, offbeat situations.'
    },
    details: {
      fr: 'Pour ce projet d’écriture multimédia, j’ai choisi de réaliser une vidéo en animation, un format que je pratique déjà dans le cadre de projets personnels. Ce choix m’a permis de créer un projet à la fois scolaire et personnel, tout en explorant un sujet qui me tient particulièrement à cœur : les difficultés rencontrées par la jeunesse actuelle face au monde du travail et à la recherche d’emploi. L’animation était également un moyen pour moi de transmettre ma vision du sujet de manière créative, en mêlant narration, visuels et réflexion personnelle.',
      en: 'For this multimedia writing project, I chose to create an animated video, a format I already practice through my personal projects. This choice allowed me to create a project that was both academic and personal, while exploring a topic that is particularly important to me: the challenges faced by young people today when entering the job market and looking for employment. Animation was also a way for me to express my perspective on the subject creatively, combining storytelling, visuals, and personal reflection.'
    },
    role: { fr: ['Animation 2D'], en: ['2D animation'] },
    software: ['Illustrator', 'After Effect', 'Premiere Pro'],
    externalLink: 'https://www.youtube.com/@mojuky',
    linkLabel: { fr: 'Voir la chaîne YouTube', en: 'Watch on YouTube' },
    size: 'l'
  },
  {
    id: 'ChupaChups',
    title: 'ChupaChups',
    category: 'Graphisme',
    year: '2025',
    thumbnail: `${dir('chupachups')}/ChupaChups.jpg`,
    description: { fr: "Moderniser l'identité visuelle tout en conservant son ADN.", en: 'Modernising the visual identity while keeping its DNA.' },
    details: {
      fr: "J'ai proposé une direction artistique inspirée du pop art, avec la création d'un logo, d'une affiche et d'une bannière, dans un univers coloré et dynamique.",
      en: 'I proposed an art direction inspired by pop art, creating a logo, a poster and a banner in a colourful, dynamic universe.'
    },
    role: { fr: ['Direction artistique', 'Logo', 'Affiche', 'Bannière'], en: ['Art direction', 'Logo', 'Poster', 'Banner'] },
    software: ['Illustrator', 'Photoshop'],
    externalLink: 'https://drive.google.com/drive/folders/1TJJnW13Nauko1I4PpxWPk7sjfpfzO8-n?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'StopMotionPokemon',
    title: { fr: 'Stop Motion Pokemon', en: 'Stop Motion Pokemon' },
    category: 'Autres',
    year: '2026',
    thumbnail: `${dir('StopMotionPokemon')}/StopMotionPokemon.png`,
    description: { fr: 'Stop Motion sur le dessin animé Pokémon', en: 'Stop Motion in the Pokémon Animated Series.' },
    details: {
      fr: "Un court-métrage en stop motion inspiré de l’univers Pokémon, racontant une histoire humoristique. Réalisé en binôme, nous avons créé nous-mêmes le scénario, les personnages et les éléments du décor. Nous avons également pris en charge le set-up, la mise en scène, la lumière, la prise de vue et le montage.",
      en: "A stop-motion short film inspired by the Pokémon universe, telling a humorous story. Created in pairs, we developed the script, characters, and set elements ourselves. We were also responsible for the setup, staging, lighting, shooting, and editing."
    },
    role: { fr: ['Modélisation', 'Storytelling'], en: ['Modeling', 'Storytelling'] },
    software: ['Premiere Pro', 'After Effect'],
    externalLink: 'https://drive.google.com/drive/folders/10k5PUuig71RXFyaRED21rYULkTknWGOq?usp=drive_link',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'livre-coloriage-cactoon',
    title: { fr: 'Livre coloriage Cactoon', en: 'Cactoon Coloring Book' },
    category: 'Graphisme',
    year: '2025',
    thumbnail: `${dir('livre-coloriage-cactoon')}/thumbnail.jpg`,
    description: {
      fr: 'Un livre de coloriage autour des quatre saisons avec les personnages de la chaîne.',
      en: "A coloring book built around the four seasons, featuring the channel's characters."
    },
    details: { fr: 'Un livre de coloriage à but de merch pour la chaîne YouTube Cactoon, autour du thème des quatre saisons. Chaque illustration met en scène les trois personnages principaux de notre chaîne d’animation 2D, dans différents univers et ambiances saisonnières.', 
              en: 'A coloring book designed as merchandise for the Cactoon YouTube channel, based on the theme of the four seasons. Each illustration features the three main characters from our 2D animation channel, placed in different seasonal settings and atmospheres.' },
    role: { fr: ['Illustration'], en: ['Illustration'] },
    software: ['Illustrator'],
    externalLink: 'https://drive.google.com/drive/folders/1i0SdAgoKzl0N7KwTgyTyZNE79YuQ4Pak?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'PopeyeVillageReel',
    title: { fr: 'Reels Popeye Village Malta', en: 'Reels Popeye Village Malta' },
    category: 'Post-production',
    year: '2026',
    thumbnail: `${dir('PopeyeVillageReel')}/PopeyeVillageReel.png`,
    description: {
      fr: 'Un livre de coloriage autour des quatre saisons avec les personnages de la chaîne.',
      en: "A coloring book built around the four seasons, featuring the channel's characters."
    },
    details: { fr: 'Lors de mon stage à Popeye Village Malta, j’ai participé à la promotion du parc en créant des Reels destinés à Instagram et TikTok. J’ai conçu et monté plusieurs vidéos adaptées aux formats et aux codes des réseaux sociaux. L’une de mes créations a notamment atteint environ 51 000 vues sur TikTok et 198 000 vues sur Instagram.', 
              en: 'During my internship at Popeye Village Malta, I contributed to promoting the theme park by creating Reels for Instagram and TikTok. I produced and edited several videos adapted to social media formats and trends. One of my videos reached around 51,000 views on TikTok and 198,000 views on Instagram.' },
    role: { fr: ['Prise de vue', 'Montage'], en: ['Shooting', 'Video editing'] },
    software: { fr: ['Premiere Pro', 'Nikon Z50 · Objectif 18-140'], en: ['Premiere Pro', 'Nikon Z50 · 18-140 lens'] },
    externalLink: 'https://drive.google.com/drive/folders/1Y01LlcGtThrWeZPQgWnMVYgUOU3YZnqT?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'PopeyeVillageBanenrs',
    title: { fr: 'Bannières Popeye Village Malta', en: 'Banners Popeye Village Malta' },
    category: 'Graphisme',
    year: '2026',
    thumbnail: `${dir('PopeyeVillageBanenrs')}/PopeyeVillageBanenrs.png`,
    description: {
      fr: 'Bannières conçues pour Popeye Village Malta.',
      en: "Banners designed for Popeye Village, Malta."
    },
    details: { fr: 'Lors de mon stage à Popeye Village Malta, j’ai conçu et réalisé, à la demande de mon tuteur, les bannières du restaurant du parc ainsi que les supports d’affichage des menus du Seafood Restaurant. Ce projet a été une première expérience importante pour moi, puisque mes créations ont été exposées publiquement au sein d’un parc à thème emblématique de Malte.', 
              en: 'During my internship at Popeye Village Malta, I was asked by my supervisor to design and create the restaurant banners and menu displays for the Seafood Restaurant. This was an important first experience for me, as my designs were publicly displayed within one of Malta’s iconic theme parks.' },
    role: { fr: ['Illustration'], en: ['Illustration'] },
    software: ['Illustrator', 'Photoshop'],
    externalLink: 'https://drive.google.com/drive/folders/1i0SdAgoKzl0N7KwTgyTyZNE79YuQ4Pak?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'MinuteBouh',
    title: { fr: 'Transition La Minute Bouh', en: 'Transition for La Minute Bouh' },
    category: 'Motion',
    year: '2025',
    thumbnail: `${dir('MinuteBouh')}/MinuteBouh.png`,
    description: {
      fr: 'Transition pour la WeTV La Minute Bouh',
      en: "Transition for WeTV's La Minute Bouh"
    },
    details: { fr: 'Conception en groupe d’une WebTV sur le thème du paranormal. Mon rôle était de créer les transitions visuelles, en accord avec notre direction artistique et adaptées aux différentes parties de l’émission. Ce projet m’a permis de travailler sur la cohérence visuelle et le rythme graphique d’un format audiovisuel.', 
              en: 'A group project to create a WebTV show based on the theme of the paranormal. My role was to design the visual transitions, following our artistic direction and adapting them to each part of the show. This project allowed me to work on the visual consistency and graphic pacing of an audiovisual format.' },
    role: { fr: ['Illustration', 'Motion'], en: ['Illustration', 'Motion'] },
    software: ['Illustrator', 'After Effect'],
    externalLink: 'https://drive.google.com/drive/folders/1W6FogAtWu9elet1LQbRFcOc_cd_tl_-f?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'MadHatter',
    title: { fr: 'Turnaround du Chapelier Fou', en: 'The Mad Hatter Turnaround' },
    category: 'Graphisme',
    year: '2026',
    thumbnail: `${dir('MadHatter')}/MadHatterWalking.mp4`,
    cover: `${dir('cactoon')}/MadHatter.jpg`,
    description: {
      fr: 'Illustration du Chapelier Fou',
      en: "Illustration of the Mad Hatter"
    },
    details: { fr: 'Réalisation d’un personnage en style cartoon dans le cadre d’un exercice de turnaround et de walking cycle. J’ai choisi de revisiter le Chapelier Fou, un personnage et un univers que j’apprécie particulièrement, en l’adaptant à un style cartoon que je pratique régulièrement.', 
              en: 'Creation of a cartoon-style character as part of a turnaround and walking cycle exercise. I chose to reinterpret the Mad Hatter, a character and universe I particularly enjoy, adapting him to a cartoon style that I regularly work with.' },
    role: { fr: ['Illustration', 'Animation'], en: ['Illustration', 'Animation'] },
    software: ['Illustrator', 'Character Animator'],
    externalLink: 'https://drive.google.com/drive/folders/1wZd7JSTrXTDJaCFfLNknUmsCwCmrmxP5?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'LaFamille',
    title: { fr: 'Générique du court-métrage La Famille', en: 'Opening Credits for the Short Film La Famille' },
    category: 'Motion',
    year: '2026',
    thumbnail: `${dir('LaFamille')}/MadHatterWalking.mp4`,
    cover: `${dir('cactoon')}/LaFamille.png`,
    description: {
      fr: 'Générique de court-métrage étudiant intitulé La Famille',
      en: "Opening credits for a student short film titled La Famille"
    },
    details: { fr: 'Dans le cadre d’un court-métrage étudiant intitulé La Famille, réalisé en groupe, j’étais chargée de concevoir le générique de fin. J’ai travaillé sur son identité visuelle en respectant la direction artistique et la thématique du film.', 
              en: 'As part of a student short film titled La Famille, created as a group project, I was responsible for designing the end credits. I developed their visual identity while respecting the film’s artistic direction and theme.' },
    role: { fr: ['Motion'], en: ['Motion'] },
    software: ['Photoshop', 'After Effect'],
    externalLink: 'https://drive.google.com/drive/folders/1FPpfl9kWfikwc1y739vCCWt6Agn__fa4?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'Discord',
    title: { fr: 'Motion design Discord', en: 'Discord Motion Design' },
    category: 'Motion',
    year: '2025',
    thumbnail: `${dir('Discord')}/Discord.png`,
    description: {
      fr: 'Exercice scolaire sur le logo Discord',
      en: "School assignment on the Discord logo"
    },
    details: { fr: 'Dans le cadre d’un exercice noté sur After Effects, j’ai réalisé l’animation du logo Discord en seulement 2 heures, afin d’évaluer ma progression et ma maîtrise du logiciel. L’objectif était de créer un motion design dynamique, fluide et professionnel dans un temps limité.', 
              en: 'As part of a graded After Effects exercise designed to assess our progress, I animated the Discord logo in only two hours. The goal was to create a dynamic, smooth, and professional motion design within a limited timeframe.' },
    role: { fr: ['Motion'], en: ['Motion'] },
    software: ['Photoshop', 'After Effect'],
    externalLink: 'https://drive.google.com/drive/folders/1VtFd3tnx-pGqTO-ugS00Hvi1537f91Zt?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'CheshireCat',
    title: { fr: 'Turnaround du Chat de Cheshire', en: 'The Cheshire Cat Turnaround' },
    category: 'Graphisme',
    year: '2026',
    thumbnail: `${dir('CheshireCat')}/CheshireCat.jpg`,
    description: {
      fr: 'Illustration du Chat de Cheshire',
      en: "Illustration of the Cheshire Cat"
    },
    details: { fr: 'Dans le cadre d’un exercice de création d’une histoire avec une morale et une touche d’humour, j’ai choisi de travailler autour de l’univers d’Alice au pays des merveilles. Le Chat du Cheshire et un second personnage du même univers ont ainsi été intégrés à une histoire originale mêlant narration, humour et message moral.', 
              en: 'As part of an exercise focused on creating a story with a moral and a touch of humor, I chose to work within the Alice in Wonderland universe. The Cheshire Cat and a second character from the same universe were incorporated into an original story combining storytelling, humor, and a meaningful message.' },
    role: { fr: ['Illustration'], en: ['Illustration'] },
    software: ['Illustrator'],
    externalLink: 'https://drive.google.com/drive/folders/16U8YOFB_W3CQ45yQA6L_m_YLLnRXdVgf?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'Braconnage',
    title: { fr: 'Composition affiche de sensibilisation', en: 'Awareness-Raising Poster Design' },
    category: 'Graphisme',
    year: '2024',
    thumbnail: `${dir('Braconnage')}/Braconnage.jpg`,
    description: {
      fr: 'Une composition sur le thème du Braconnage',
      en: "A composition based on the theme of poaching"
    },
    details: { fr: 'Dans le cadre d’un projet réalisé en binôme, nous devions choisir une palette de couleurs et une thématique commune. Nous avons choisi le thème du braconnage, puis chacun a réalisé individuellement une composition visant à sensibiliser le public aux conséquences du braconnage à travers une approche graphique et engagée.', 
              en: 'As part of a pair project, we had to choose a color palette and a common theme. We chose the topic of poaching, and each of us then created an individual composition aimed at raising awareness of the consequences of poaching through a graphic and impactful approach.' },
    role: { fr: ['Illustration', 'Composition'], en: ['Illustration', 'Composition'] },
    software: ['Photoshop'],
    externalLink: 'https://drive.google.com/drive/folders/1bJKNIE5_8bG9n_PgOAD89Je8R63RUCbH?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'Blason',
    title: { fr: 'Dessin d un blason', en: 'Coat of arms design' },
    category: 'Autres',
    year: '2024',
    thumbnail: `${dir('Blason')}/Blason.jpg`,
    description: {
      fr: 'Dessin réflexif sur soi-même',
      en: "A self-reflective drawing"
    },
    details: { fr: 'Un exercice de réflexion personnelle où je devais répondre uniquement à travers le dessin à quatre questions : Comment je me vois ? Ce que je ne veux pas devenir ? Ce que je pense des autres ? Et ce que je veux pour mon avenir ?', 
              en: 'A personal self-reflection exercise where I had to answer four questions exclusively through drawing: How do I see myself? What do I not want to become? What do I think of others? And what do I want for my future?' },
    role: { fr: ['Illustration'], en: ['Illustration'] },
    //software: ['Photoshop'],
    externalLink: 'https://drive.google.com/drive/folders/19tLnUDQLPWwewee3r0At0jjts_fwg5KZ?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
   {
    id: 'AliceInWonderland',
    title: { fr: 'Animation Alice aux pays des merveilles', en: '“Alice in Wonderland Animation' },
    category: 'Animation',
    year: '2026',
    thumbnail: `${dir('AliceInWonderland')}/AliceInWonderland.png`,
    description: {
      fr: 'Animation inspiré d un univers fantaisiste.',
      en: "An animation inspired by a fantasy world"
    },
    details: { fr: 'Exercice d’animation consistant à créer un scénario avec une morale, traité sur un ton humoristique. J’ai choisi d’aborder le thème de l’acceptation de soi, à travers l’univers fantaisiste d’Alice au pays des merveilles. J’ai ainsi mis en scène le Chapelier Fou et le Chat du Cheshire dans un style cartoon.', 
              en: 'An animation exercise focused on creating a story with a moral, told in a humorous way. I chose to explore the theme of self-acceptance, using the whimsical universe of Alice in Wonderland. I featured the Mad Hatter and the Cheshire Cat, illustrated in a cartoon style.' },
    role: { fr: ['Illustration', 'Animation', 'Motion', 'Script'], en: ['Illustration', 'Animation', 'Motion', 'Script'] },
    software: ['Illustrator' , 'After Effect', 'Character Animator', 'Premiere Pro'],
    externalLink: 'https://drive.google.com/drive/folders/1e3MgILpx0-ZjtaY6_57jCcc-MET_LY7j?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: 'AfficheJO2025',
    title: { fr: 'Affiche JO 2025', en: '2025 Olympic Games Poster' },
    category: 'Graphisme',
    year: '2024',
    thumbnail: `${dir('AfficheJO2025')}/AfficheJO2025.jpg`,
    description: {
      fr: 'Création d une affiche promotionnelle des JO',
      en: "Design of a promotional poster for the Olympic Games"
    },
    details: { fr: 'Affiche réalisée dans le cadre du cours d’Esthétique, avec pour thème les JO 2025 dans notre ville de résidence. J’ai choisi Arras, en mettant en avant son beffroi comme élément central. La composition reprend les couleurs du drapeau français, accompagnées de sportifs, du coq français et de différents drapeaux sur des podiums pour évoquer l’esprit olympique.', 
              en: 'Poster created as part of an Aesthetics course, based on the theme of the 2025 Olympic Games in our hometown. I chose Arras, featuring its belfry as the central element. The composition uses the French flag colors, along with athletes, the French rooster, and various flags on podiums to represent the Olympic spirit.' },
    role: { fr: ['Illustration'], en: ['Illustration'] },
    software: ['Illustrator'],
    externalLink: 'https://drive.google.com/drive/folders/1CCgvnViQ97UpJkUK4u2BuHDE4V60O_zw?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  },
  {
    id: '3D',
    title: { fr: '3D', en: '3D' },
    category: '3D',
    year: '2025',
    thumbnail: `${dir('3D')}/3D.jpg`,
    description: {
      fr: 'Composition, Optimisation, Texturisation et Modélisation',
      en: "Composition, Optimization, Texturing, and Modeling"
    },
    details: { fr: 'Dans le cadre de projets personnels, je conçois des objets en 3D, de leur modélisation à leur optimisation et leur texturisation, afin de développer ma maîtrise des différentes étapes de création 3D.', 
              en: 'As part of personal projects, I create 3D assets, from modeling to optimization and texturing, to develop my skills across the different stages of 3D creation.' },
    role: { fr: ['Modelisation'], en: ['Modelisation'] },
    software: ['Blender', 'Substance Painter'],
    externalLink: 'https://drive.google.com/drive/folders/1fC8yCP2EDM5mWbzRsZRNaLHqHdL9hnl-?usp=sharing',
    linkLabel: { fr: 'Voir le contenu', en: 'View the content' },
  }
]
