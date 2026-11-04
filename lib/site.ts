export const site = {
  name: "Home Builder Web Design",
  domain: "homebuilderwebdesign.com",
  url: "https://homebuilderwebdesign.com",
  parent: "cantandoDigital",
  parentUrl: "https://cantandodigital.com",
  phone: "610-764-3857",
  phoneHref: "tel:+16107643857",
  email: "stevenJohn@cantandoDigital.com",
  location: "Newtown Square, PA",
  description:
    "Website design, SEO and digital marketing built only for home builders. Better websites, stronger search visibility and more estimate requests from serious buyers.",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

/** Free-license Unsplash photos (images.unsplash.com hotlinking is permitted by the Unsplash License). */
const u = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=${w}${h ? `&h=${h}` : ""}`;

type Img = (w?: number, h?: number) => string;
const p = (id: string): Img => (w, h) => u(`photo-${id}`, w, h);

export const img = {
  // Crews at work
  crewWallRaise: p("1787422660647-3be04b53f8d2"),
  crewRoofDeck: p("1773432114061-2ae201208630"),
  crewFramingSite: p("1773430273270-76f0a17224d0"),
  crewHardhatFrame: p("1587582423116-ec07293f0395"),
  crewBlueprints: p("1772442198624-4fc4d7281e89"),
  crewMiterSaw: p("1505798577917-a65157d3320a"),
  // Homes under construction
  framingSky: p("1785585508688-bd34cc669261"),
  framingRoofTrusses: p("1676802037786-3697d60497ae"),
  framingPlywood: p("1672627170267-fca17bb54156"),
  framingInterior: p("1704742950992-9815a104820c"),
  // Finished homes
  homeGrayPorch: p("1570129477492-45c003edd2be"),
  homeWhiteGable: p("1592595896616-c37162298647"),
  homeModernDriveway: p("1668911494509-14baf3b42fda"),
  homeModernWhite: p("1771366260867-7e07094579d7"),
  homeCraftsmanPorch: p("1625602812206-5ec545ca1231"),
  homeCreamTwoStory: p("1647579350413-a6ada4e480ed"),
  homePorchWhite: p("1631458325834-8f678e48912c"),
  homeBlackWindows: p("1612296350203-7d4718f6ac65"),
};
