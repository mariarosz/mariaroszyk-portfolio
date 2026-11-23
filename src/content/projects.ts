import type { Img, Project } from "./types";
import sizes from "./image-sizes.json";

const S = sizes as unknown as Record<string, [number, number]>;
const img = (key: string, alt: string): Img => {
  const [w, h] = S[key] ?? [1600, 1067];
  return { src: `/images/${key}.webp`, alt, w, h };
};

export const projects: Project[] = [
  {
    slug: "keeper",
    title: "Keeper",
    kind: "product",
    year: "2025–2026",
    sortYear: 2026,
    featured: true,
    tagline: "A 90-day programme for couples in crisis, as an iOS app. Shipped to the App Store.",
    role: "Product & front-end engineer",
    outcome:
      "Designed, built and shipped an iOS app for couples: a 90-day guided programme with daily audio and an LLM-powered dialog.",
    lead: "Ninety days, one vow signed with a finger, and a three-minute spark every morning.",
    stack: ["React Native", "Expo", "TypeScript", "LLM dialog", "Audio"],
    facts: [
      { label: "Role", value: "Product, design and front-end; built with Adam Roszyk under the 100 Vision Apps brand" },
      { label: "Platform", value: "iOS, React Native (Expo), TypeScript" },
      { label: "Status", value: "Shipped to the App Store in 2026; closed after a market test" },
      { label: "Images", value: "Illustration direction and selection by me, generated with AI image models and finished by hand" },
    ],
    cover: img("keeper/home", "Keeper home screen: today’s Daily Spark, a 30-day challenge and the weekly check-in"),
    gallery: [
      img("keeper/journey", "The three-month journey: Stabilization, Deep Work, New Foundations"),
      img("keeper/vow", "Read the Vow: a wax seal and a signature drawn with a finger"),
      img("keeper/cover-1", "Onboarding cover illustration, part one"),
      img("keeper/cover-3", "Onboarding cover illustration, part three"),
      img("keeper/seal", "The Keeper wax seal"),
    ],
    sections: [
      {
        heading: "Challenge: a marriage is not a habit to optimise",
        paragraphs: [
          "Couples who have reached the point where every conversation turns into a fight do not need another chat app. They need a structure that holds for longer than a good evening, and that survives real life with small children. Most relationship apps sell streaks and gamified closeness; the couples we talked to found that insulting.",
          "The brief we gave ourselves: ninety days, a clear arc, a daily unit short enough that nobody can fail it, and a vocabulary that treats the relationship as something held in trust.",
        ],
      },
      {
        heading: "Role: everything you can see, and the code behind it",
        paragraphs: [
          "Two of us built Keeper under the 100 Vision Apps brand. I owned product and design end to end (programme structure, content system, illustration direction, onboarding, every screen) and the front end in React Native with Expo and TypeScript: navigation, state, audio playback, the signature canvas and the integration with the language model. Adam built the backend and the business side.",
        ],
      },
      {
        heading: "Insight: content before software, and three minutes, not ten",
        paragraphs: [
          "The first months were spent on the programme itself, not the app. Three phases emerged (Stabilization, Deep Work, New Foundations), each with four modules: the biology of anger and language detox before the anatomy of conflict; repair and forgiveness before mission and rituals. Only when the arc held on paper did it become screens.",
          "The second decision came from our own kitchen: the daily unit is a three-minute audio “spark”, because with a newborn three minutes is what you have. Around it sit 30-day challenges, a weekly check-in, a monthly dialogue and an emergency mode for the moment a fight starts.",
        ],
      },
      {
        heading: "Process: a vow before the first lesson",
        paragraphs: [
          "Onboarding ends with a vow the couple signs with a finger, sealed with wax on the screen. It is the most-discussed screen in the app and the one I defended hardest: a programme you have signed is a different programme. The illustrations followed the same logic, a warm, quiet world generated with AI image models under my direction and finished by hand, so that every module had a face.",
          "The dialog feature uses a language model that knows where the couple is in the programme, so it answers inside the frame of the week rather than as a generic therapist. Getting that right was mostly prompt and content work, and it taught me how much of an “AI feature” is editorial.",
        ],
      },
      {
        heading: "Outcome: shipped, tested, closed",
        paragraphs: [
          "We shipped Keeper to the App Store in spring 2026, ran it as a market test, and closed it. What I keep is the full loop from illustration and content design to a typed React Native codebase with an AI feature in production, and a clearer sense of how much of a relationship app has to be content before it can be software.",
        ],
      },
    ],
    body: [
      "Keeper is an app for couples who have reached the point where every conversation turns into a fight. It gives them a structure for ninety days: a month of stabilisation (the biology of anger, language detox, first steps of grace), a month of deep work (the anatomy of conflict, repair and forgiveness, needs and languages) and a month of new foundations (friendship, body and gift, mission and rituals, the daily covenant).",
      "The daily unit is a three-minute audio “spark”, so the programme survives real life with small children. Around it sit 30-day challenges, a weekly check-in, a monthly dialogue, an emergency mode for the moment a fight starts, and a dialog feature backed by a language model that knows where the couple is in the programme.",
      "I owned the whole surface: the content system and its illustrations, the onboarding that ends with a vow signed on the screen, navigation and state, audio playback, and the model integration. The vocabulary of the app (sanctuary, covenant, vow, grace) is deliberate: it treats a marriage as something held in trust, not as a product to optimise.",
      "We shipped Keeper to the App Store in spring 2026 and closed it after a market test. What I keep from it is the full loop from illustration and content design to a typed React Native codebase with an AI feature in production, and a clearer sense of how much of a relationship app has to be content before it can be software.",
    ],
  },
  {
    slug: "babysteps",
    title: "BabySteps",
    kind: "product",
    year: "2022 · 2026",
    sortYear: 2026,
    featured: true,
    tagline: "A memory journal for families: one timeline per child. Web app in 2022, rebuilt as a React Native app and published on the App Store in 2026.",
    role: "Designer & front-end engineer",
    outcome:
      "A memory journal for families, built twice: a web app with a team of three in 2022, then a solo React Native rebuild published on the App Store in 2026.",
    lead: "Hold on to the little moments: milestones, letters and photographs, one child at a time.",
    stack: ["React Native", "Expo", "Next.js", "TypeScript", "Firebase"],
    facts: [
      { label: "2022", value: "Web app, team of three; React, TypeScript, Firebase (Auth, Firestore, Functions), Cloudinary; 135 commits" },
      { label: "2026", value: "Rebuilt solo as a React Native / Expo app for iOS and Android, with a Next.js landing page; published on the App Store" },
      { label: "Role", value: "UI design in Figma, front end, Firebase API; 2026 version end to end" },
    ],
    cover: img("babysteps/store-1", "BabySteps: Hold on to the little moments. A child’s journal on a phone"),
    gallery: [
      img("babysteps/store-2", "BabySteps: adding a moment with a photograph and a note"),
      img("babysteps/store-3", "BabySteps: milestones by month"),
    ],
    body: [
      "BabySteps began in 2022 as a web application for parents to track a child’s development: a timeline by month, entries with a title, notes, a date and a photograph, and a separate journal for each child. I designed the interface and the interactions in Figma, built the client in React and TypeScript and implemented the API on Firebase (Firestore and Authentication) with Cloudinary for images, in a team of three.",
      "In 2026 I rebuilt it from scratch as a mobile app in React Native and Expo for iOS and Android, with a Next.js landing page, and published it on the App Store. The second version is quieter: a warm palette, serif headings, a single large photograph per entry, and the child’s age computed from the birth date so that every moment is placed on a line that keeps growing.",
      "It is the project that made me want to build tools for families. The question it asks is simple and I still do not think it is solved: how do you keep a record of a childhood without turning the childhood into content?",
    ],
    links: [{ label: "Code (2022)", href: "https://github.com/mariarosz/BabySteps" }],
  },
  {
    slug: "inhabit",
    title: "Inhabit (Bluetent)",
    kind: "product",
    year: "2023–2024",
    sortYear: 2024,
    tagline: "Migrated Bluetent’s internal site-building dashboard from Vue.js to React, TypeScript and Tailwind.",
    role: "Frontend developer",
    outcome:
      "Migrated Bluetent’s site-building dashboard from Vue.js to React, TypeScript and Tailwind: about 35 typed components, in a six-person team.",
    lead: "An internal tool that non-technical people use to assemble websites. Rebuilt in a new stack without stopping the people who use it.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vue.js"],
    facts: [
      { label: "Role", value: "Frontend Developer, six-person team" },
      { label: "Product", value: "Bluetent by Inhabit: direct-booking websites for vacation-rental companies" },
      { label: "Scope", value: "Component migration Vue → React + TypeScript + Tailwind; onboarding of two engineers" },
    ],
    cover: { src: "/images/inhabit/wireframe.svg", alt: "Ink-line wireframe of a site-building dashboard, Vue to React, with a blue tent and a holiday cabin in the page cards; the real tool is not public", w: 1200, h: 900 },
    gallery: [],
    sections: [
      {
        heading: "Challenge: two stacks, one tool everyone depends on",
        paragraphs: [
          "Bluetent builds direct-booking websites for vacation-rental companies, and its team assembles those sites in an internal dashboard. The dashboard was written in Vue while the rest of the stack was moving to React, so a six-person team was maintaining two worlds and every new hire had to learn both. The tool could not stop working for a day: people were publishing client sites with it.",
        ],
      },
      {
        heading: "Role: component by component, from designs to production",
        paragraphs: [
          "I joined as a frontend developer and took the migration of the dashboard’s components to React, TypeScript and Tailwind, working from designs to production and reviewing with the team. Halfway through, two new engineers joined and I onboarded them.",
        ],
      },
      {
        heading: "Insight: a migration is not a rewrite",
        paragraphs: [
          "The syntax was never the hard part. The hard part was the hidden assumptions in the old code: form state, validation, edge cases that existed because a real person had hit them. Each component had to be understood together with the people who used the tool every day before it could be rewritten as a typed, reusable React component. The migration became a conversation with the team as much as with the code.",
        ],
      },
      {
        heading: "Process: one simple component, then independence",
        paragraphs: [
          "I onboarded the two new engineers by pairing on one simple component each, then reviewing their independent work. Within two weeks both were shipping on their own. The same pattern worked for the migration itself: small, reviewable moves rather than a big switch.",
        ],
      },
      {
        heading: "Outcome: one stack",
        paragraphs: [
          "The team ended on one stack, with a typed component set instead of loose Vue components. The screenshots are not public, which is why this page has none. The dashboard belongs to the same family as the tools marketing teams use to publish pages: letting people compose a site without touching code is a problem I keep coming back to.",
        ],
      },
    ],
    body: [
      "Bluetent builds direct-booking websites for vacation-rental companies, and its team assembles those sites in an internal dashboard. The dashboard was written in Vue while the rest of the stack was moving to React, so a six-person team was maintaining two worlds and every new hire had to learn both.",
      "I moved the dashboard’s components to React, TypeScript and Tailwind, turning loose Vue components into a typed, reusable set and working from designs to production. The hard part was never the syntax; it was the hidden assumptions in the old code (form state, validation, edge cases) that had to be understood together with the people who used the tool every day.",
      "Halfway through, two new engineers joined. I onboarded them by pairing on one simple component each, then reviewing their independent work; within two weeks both were shipping on their own. The team ended on one stack.",
      "The screenshots are not public, which is why this page has none. The dashboard belongs to the same family as the content tools marketing teams use to publish pages: the problem of letting people compose a site without touching code is one I keep coming back to.",
    ],
  },
  {
    slug: "dosyp",
    title: "Dosyp.pl",
    kind: "product",
    year: "2019–2020",
    sortYear: 2020,
    tagline: "Co-founded an office-snack subscription for tech companies: our own nut mixes, 40 subscribing offices. Brand, packaging, website and client communication.",
    role: "Co-founder & designer",
    outcome:
      "Co-founded a snack subscription for tech offices in Poland: our own nut mixes, delivered to 40 companies. I designed the brand, packaging and website, and ran communication with clients.",
    lead: "Several tons of nut mixes a month, delivered to forty offices. Everything you could see or read was mine to make.",
    stack: ["Brand identity", "Packaging", "Web design", "B2B ordering flow", "Client communication"],
    facts: [
      { label: "Role", value: "Co-founder; brand, packaging, web and UX, and communication with clients" },
      { label: "Scale", value: "40 companies on subscription, mostly software houses and tech companies in Poland; several tons of snack mixes a month" },
      { label: "Status", value: "Closed in 2020, when the pandemic moved offices to remote work" },
    ],
    cover: img("dosyp/dispensers", "Two Dosyp.pl dispensers with nut mixes on a wooden crate in an office kitchen"),
    gallery: [
      img("dosyp/pouring", "Filling a cup from a Dosyp.pl dispenser"),
      img("dosyp/office", "A team at a kitchen table next to the dispenser"),
      img("dosyp/bowl", "A bowl of the FIT mix next to a laptop"),
      img("dosyp/flyer", "The Dosyp.pl offer: “Zachwyć swoich pracowników!”, two mixes, FIT and CALIFORNIA, and a free trial"),
      img("dosyp/sketch", "First sketches for the Dosyp.pl logo: raised hands and hand lettering, 2019"),
    ],
    body: [
      "Dosyp.pl delivered mixes of nuts and dried fruit to offices across Poland on a subscription. It was our own food product, made by us rather than resold, and I designed its entire visible layer: the brand identity, the labels and packaging, the website and the ordering flow that office managers used to set up and change their deliveries.",
      "I was also responsible for communication with clients. We aimed it at one audience on purpose: tech companies and software houses. Forty of them subscribed and had the mixes delivered to their office kitchens.",
      "It was my first time designing for a business I also had to run, and it taught me the difference between a beautiful label and a label that survives a warehouse. The model depended on people being in the office: when the pandemic moved our clients to remote work in 2020, the project closed.",
      "The offer was simple: a dispenser for the office kitchen and a monthly delivery of two mixes, FIT (fibre, cranberry, almonds, coconut, pumpkin and sunflower seeds) and CALIFORNIA (peanuts, almonds, cashews, raisins, M&Ms), with a free first month. The brand started from the sketch at the end of the gallery: raised hands for energy, motivation and focus, and the name lettered by hand until it sat right.",
    ],
  },
  {
    slug: "spatial-web-lab",
    title: "Spatial Web Lab",
    kind: "product",
    year: "2019",
    sortYear: 2019,
    tagline: "Sites for Magic Leap One: pull a book off a scanned shelf and read its review.",
    lead: "What is a blog post when the reader can walk around it?",
    stack: ["HTML/JS for Helio (Magic Leap One)", "Photogrammetry", "3D"],
    facts: [
      { label: "Flagship", value: "“12 Books on Art and Food”: an interactive essay built on a photogrammetry model of a bookshop table" },
      { label: "Platform", value: "Helio browser, Magic Leap One" },
    ],
    cover: img("spatial-web-lab/table", "Seen through Magic Leap One: the review “Cooking with Artists: 12 Books on Art and Food” floating above a photogrammetry scan of a bookshop table"),
    gallery: [
      img("spatial-web-lab/post", "The blog post as a spatial page: title, introduction and a grid of twelve book covers"),
      img("spatial-web-lab/review", "Pulling one book forward opens its review: Mina Stone, Cooking for Artists"),
    ],
    body: [
      "In 2019 I built a series of experimental sites for the Helio browser on Magic Leap One, when the “spatial web” was briefly a real thing. The flagship piece, “Cooking with Artists: 12 Books on Art and Food”, was a blog post with twelve short reviews, laid out above a photogrammetry scan of a bookshop table. The reader pulled a book forward to open its review. The photographs here are captures from the headset itself, taken in February 2019.",
      "The work was a test of a simple question: which reading habits survive when a page becomes a place. Most of the conventions of a web page (scroll, hierarchy, a single column of attention) turned out to be more fragile than I expected, and the ones that survived were the ones that came from print.",
    ],
    links: [{ label: "Project on Behance", href: "https://www.behance.net/gallery/159030497/Spatial-Web-Lab" }],
  },
  {
    slug: "memories",
    title: "Memories",
    kind: "product",
    year: "2018",
    sortYear: 2018,
    tagline: "Phone-to-VR photogrammetry pipeline and a Vive experience. Creating Reality Hackathon, USC Los Angeles: category winner.",
    role: "Category winner, Creating Reality Hackathon 2018",
    outcome:
      "A phone-to-VR photogrammetry pipeline built by five people in 48 hours. Category winner at the Creating Reality Hackathon, USC Los Angeles.",
    lead: "Film a person on your phone, get a 3D model back, step into the scene.",
    stack: ["Photogrammetry (Agisoft, Colmap, OpenMVS)", "Blender", "Unity + SteamVR", "Python, C#"],
    facts: [
      { label: "Award", value: "Category winner, Content Production, and HTC Vive prize; Creating Reality Hackathon, USC, March 2018" },
      { label: "Team", value: "reAnimators, five people; I was the visual artist: captured the scenes and cleaned the meshes for rigging and Unity" },
    ],
    cover: {
      src: "https://i.ytimg.com/vi/bb_T62RgTtY/maxresdefault.jpg",
      alt: "Still from the demo video: a photogrammetry scan of people around a table, standing in a VR room with snowy mountains outside",
      w: 1280,
      h: 720,
    },
    video: { youtube: "bb_T62RgTtY", title: "Memories, demo video from the Creating Reality Hackathon" },
    gallery: [],
    body: [
      "Memories was an open-source photogrammetry pipeline with a VR experience on top. You filmed a still scene or a person on a phone, uploaded the video to a self-hosted server, and got a 3D model back. Three scenes captured during the hackathon could then be entered in VR, one of them with a rigged, animated character made from a single smartphone video. To move between scenes you leaned into them.",
      "We filmed on our phones, pulled frames from the video and built the models in Agisoft PhotoScan, with a prototype of the open pipeline in COLMAP, OpenMVS and OpenMVG behind it. The models were cleaned in Blender, the characters auto-rigged in Mixamo, and the scenes rendered in Unity for the HTC Vive with SteamVR and VRTK, a toolkit the team learned in a day.",
      "Not much went smoothly: a failing Vive adapter, people captured in uneven light, meshes too heavy for the headset, Mixamo refusing models that were not clean enough. Regular stand-ups and demos kept five people moving in one direction.",
      "I was the visual artist on the team: I captured the scenes and the people and cleaned the meshes in Blender before rigging and import into Unity. The lesson the team took away, and that I still use, is that an early, low-fidelity proof of concept beats a complete toolkit when the clock is running.",
    ],
    links: [{ label: "Project on Devpost", href: "https://devpost.com/software/memories-2u9xkn" }, { label: "Code", href: "https://github.com/creatingrealitysubmissions/reanimators" }, { label: "About the hackathon", href: "https://realityvirtuallyhack.com/" }],
  },
  {
    slug: "code-for-unexpected-events",
    title: "Code for Unexpected Events",
    kind: "product",
    year: "2018",
    sortYear: 2018,
    tagline: "A peer-to-peer website on the Dat protocol documenting exchanges with strangers in New York.",
    lead: "Excuse me, do you have anything unwanted?",
    stack: ["Beaker Browser", "Dat protocol", "HTML/CSS/JS"],
    facts: [
      { label: "Where", value: "School for Poetic Computation, Code Societies, New York, 2018; shown at Prime Produce" },
      { label: "Code", value: "github.com/mariarosz/Hacking-reality-poetically-NYC-07-18" },
    ],
    cover: img("code-for-unexpected-events/cover", "A still from the walks through New York"),
    gallery: [img("code-for-unexpected-events/1", "The peer-to-peer site in Beaker Browser")],
    body: [
      "I walked New York asking strangers one question, “Excuse me, do you have anything unwanted?”, and documented each small exchange on a peer-to-peer website that existed only while someone was hosting it. The site ran on the Dat protocol in Beaker Browser; when the last peer closed the tab, it was gone.",
      "The project is about coding for serendipity: intimacy over reach, ephemerality over permanence, mutual aid in both the social and the technical protocol. It was made at the School for Poetic Computation, which is where I learned to treat code as a material with its own ethics.",
    ],
    links: [{ label: "Code", href: "https://github.com/mariarosz/Hacking-reality-poetically-NYC-07-18" }],
  },
  // Art
  {
    slug: "play-well",
    title: "Play Well",
    kind: "art",
    year: "2023",
    sortYear: 2023,
    tagline: "Beeswax building blocks with seeds and soil, next to embroidered PRL wallpaper. Visitors rearrange.",
    lead: "Nearby nature, tamed through hours of play, becomes a bond that lasts.",
    stack: ["Participatory installation", "Beeswax, seeds, plants, soil", "Embroidered vintage wallpaper"],
    facts: [{ label: "Shown", value: "“Przyśnił mi się wczoraj pusty las”, Galeria Duża Scena UAP, Poznań 2023" }],
    cover: img("play-well/cover", "A table of beeswax blocks with embedded seeds and plants"),
    gallery: [
      img("play-well/1", "Beeswax blocks, detail"),
      img("play-well/2", "Embroidered wallpaper with children at play"),
      img("play-well/3", "Installation view"),
    ],
    body: [
      "A set of beeswax building blocks embedding natural finds from my surroundings, next to a mass-produced riverside-landscape wallpaper overlaid with white embroidery of children at play. Visitors are invited to touch, stack and rearrange.",
      "The work reflects on how ordinary, nearby nature, tamed through hours of childhood play, forms a lasting bond with the environment, and sets intimacy and care against standardisation and reproduction.",
    ],
  },
  {
    slug: "marys-way",
    title: "Mary’s Way",
    kind: "art",
    year: "2021",
    sortYear: 2021,
    tagline: "Plant-dyed paper cut-outs and waxed plants arranged like a puzzle, from birth to the Cross.",
    lead: "As mothers we often become invisible to the world while being the whole world to the lives entrusted to us.",
    stack: ["Plant-dyed paper cut-outs", "Dried and waxed plants", "55 × 75 cm"],
    facts: [
      { label: "Award", value: "Special mention, OKSSa National Sacred Art Competition 2021" },
      { label: "Shown", value: "“Macierzyństwo Maryi”, Concordia Design, Wrocław 2021 · “Sancta Maria, Mater Dei”, Muzeum Drukarstwa, Nowy Targ 2023" },
    ],
    cover: img("marys-way/cover", "Mary’s Way, overall view"),
    gallery: [], // 1–3.webp in public/images/marys-way are Play Well photos; waiting for real documentation
    body: [
      "At first glance a girl’s herbarium: a diary of finds and small treasures in pastel, fragile notes on slightly crumpled sheets of paper arranged like a puzzle. The simple means are deliberate, an assent to ordinariness.",
      "The composition does not tell the viewer where to look; one browses frames from a life (birth, closeness, joys and anxieties) like an intruder. At the centre a yellow wreath of field flowers carries three readings at once: innocence, the apocalyptic crown of twelve stars, and the crown of thorns. The last card, bottom right, shows the bright figure of the Child settling into the shape of the Crucified: the sequence runs from birth to death, her way in his way.",
    ],
  },
  {
    slug: "one-minute-stories",
    title: "One Minute Stories",
    kind: "art",
    year: "2018–2019",
    sortYear: 2019,
    tagline: "AR portraits of strangers who held still for a minute, with the sound of the street where we met. Kyoto Art Innovation Award.",
    lead: "What does it mean to hold still for another person?",
    stack: ["Photogrammetry", "Augmented reality", "Field recording"],
    facts: [
      { label: "Award", value: "Kyoto Art Innovation Symposium 2019 (Kyoto University and Goldsmiths): prize for excellence, William Latham" },
      { label: "Process", value: "20 portraits over three months in Los Angeles; 50–200 frames each from a phone; Agisoft, Zephyr and Capturing Reality compared" },
    ],
    cover: img("one-minute-stories/cover", "A photogrammetry portrait of a stranger"),
    gallery: [img("one-minute-stories/1", "Portrait"), img("one-minute-stories/2", "Portrait in AR"), img("one-minute-stories/3", "Portrait")],
    body: [
      "3D portraits of people met on daily walks in Los Angeles, each asked to hold still for a long minute while a photogrammetry capture was made, then re-projected in AR with the sound of the street where we met. The piece treats the stranger’s stillness as an act of generosity and trust.",
      "The glitched surfaces are intended. Memory as an image is sharp; memory as it is lived is blurred, multi-dimensional, uncertain. One woman refused to be still, so her hands are missing from the model.",
    ],
    links: [{ label: "Process notes on Medium", href: "https://medium.com/@roszykmaria/people-in-los-angeles-f47c50099767" }],
  },
  {
    slug: "de-pl-intuitive-dictionary",
    title: "DE—PL Intuitive Dictionary",
    kind: "art",
    year: "2018",
    sortYear: 2018,
    tagline: "Poles and Germans translating each other’s words by intuition alone, mapped as network graphs.",
    lead: "The beauty of misunderstanding, and the possibility of a dialogue between two equally vulnerable subjects.",
    stack: ["Collaborative online translation", "Network graphs (Graph Commons)", "Prints, video"],
    facts: [{ label: "Shown", value: "Leipzig 2018 · Galeria Szewska and Curator’s Lab, Poznań 2021" }],
    cover: img("de-pl/cover", "Network graph of intuitive translations"),
    gallery: [img("de-pl/1", "Graph"), img("de-pl/2", "Graph"), img("de-pl/3", "Print")],
    body: [
      "Participants from Poland and Germany translated words between the two languages by intuition alone, without dictionaries. The contributions were mapped as network graphs and printed, revealing how meaning circulates between people as approximation and creative deviation.",
    ],
  },
  {
    slug: "stackoverflow-for-artists",
    title: "Stackoverflow for Artists",
    kind: "art",
    year: "2018",
    sortYear: 2018,
    tagline: "Stack Overflow’s peer-to-peer logic re-imagined as a framework for artistic collaboration. A picnic in Prospect Park.",
    role: "Workshop lead, School for Poetic Computation",
    outcome:
      "What would Stack Overflow look like without the scoreboard? A participatory workshop that borrowed its peer-to-peer logic for artists: a picnic, guided questions, and a hand-made tag cloud of shared interests. Knowledge-sharing that runs on curiosity, generosity and care rather than reward.",
    lead: "Knowledge-sharing in art can run on curiosity, generosity and care rather than reward and competition.",
    stack: ["Participatory workshop", "Wall installation"],
    facts: [{ label: "Where", value: "School for Poetic Computation, Code Societies; shown at Prime Produce, New York 2018" }],
    cover: img("stackoverflow-for-artists/cover", "Hand-made tag cloud on posters"),
    gallery: [img("stackoverflow-for-artists/1", "Workshop"), img("stackoverflow-for-artists/2", "Workshop"), img("stackoverflow-for-artists/3", "Posters"), img("stackoverflow-for-artists/5", "Detail")],
    body: [
      "Stack Overflow works because strangers answer each other’s questions for nothing but the pleasure of being useful, and then the site turns that into points. I wanted to keep the first half. The workshop took the structure of a question-and-answer community and rebuilt it for artists, who rarely have a place to ask “how did you do that?” without it sounding like competition.",
      "A picnic in Prospect Park, guided questions about intention and inspiration, and a hand-made tag cloud of shared interests on large posters: a social protocol instead of a platform. Drawing on cybernetics (feedback, not ranking), it proposed that knowledge-sharing in art can run on curiosity, generosity and care rather than reward.",
      "I keep coming back to it now that I build tools around language models: the question of what a system rewards, and whether help has to be scored to be real, is the same question in a workshop and in an interface.",
    ],
  },
  {
    slug: "feeding-instantly",
    title: "Feeding INSTANTLY",
    kind: "art",
    year: "2017–2019",
    sortYear: 2019,
    tagline: "Meals you can only eat with your eyes, made from what the day left behind.",
    lead: "Hunger mediated by image.",
    stack: ["Sculptural objects from waste", "Photography circulated online"],
    facts: [{ label: "Shown", value: "In guter Gesellschaft, Hamburg 2018 · SciArt Center “The Future of Food”, UsagiNY, New York 2019" }],
    cover: img("feeding-instantly/cover", "A grid of inedible meals"),
    gallery: [1, 2, 3, 5, 6, 8, 9].map((n) => img(`feeding-instantly/${n}`, "An inedible meal made from scraps")),
    body: [
      "Inedible “meals” made from fabric scraps, packaging waste and organic leftovers, photographed and posted in response to the visual economy of Instagram food photography. Made in each place I lived, so each series is shaped by local materials.",
      "Archive, performance and critique at once: a record of daily life, an aesthetic offering, and a meditation on the hunger that drives both consumption and creation in a media-saturated world.",
    ],
  },
  {
    slug: "bohemian-jewellery",
    title: "Bohemian Jewellery",
    kind: "art",
    year: "2017",
    sortYear: 2017,
    tagline: "Jewellery from the detritus of Prague streets, an AR lookbook, and a street sale until the police came.",
    lead: "How is value produced, and where does it show itself?",
    stack: ["Found objects", "Photogrammetry → 3D → AR lookbook", "Street performance"],
    facts: [{ label: "Where", value: "Prague, 2017" }],
    cover: img("bohemian-jewellery/cover", "Found-object jewellery"),
    gallery: [img("bohemian-jewellery/1", "AR lookbook"), img("bohemian-jewellery/2", "Jewellery"), img("bohemian-jewellery/3", "Street sale")],
    body: [
      "Jewellery assembled from the detritus of Prague streets, presented as an AR lookbook of spectral 3D jewels, then sold from a white cloth in the old town until the police approached. The project tests the social contract between legitimate commerce and improvised survival. It was also my first photogrammetry-to-app pipeline.",
    ],
  },
];

export const workProjects = projects.filter((p) => p.kind === "product");
export const artProjects = projects.filter((p) => p.kind === "art");
