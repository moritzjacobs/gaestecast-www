/**
 * All copy for the Gästecast landing page lives here. Edit freely — no
 * component code needs to change to update text, images, or list items.
 *
 * Anything marked "Platzhalter" is a stand-in and should be replaced before
 * launch (see PLACEHOLDERS.md-equivalent notes inline).
 */

export type NavLink = {
  label: string;
  href: string;
};

export const nav: NavLink[] = [
  { label: "Philosophie", href: "#philosophie" },
  { label: "Abgrenzung", href: "#abgrenzung" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Stimmen", href: "#stimmen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Kontakt", href: "#kontakt" },
];

export const hero = {
  eyebrow: "Ein akustisches Porträt eurer Hochzeit",
  headline: ["Fotos zeigen euren Tag.", "Ich lasse ihn noch einmal erzählen."],
  subtitle:
    "Keine sterilen Interviews, kein Retro-Telefon-Gästebuch – sondern die echten Stimmen, das Lachen und die Freudentränen eurer Lieblingsmenschen, professionell festgehalten und als emotionale Geschichte für immer bewahrt.",
  ctaLabel: "Jetzt Datum anfragen",
  ctaHref: "#kontakt",
  // Platzhalter-Foto, austauschen sobald echtes Bildmaterial vorliegt.
  image: {
    src: "https://picsum.photos/seed/gaestecast-hero/1200/1400",
    alt: "Platzhalterbild: Gäste im Gespräch auf einer Hochzeit",
  },
};

export const pillars = {
  title: "Die vollständige Erinnerung an euren Tag",
  intro:
    "Gästecast ist kein Ersatz für Fotografen oder Videografen. Es ist das fehlende Puzzleteil.",
  items: [
    {
      title: "Fotos",
      body: "Zeigen, wie euer Tag aussah. Sie halten die großen und kleinen optischen Momente für die Ewigkeit fest.",
      highlight: false,
    },
    {
      title: "Videos",
      body: "Zeigen, was passiert ist. Sie fangen die Bewegung, den Ablauf und die Dynamik eurer Feier ein.",
      highlight: false,
    },
    {
      title: "Gästecast",
      body: "Erzählt, wie sich der Tag angefühlt hat. Ich bewahre die Stimmen, die Geschichten und die echte Atmosphäre.",
      highlight: true,
    },
  ],
  quote:
    "Stimmen transportieren Dinge, die Bilder niemals einfangen können: das ehrliche Lachen der Oma, das leichte Zittern in der Stimme der Trauzeugin, die spontanen Insider eurer engsten Freunde. Jahre später besitzen genau diese Stimmen einen unschätzbaren emotionalen Wert.",
};

export const abgrenzung = {
  title: 'Warum Gästecast kein „Telefon-Gästebuch" ist',
  intro:
    "Ihr kennt vermutlich diese Audio-Gästebücher, bei denen ein altes Retro-Telefon in der Ecke steht, in das man nach dem Piepton spricht. Das ist nett – führt aber oft nur zu kurzen, befangenen oder rein feuchtfröhlichen 10-Sekunden-Sprüchen.",
  promiseLead: "Gästecast ist das genaue Gegenteil:",
  bullets: [
    {
      title: "Aktive Begleitung statt stummes Telefon",
      body: "Ich stehe nicht dekorativ am Rand, sondern mische mich als sympathischer Gast dezent unter eure Liebsten.",
    },
    {
      title: "Echte Gespräche statt gestellter Statements",
      body: "Durch Feingefühl und die richtigen Fragen bringe ich eure Gäste ungezwungen zum Erzählen.",
    },
    {
      title: "Geschichten, die ihr noch nicht kennt",
      body: "Eure Gäste erinnern sich an ganz andere Details als ihr. Sie teilen Anekdoten und sprechen persönliche Wünsche aus, die ihr im Trubel vielleicht nie gehört hättet.",
    },
  ],
};

export const ablauf = {
  title: "So unkompliziert entsteht euer Gästecast",
  intro:
    "Ein Hochzeitstag ist intensiv – deshalb halte ich euch den Rücken komplett frei. Null Aufwand für euch, maximaler Wert für danach.",
  steps: [
    {
      number: "1",
      title: "Das Kennenlernen",
      body: "Vorab sprechen wir in aller Ruhe. Ihr erzählt mir, wer eure wichtigsten Menschen sind, welche Dynamiken es gibt und welche kleinen Geschichten euch besonders am Herzen liegen. So weiß ich genau, worauf ich achten darf.",
    },
    {
      number: "2",
      title: "Der Tag der Hochzeit",
      body: "Ich bin vor Ort, bewege mich unaufdringlich im Hintergrund und bin einfach ein guter Gastgeber für eure Gäste. Keine großen Mikrofone, kein Druck – die Gespräche entstehen organisch beim Sektempfang, zwischen den Gängen oder am Rande der Tanzfläche.",
    },
    {
      number: "3",
      title: "Das fertige Hörerlebnis",
      body: "Ich liefere euch keine ungeschnittenen Rohdaten oder hunderte Einzeldateien. Nach der Hochzeit webe ich im Studio aus den schönsten O-Tönen, den emotionalsten Momenten und der echten Kulissen-Atmosphäre ein zusammenhängendes, dramaturgisch perfekt geschnittenes Audio-Porträt zum Anhören.",
    },
  ],
};

// Platzhalter-Stimmen: durch echte Kund:innen-Stimmen ersetzen, sobald verfügbar.
export const testimonials = {
  title: "Was Brautpaare erzählen",
  intro:
    "Platzhalter-Stimmen – hier stehen bald echte Rückmeldungen eurer Hochzeitspaare.",
  items: [
    {
      quote:
        "Wir haben unsere Hochzeit schon so oft angeschaut und fotografiert – aber erst beim Anhören des Gästecasts haben wir wieder geweint. Vor Freude.",
      name: "Lena & Jonas",
      role: "Hochzeit im Sommer, Platzhalter",
      avatarSeed: "gaestecast-testimonial-1",
    },
    {
      quote:
        "Meine Oma erzählt eine Geschichte über meine Eltern, die ich noch nie gehört hatte. Das allein war das ganze Projekt wert.",
      name: "Sophie K.",
      role: "Braut, Platzhalter",
      avatarSeed: "gaestecast-testimonial-2",
    },
    {
      quote:
        "Kein Vergleich zum Gästebuch am Empfang. Die Gespräche klingen wie echte Momente – weil sie es auch waren.",
      name: "Familie Weber",
      role: "Trauzeugen, Platzhalter",
      avatarSeed: "gaestecast-testimonial-3",
    },
  ],
};

export const ueberMich = {
  title: "Hi, ich bin Moritz.",
  paragraphs: [
    "Ich liebe es, Dinge mit Struktur und gleichzeitig viel Herz zu erschaffen. Bei Gästecast bin ich euer unsichtbarer roter Faden und der emotionale Chronist eures Tages. Ich dränge mich niemals in den Vordergrund – eure Gäste sind die Hauptdarsteller.",
  ],
  availability: {
    title: "Wichtiger Hinweis zur Verfügbarkeit",
    body: "Da ich jede Hochzeit persönlich begleite und die anschließende Postproduktion im Studio viel Zeit und Liebe zum Detail erfordert, kann ich nur eine sehr begrenzte Anzahl an Wochenenden pro Jahr annehmen. Wenn ihr euren Tag hörbar machen wollt, lasst uns am besten direkt herausfinden, ob euer Datum noch frei ist.",
    ctaLabel: "Verfügbarkeit prüfen",
    ctaHref: "#kontakt",
  },
  // Platzhalter-Porträt, austauschen sobald echtes Bildmaterial vorliegt.
  image: {
    src: "https://picsum.photos/seed/gaestecast-moritz/900/1100",
    alt: "Platzhalterbild: Porträt von Moritz",
  },
};

export const kontakt = {
  title: "Lasst uns euer Datum besprechen",
  intro:
    "Schreibt mir kurz ein paar Eckdaten – ich melde mich meist innerhalb von 48 Stunden zurück.",
  form: {
    nameLabel: "Euer Name",
    emailLabel: "E-Mail-Adresse",
    dateLabel: "Datum der Feier",
    messageLabel: "Erzählt mir kurz von eurem Tag",
    submitLabel: "Anfrage senden",
    submittingLabel: "Wird gesendet …",
    successMessage:
      "Danke euch! Eure Anfrage ist angekommen – ich melde mich in Kürze.",
    errorMessage:
      "Das hat leider nicht geklappt. Mögt ihr es gleich nochmal versuchen?",
  },
};

export const footer = {
  copyText: "Gästecast – Erinnerungen, die man hören kann.",
  links: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};

export const siteMeta = {
  name: "Gästecast",
  title: "Gästecast — Euer Tag in den Stimmen eurer Gäste",
  description:
    "Ein akustisches Porträt eurer Hochzeit: echte Gespräche mit euren Gästen, professionell produziert und für immer bewahrt.",
  domain: "https://gaestecast.de",
};
