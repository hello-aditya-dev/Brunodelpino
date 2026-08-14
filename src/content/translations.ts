/**
 * Static translation dictionaries (EN / ES).
 *
 * Rules (CONTENT + DATA_MODEL):
 *  - No runtime machine translation.
 *  - Team names, Bruno's name, official championship name and circuit names
 *    are NOT translated.
 *  - Locale is persisted client-side; must not cause hydration mismatch
 *    (server renders default EN, client upgrades after mount).
 */
export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      season: "Season",
      career: "Career",
      media: "Media",
      partners: "Partners",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      language: "Language",
    },
    hero: {
      tagline: "16 / ESP",
      championship: "FIA Formula 3",
      team: "Van Amersfoort Racing",
      year: "2026",
      scroll: "Scroll",
    },
    opening: {
      presents: "Independent website concept",
    },
    season: {
      title: "The Season",
      sub: "A season in motion.",
      complete: "Complete",
      next: "Next",
      upcoming: "Upcoming",
      home: "Home",
      sprint: "Sprint",
      feature: "Feature",
      qualifying: "Qualifying",
      points: "pts",
      viewDetail: "View season detail",
    },
    melbourne: {
      index: "01",
      title: "Melbourne",
      label: "First F3 win",
      sprint: "Sprint",
      sprintResult: "P1",
      feature: "Feature",
      featureResult: "P4",
      fastestLap: "Fastest lap point",
      note: "Maiden FIA Formula 3 victory. VAR 1–2.",
    },
    current: {
      title: "Current",
      year: "2026",
      championship: "Championship",
      points: "Points",
      win: "Win",
      podiums: "Podiums",
      car: "Car",
      lastVerified: "Last verified",
      snapshot: "14 Aug 2026",
    },
    road: {
      title: "The Road",
      sub: "Karting to Formula 3.",
      viewCareer: "View career",
    },
    madrid: {
      title: "Madrid",
      dates: "11–13.09.26",
      home: "Home",
      line: "The season comes home.",
      countdown: "Countdown to the finale",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      live: "Madrid weekend",
      liveNote: "The finale is underway.",
      archive: "Finale complete",
      archiveNote: "The 2026 season has concluded.",
      testNote: "MADRING official test · 24–25 Aug 2026",
      expanded: "Expanded finale format",
      expandedDetail: "Two qualifying sessions · one Sprint · two Feature Races",
    },
    trackside: {
      title: "Trackside",
      credit: "Atmospheric concept imagery",
    },
    partners: {
      title: "Partners",
      privateNote:
        "Partner presentation is private in concept mode. Provisional partner identities are withheld pending management approval.",
      officialNote:
        "Approved partner identities will appear here after confirmation and brand-usage clearance.",
    },
    contact: {
      title: "Contact",
      intro:
        "Public management, press and driver-relations routes via Pro Racing Motorsport. No direct driver email is published.",
      source: "Source",
      social: "Social",
      mailto: "Write",
    },
    end: {
      title: "BRUNO DEL PINO",
      number: "16",
      disclaimer:
        "Independent website concept. Not affiliated with Bruno Del Pino, Van Amersfoort Racing or FIA Formula 3.",
      links: "Links",
    },
    footer: {
      concept: "Concept",
      notOfficial: "Not an official site",
    },
  },
  es: {
    nav: {
      season: "Temporada",
      career: "Trayectoria",
      media: "Media",
      partners: "Socios",
      contact: "Contacto",
      menu: "Menú",
      close: "Cerrar",
      language: "Idioma",
    },
    hero: {
      tagline: "16 / ESP",
      championship: "FIA Formula 3",
      team: "Van Amersfoort Racing",
      year: "2026",
      scroll: "Desplázate",
    },
    opening: {
      presents: "Concepto web independiente",
    },
    season: {
      title: "La Temporada",
      sub: "Una temporada en movimiento.",
      complete: "Completada",
      next: "Siguiente",
      upcoming: "Próxima",
      home: "Casa",
      sprint: "Sprint",
      feature: "Feature",
      qualifying: "Clasificación",
      points: "pts",
      viewDetail: "Ver detalle de temporada",
    },
    melbourne: {
      index: "01",
      title: "Melbourne",
      label: "Primera victoria en F3",
      sprint: "Sprint",
      sprintResult: "P1",
      feature: "Feature",
      featureResult: "P4",
      fastestLap: "Punto por vuelta rápida",
      note: "Primera victoria en FIA Formula 3. VAR 1–2.",
    },
    current: {
      title: "Actual",
      year: "2026",
      championship: "Campeonato",
      points: "Puntos",
      win: "Victoria",
      podiums: "Podios",
      car: "Coche",
      lastVerified: "Verificado",
      snapshot: "14 ago 2026",
    },
    road: {
      title: "El Camino",
      sub: "Del karting a la Fórmula 3.",
      viewCareer: "Ver trayectoria",
    },
    madrid: {
      title: "Madrid",
      dates: "11–13.09.26",
      home: "Casa",
      line: "La temporada vuelve a casa.",
      countdown: "Cuenta atrás hacia la final",
      days: "Días",
      hours: "Horas",
      minutes: "Min",
      seconds: "Seg",
      live: "Fin de semana de Madrid",
      liveNote: "La final está en marcha.",
      archive: "Final completada",
      archiveNote: "La temporada 2026 ha concluido.",
      testNote: "Test oficial MADRING · 24–25 ago 2026",
      expanded: "Formato final ampliado",
      expandedDetail: "Dos clasificaciones · un Sprint · dos Feature Races",
    },
    trackside: {
      title: "En Pista",
      credit: "Imágenes atmosféricas de concepto",
    },
    partners: {
      title: "Socios",
      privateNote:
        "La presentación de socios es privada en modo concepto. Las identidades provisionales de socios se ocultan pendientes de aprobación.",
      officialNote:
        "Las identidades aprobadas de socios aparecerán aquí tras la confirmación y autorización de uso de marca.",
    },
    contact: {
      title: "Contacto",
      intro:
        "Rutas públicas de dirección, prensa y relaciones con el piloto vía Pro Racing Motorsport. No se publica email directo del piloto.",
      source: "Fuente",
      social: "Social",
      mailto: "Escribir",
    },
    end: {
      title: "BRUNO DEL PINO",
      number: "16",
      disclaimer:
        "Concepto web independiente. No afiliado con Bruno Del Pino, Van Amersfoort Racing ni FIA Formula 3.",
      links: "Enlaces",
    },
    footer: {
      concept: "Concepto",
      notOfficial: "No es un sitio oficial",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];
