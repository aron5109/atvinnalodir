export const BUSINESS = {
  name: "Verdant Earth Foundation",
  street: "340 Pine St, Suite 900",
  city: "San Francisco, CA 94104",
  phone: "+1 415 820 4100",
  phoneHref: "tel:+14158204100",
  mapQuery: "340 Pine St, San Francisco, CA 94104",
};

export const MAP_EMBED = "https://maps.google.com/maps?q=340%20Pine%20St%2C%20San%20Francisco%2C%20CA%2094104&z=15&output=embed";
export const MAP_OPEN = "https://www.google.com/maps/search/?api=1&query=340%20Pine%20St%2C%20San%20Francisco%2C%20CA%2094104";

export type ProgramSlug = "reforestation" | "ocean-health" | "clean-energy";

export type Program = {
  slug: ProgramSlug;
  path: "/programs/reforestation" | "/programs/ocean-health" | "/programs/clean-energy";
  name: string;
  tagline: string;
  summary: string;
  image: string;
  heroSrc: string;
  heroSrcSet: string;
  cardSrc: string;
  cardSrcSet: string;
  eyebrow: string;
  cardNo: string;
  cardLabel: string;
  exploreLabel: string;
  giveLabel: string;
  ctaTitle: string;
  alt: string;
  lede: string;
  stat: string;
  statLabel: string;
  approach: { step: string; title: string; body: string }[];
  figures: { value: string; label: string }[];
  sites: { no: string; site: string; country: string; since: string }[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "reforestation",
    path: "/programs/reforestation",
    name: "Reforestation",
    tagline: "The right tree in the right place",
    summary: "Native forest, never monocultures, chosen for biodiversity, soil health and long-term carbon storage.",
    image: "verdant-program-reforestation",
    heroSrc: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-reforestation-1920w.png",
    heroSrcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-reforestation-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-reforestation-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-reforestation-1920w.png 1920w",
    cardSrc: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-reforestation-1200w.png",
    cardSrcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-reforestation-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-reforestation-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-reforestation-1920w.png 1920w",
    eyebrow: "Program · Reforestation",
    cardNo: "01 / 03 · Reforestation",
    cardLabel: "Reforestation: The right tree in the right place",
    exploreLabel: "Explore reforestation",
    giveLabel: "Give to reforestation",
    ctaTitle: "Back reforestation.",
    alt: "A planting crew setting native saplings on a misty hillside",
    lede: "Every site is chosen for biodiversity, soil health and long-term carbon storage, planted with native species and then watched by satellite for ten years.",
    stat: "31",
    statLabel: "planting sites in 5 countries, each watched for 10 years",
    approach: [
      { step: "Step 01", title: "Choose the site", body: "We map degraded land with local partners and pick ground where native forest can recover and stay protected." },
      { step: "Step 02", title: "Plant native, plant mixed", body: "Nurseries run by nearby families grow dozens of native species, so each plot restarts as a real forest and not a tree farm." },
      { step: "Step 03", title: "Watch for ten years", body: "Every site has coordinates, satellite monitoring and a yearly photo from the same spot, published on the record." },
    ],
    figures: [
      { value: "2.4M", label: "trees planted" },
      { value: "31", label: "planting sites" },
      { value: "5", label: "countries" },
      { value: "10 yrs", label: "monitoring per site" },
    ],
    sites: [
      { no: "14", site: "Chocó", country: "Colombia", since: "2019" },
      { no: "31", site: "Patagonia rewilding", country: "Chile", since: "2022" },
    ],
  },
  {
    slug: "ocean-health",
    path: "/programs/ocean-health",
    name: "Ocean health",
    tagline: "Coastal crews, cleaner water",
    summary: "Coastal communities run plastic recovery with zero bycatch and rebuild coral reef by reef.",
    image: "verdant-program-ocean",
    heroSrc: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-ocean-1920w.png",
    heroSrcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-ocean-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-ocean-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-ocean-1920w.png 1920w",
    cardSrc: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-ocean-1200w.png",
    cardSrcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-ocean-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-ocean-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-ocean-1920w.png 1920w",
    eyebrow: "Program · Ocean health",
    cardNo: "02 / 03 · Ocean health",
    cardLabel: "Ocean health: Coastal crews, cleaner water",
    exploreLabel: "Explore ocean health",
    giveLabel: "Give to ocean health",
    ctaTitle: "Back ocean health.",
    alt: "Coastal crew members recovering plastic beside a coral nursery in shallow water",
    lede: "Coastal communities run the work: plastic recovery with zero bycatch, and coral nurseries that rebuild reef one fragment at a time.",
    stat: "38",
    statLabel: "coastal communities running the work",
    approach: [
      { step: "Step 01", title: "Crews from the coast", body: "Fishing families are hired and trained as paid crews, so the people who know the water look after it." },
      { step: "Step 02", title: "Recover, don't trawl", body: "Plastic is collected from beaches, rivers and the shallows by hand and by shore nets designed for zero bycatch." },
      { step: "Step 03", title: "Grow reef back", body: "Coral fragments are raised in nurseries and returned to damaged reef crests, then surveyed every season." },
    ],
    figures: [
      { value: "800 t", label: "coastal plastic recovered" },
      { value: "38", label: "coastal communities" },
      { value: "0", label: "bycatch in recovery nets" },
      { value: "2018", label: "first crew started" },
    ],
    sites: [
      { no: "03", site: "Coral Triangle reefs", country: "Indonesia", since: "2018" },
      { no: "26", site: "Mangrove coast", country: "Tanzania", since: "2022" },
    ],
  },
  {
    slug: "clean-energy",
    path: "/programs/clean-energy",
    name: "Clean energy",
    tagline: "Power owned by the people who use it",
    summary: "Solar micro-grids replace kerosene in off-grid villages, owned and run by the community.",
    image: "verdant-program-energy",
    heroSrc: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-energy-1920w.png",
    heroSrcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-energy-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-energy-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-energy-1920w.png 1920w",
    cardSrc: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-energy-1200w.png",
    cardSrcSet: "https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-energy-800w.png 800w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-energy-1200w.png 1200w, https://irp.cdn-website.com/md/dmtmpl/7f6ccaa6-6c4b-47a8-a8f2-6ca48b70b1c9/dms3rep/multi/opt/verdant-program-energy-1920w.png 1920w",
    eyebrow: "Program · Clean energy",
    cardNo: "03 / 03 · Clean energy",
    cardLabel: "Clean energy: Power owned by the people who use it",
    exploreLabel: "Explore clean energy",
    giveLabel: "Give to clean energy",
    ctaTitle: "Back clean energy.",
    alt: "Solar panels of a village micro-grid at golden hour in semi-arid East Africa",
    lede: "Solar micro-grids replace kerosene in off-grid villages. The community owns and runs each grid, and most pay for themselves in 18 months.",
    stat: "18 mo",
    statLabel: "for a micro-grid to pay for itself",
    approach: [
      { step: "Step 01", title: "Ask the village first", body: "A grid only goes where the community asks for it and elects a committee to own it from day one." },
      { step: "Step 02", title: "Build and train locally", body: "Local technicians install the panels and storage, then learn to repair every part without outside help." },
      { step: "Step 03", title: "Fund it forward", body: "Small monthly fees cover upkeep and repay the build, then fund the next village's grid." },
    ],
    figures: [
      { value: "94", label: "communities on clean power" },
      { value: "18 mo", label: "typical payback" },
      { value: "30", label: "more micro-grids planned" },
      { value: "2019", label: "first grid switched on" },
    ],
    sites: [
      { no: "61", site: "Turkana micro-grids", country: "Kenya", since: "2019" },
      { no: "48", site: "Rajasthan micro-grids", country: "India", since: "2023" },
    ],
  },
];
