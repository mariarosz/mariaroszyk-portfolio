import type { Site, Writing } from "./types";

export const site: Site = {
  name: "Maria Roszyk",
  role: "Front-end engineer and art historian",
  location: "San Francisco Bay Area",
  email: "hello@mariaroszyk.dev",
  github: "https://github.com/mariarosz",
  linkedin: "https://www.linkedin.com/in/maria-roszyk/",
  headline:
    "Interfaces built by someone who spent ten years asking *what technology does to a person.*",
  lede:
    "Front-end engineer (React, Next.js, React Native, TypeScript) and art historian. Before code I made prints, textiles, photogrammetry and VR, and the question stayed the same: how do tools shape the body, attention and care.",
  about: [
    "I trained as an art historian and printmaker in Poznań, then moved through digital art, VR and the School for Poetic Computation into front-end engineering. At Inhabit I migrated a production dashboard from Vue to React and TypeScript and onboarded two engineers along the way. Since then I have shipped two apps to the App Store: Keeper, for couples, and a rebuilt BabySteps, for families.",
    "I work with fabric scraps, wildflowers and code. Care, faith and materiality are the centre of what I make, in a gallery and in a design system alike. I am a mother of four and I think a lot about who will grow up with the tools we build.",
    "I also started a scouting community that grew from zero to 120 children in five years. It taught me more about leading people than any job.",
  ],
  recognition: [
    { what: "Special mention, OKSSa National Sacred Art Competition (Mary’s Way)", year: "2021" },
    { what: "Kyoto Art Innovation Award, prize for excellence (One Minute Stories)", year: "2019" },
    { what: "Creating Reality Hackathon, USC Los Angeles: category winner, HTC Vive prize", year: "2018" },
    { what: "VR Hackathon Poznań: X3D Innovation Award", year: "2018" },
    { what: "Best master’s thesis, Gessel Foundation for Zachęta National Gallery of Art", year: "2018" },
  ],
  education: [
    { what: "Codeworks, software engineering, Barcelona", year: "2022" },
    { what: "School for Poetic Computation, New York", year: "2018" },
    { what: "MA Art History, Adam Mickiewicz University, Poznań", year: "2017" },
    { what: "BA Graphic Arts (printmaking), University of Arts, Poznań", year: "2017" },
  ],
};

export const writing: Writing[] = [
  {
    slug: "art-history-interfaces-ai",
    title: "What art history taught me about building interfaces for AI",
    summary: "On attention, form and why a well-set page is an ethical act.",
    status: "coming",
  },
  {
    slug: "motherly-work-in-technology",
    title: "Motherly work in technology",
    summary:
      "Care, attention and responsibility for someone weaker than you, as a way of building tools. Raising four children next to the machines.",
    status: "coming",
  },
];
