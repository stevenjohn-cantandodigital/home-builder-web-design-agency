import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq, { type QA } from "@/components/Faq";
import PageHero from "@/components/PageHero";
import { Arrow, Check } from "@/components/Icons";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Builder Website Design, SEO & Marketing",
  description:
    "Custom home builder websites, home builder SEO, Google Business Profile optimization and Google & Meta Ads, all built to bring in more qualified consultation and estimate requests.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "websites",
    eyebrow: "01 · Websites",
    h: "Custom Home Builder Websites",
    p: "A fast, mobile-first website designed around how buyers choose a builder. A portfolio of your real homes, a clear lot-to-keys building process, floor plan pages and a consultation request built into every screen.",
    list: [
      "Custom design, no recycled templates",
      "Pages for custom homes, build-on-your-lot, floor plans, communities and quick move-in homes",
      "Portfolio and available-home pages you can update yourself",
      "Built for Core Web Vitals and accessibility",
    ],
    src: img.homeModernDriveway(1200, 1000),
    alt: "Newly built modern home with a wide driveway and two-car garage",
  },
  {
    id: "seo",
    eyebrow: "02 · SEO",
    h: "Home Builder SEO",
    p: "Rank for the searches that turn into signed contracts: custom home builder near me, build on your lot, new construction homes and home builders in the counties you serve. Technical SEO, content and local pages handled for you.",
    list: [
      "Keyword plan built around your home types, price points and build areas",
      "County and town build-area pages with unique content",
      "Schema markup, site speed and technical fixes",
      "Monthly reporting in plain English",
    ],
    src: img.homeCreamTwoStory(1200, 1000),
    alt: "Newly built two-story cream home with attached garage",
  },
  {
    id: "local",
    eyebrow: "03 · Local",
    h: "Google Business Profile & Map Pack",
    p: "When someone searches 'home builders near me', your Google Business Profile is often the first thing they see. We optimize it, keep it active and connect it to your website so it works as hard as your crews.",
    list: [
      "Profile audit, categories, services and service areas",
      "Regular progress-photo and finished-home posting",
      "Review request process for happy homeowners at closing",
      "Citation clean-up across directories",
    ],
    src: img.crewHardhatFrame(1200, 1000),
    alt: "Builder in a hard hat working on the wall framing of a new home",
  },
  {
    id: "ads",
    eyebrow: "04 · Paid",
    h: "Google & Meta Ads for Home Builders",
    p: "When you need consultations on the calendar now, paid campaigns fill the gap while SEO builds. Tight geographic targeting, home builder landing pages and conversion tracking from day one, including open-house, spec home and lot promotions.",
    list: [
      "Google Search and Local Services Ads setup guidance",
      "Separate campaigns for custom builds, build-on-your-lot and spec homes",
      "Dedicated landing pages for every campaign",
      "Call and form tracking so you see real cost per lead",
    ],
    src: img.framingPlywood(1200, 1000),
    alt: "Two-story home under construction with sheathed walls",
  },
];

const faqs: QA[] = [
  {
    q: "Do I need every service?",
    a: "No. Many home builders start with a new website, then add SEO once the foundation is in place. On a call we'll tell you which service would make the biggest difference first.",
  },
  {
    q: "Can you redesign my existing home builder website?",
    a: "Yes. We'll review what you have, keep anything that's ranking or converting, and rebuild the rest. Old URLs are redirected so you don't lose search equity.",
  },
  {
    q: "Will you write the content?",
    a: "Yes. We write home builder copy for every page, then review it with you so the details about your licensing, insurance, building process, standard features, warranties, financing partners and build area are accurate.",
  },
  {
    q: "We also do remodels and additions. Can the site cover that?",
    a: "Yes. New homes stay the lead, and we add clearly separated pages for the remodeling, additions and renovation work you take on, so homeowners searching for any of it find you.",
  },
  {
    q: "Do you use stock photos?",
    a: "We strongly prefer your own home and crew photos because buyers trust real work. Where you don't have them yet, we use high-quality stock images until you do.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a Home Builder Needs to Win Online"
        lead="Websites, search visibility and lead tracking, built and managed by one team that only works with home builders."
      />

      <section className="section-tight" aria-label="Services overview">
        <div className="container grid-4">
          {services.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="card reveal" style={{ ["--d" as string]: `${i * 0.06}s`, minHeight: 200 }}>
              <span className="eyebrow" style={{ marginBottom: "auto" }}>
                {s.eyebrow}
              </span>
              <h3 style={{ fontSize: 18 }}>{s.h}</h3>
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="section" aria-labelledby={`${s.id}-h`} style={{ scrollMarginTop: 80 }}>
          <div className={`container split${i % 2 ? " reverse" : ""}`}>
            <div className="split-media reveal">
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" width={1200} height={1000} />
            </div>
            <div className="split-copy reveal" style={{ ["--d" as string]: ".1s" }}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 id={`${s.id}-h`}>{s.h}</h2>
              <p>{s.p}</p>
              <ul className="checklist">
                {s.list.map((l) => (
                  <li key={l}>
                    <Check /> {l}
                  </li>
                ))}
              </ul>
              <Link href="/contact#schedule" className="btn" style={{ marginTop: 8 }}>
                Schedule a Call <Arrow />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section" aria-labelledby="process-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">Process</p>
            <h2 id="process-h" className="h-section reveal">
              From First Call to Launch
            </h2>
          </div>
          <div className="steps">
            {[
              ["Strategy call", "We review your current site, Google profile and competitors, then agree on goals."],
              ["Plan & content", "Sitemap, keyword plan and home builder copy, reviewed with you before design."],
              ["Design & build", "Custom design, then a fast, accessible build you can preview on any device."],
              ["Launch & grow", "We launch, set up tracking and keep improving rankings and conversions."],
            ].map(([h, p], i) => (
              <div key={h} className="step reveal" style={{ ["--d" as string]: `${i * 0.07}s` }}>
                <span className="n">(0{i + 1})</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} title="Services Questions" />
      <CtaBand />
    </>
  );
}
