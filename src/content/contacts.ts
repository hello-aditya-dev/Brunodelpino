/**
 * Public management / press contacts — sourced from Pro Racing Motorsport.
 * Source: https://www.proracingmotorsport.com/contact/
 *
 * No direct Bruno email is invented.
 * Concept mode: mailto links only, no backend contact form.
 */
export type Contact = {
  role: string;
  roleEs: string;
  name: string;
  email: string;
  organization: string;
  sourceUrl: string;
};

export const contacts: Contact[] = [
  {
    role: "Driver / Team Relations & Social",
    roleEs: "Relaciones con piloto / equipo y social",
    name: "Sara Smera",
    email: "sara@proracingmotorsport.com",
    organization: "Pro Racing Motorsport",
    sourceUrl: "https://www.proracingmotorsport.com/contact/",
  },
  {
    role: "Press & Media",
    roleEs: "Prensa y medios",
    name: "Mirko Borghesi",
    email: "media@proracingmotorsport.com",
    organization: "Pro Racing Motorsport",
    sourceUrl: "https://www.proracingmotorsport.com/contact/",
  },
  {
    role: "Management",
    roleEs: "Dirección",
    name: "Gianluca Spoletini",
    email: "gs@proracingmotorsport.com",
    organization: "Pro Racing Motorsport",
    sourceUrl: "https://www.proracingmotorsport.com/contact/",
  },
];

export const social = {
  instagram: "https://instagram.com/_brunodelpino",
  instagramHandle: "@_brunodelpino",
};

/**
 * Provisional partner names found in Bruno's public 2026 LinkedIn post.
 * Hidden by default unless siteConfig.showProvisionalPartners === true.
 * Source: https://es.linkedin.com/in/bruno-del-pino-ventos-889977321
 */
export const provisionalPartners = [
  { name: "SABINA ESTATES" },
  { name: "Mobility-Centro RACC" },
];
