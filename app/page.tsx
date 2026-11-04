import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq, { type QA } from "@/components/Faq";
import FeatureTabs from "@/components/FeatureTabs";
import HeroScroll from "@/components/HeroScroll";
import Statement from "@/components/Statement";
import { Chart, Inbox, Search, Bolt, Layout } from "@/components/Icons";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Home Builder Web Design | Websites & SEO for Home Builders" },
  alternates: { canonical: "/" },
};

const faqs: QA[] = [
  {
    q: "Do you only work with home builders?",
    a: "Yes. Home Builder Web Design builds websites and runs marketing for residential builders only: custom home builders, semi-custom and build-on-your-lot builders, small production builders and design-build firms. Every page, keyword and form is planned around how buyers choose the company that will build their home.",
  },
  {
    q: "Will a new website actually bring in more estimate requests?",
    a: "A website can't promise contracts, and we won't either. What we do is remove the reasons buyers leave: slow pages, thin portfolios, no clear building process, no sense of price range and contact forms that ask too much. Then we track every call and form so you can see what the site is producing.",
  },
  {
    q: "How long does a home builder website take to launch?",
    a: "Timelines depend on how many floor plan, community and portfolio pages you need and how quickly we get your project photos, plans, warranty details and service area. We give you a launch date on the first call, before any work starts.",
  },
  {
    q: "Can you help us show up for 'custom home builder near me'?",
    a: "We optimize your Google Business Profile, build pages for custom homes, build-on-your-lot, floor plans and the counties and towns you build in, and fix the citations and on-page signals local rankings depend on. Rankings take time and we're upfront that no one can guarantee a position.",
  },
  {
    q: "Can the site show our floor plans, communities and available homes?",
    a: "Yes. We build clear pages for your plans, lots, communities and quick move-in homes that you can update as inventory changes, written so buyers understand what's included and know the next step. Your domain, content and photos always stay yours.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroScroll />

      {/* SHOWCASE */}
      <section className="showcase" aria-labelledby="show-h">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 50 }}>
            <h2 id="show-h" className="h-section reveal">
              A Home Builder Website Built to Win the Contract
            </h2>
            <p className="lead reveal" style={{ ["--d" as string]: ".1s" }}>
              Most builder sites are a logo, a few old photos and a contact page nobody answers. We build yours around
              the three things that turn a &ldquo;custom home builder near me&rdquo; search into a booked consultation.
            </p>
          </div>
          <div className="showcase-stage">
            <div className="browser reveal">
              <div className="browser-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span className="browser-url">yourhomebuilder.com</span>
              </div>
              <div className="browser-body">
                <img
                  src={img.homeGrayPorch(1100, 700)}
                  alt="Newly built gray two-story home with a full front porch and landscaped lawn"
                  loading="lazy"
                  decoding="async"
                  width={1100}
                  height={700}
                />
                <div className="mock" aria-hidden="true">
                  <span className="mock-title">Custom homes, built on your lot, on schedule and on budget.</span>
                  <div className="mock-row">
                    <span className="mock-btn">Start your build</span>
                    <span className="mock-btn alt">Call now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card fc-1 reveal" style={{ ["--d" as string]: ".15s" }}>
              <div className="ic">
                <Bolt />
              </div>
              <h3>Speed Check</h3>
              <p>Lightweight pages that load fast on a phone, even when a buyer is parked at an empty lot comparing builders.</p>
            </div>
            <div className="float-card fc-2 reveal" style={{ ["--d" as string]: ".25s" }}>
              <div className="ic">
                <Search />
              </div>
              <h3>Search Visibility</h3>
              <p>Pages for custom homes, build-on-your-lot, floor plans and every county you want to build in.</p>
            </div>
            <div className="float-card fc-3 reveal" style={{ ["--d" as string]: ".35s" }}>
              <div className="ic">
                <Inbox />
              </div>
              <h3>Estimate Requests</h3>
              <p>Tap-to-call and short consultation forms on every page, sent straight to your office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" aria-labelledby="feat-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow reveal">Features</p>
            <h2 id="feat-h" className="h-section reveal">
              Build What Counts
            </h2>
            <p className="lead reveal">
              From the first impression to the signed build contract, we handle the website and marketing work while
              your crews pour footings, frame walls and hand over keys.
            </p>
          </div>
          <FeatureTabs />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section" aria-label="Why home builders switch">
        <div className="container">
          <Statement
            eyebrow="Solution"
            paragraphs={[
              "Home builders compete with national production builders, big-budget brokerages and lead-selling directories, all for the same 'custom home builder' and 'new construction homes near me' searches.",
              "[[Home Builder Web Design]] gives you a site and search presence built for that fight: a real portfolio, a clear building process, local pages for where you build, and a fast path to the first consultation.",
            ]}
          />
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="section perf-glow" aria-labelledby="perf-h">
        <div className="container">
          <div className="perf-head">
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: 16 }}>
                Performance
              </p>
              <h2 id="perf-h" className="h-section reveal">
                Better Websites,
                <br />
                Visibility &amp; Leads
              </h2>
            </div>
            <p className="lead reveal">
              Three outcomes every engagement is built around, whether you need a full rebuild or a stronger search
              presence.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <Layout />,
                h: "Better Websites",
                p: "Custom builder sites that show your real crews and finished homes, explain your process from lot to keys and look sharp on any phone.",
              },
              {
                icon: <Search />,
                h: "Stronger Visibility",
                p: "Home builder SEO, county and town pages and Google Business Profile work so buyers find you before the national builders do.",
              },
              {
                icon: <Chart />,
                h: "More Estimate Requests",
                p: "Click-to-call, short consultation forms and call tracking so more visits turn into qualified build conversations.",
              },
            ].map((c, i) => (
              <div key={c.h} className="card reveal" style={{ ["--d" as string]: `${i * 0.08}s` }}>
                <span className="ic">{c.icon}</span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section" aria-labelledby="founder-h">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <h2 id="founder-h" className="h-section reveal">
              Meet the Founder
            </h2>
          </div>
          <article className="expert reveal">
            <div className="expert-photo">
              <img
                src="/brand/steven-cantando-founder.webp"
                alt="Steven Cantando, founder of cantandoDigital"
                loading="lazy"
                decoding="async"
                width={818}
                height={900}
              />
            </div>
            <h3>Steven Cantando</h3>
            <p className="role">Founder, cantandoDigital</p>
            <p>
              Leads strategy and builds for every Home Builder Web Design client, with years of frontend development and
              contractor marketing behind him.
            </p>
          </article>
        </div>
      </section>

      {/* STATS */}
      <section className="section-tight" aria-labelledby="stats-h">
        <div className="container">
          <div className="panel stats-panel reveal">
            <div className="stats-left">
              <p className="eyebrow">Why organic search matters for home builders</p>
              <h2 id="stats-h">
                Websites and SEO built for home builders, <span>so you stop renting leads and start owning them.</span>
              </h2>
              <Link href="/contact#schedule" className="btn">
                Schedule a Call
              </Link>
            </div>
            <div className="stats-right">
              <div className="stat">
                <div className="num">24/7</div>
                <h3>Consultation requests while you&rsquo;re on site</h3>
                <p>
                  Buyers research builders at night and on weekends. A site built to convert keeps taking requests while
                  you&rsquo;re walking a framing inspection.
                </p>
              </div>
              <div className="stat">
                <div className="num">1 tap</div>
                <h3>From any page to your office</h3>
                <p>Every page we build keeps a call button and consultation form within thumb&rsquo;s reach on mobile.</p>
              </div>
              <div className="stat">
                <div className="num">100%</div>
                <h3>Home builder focused</h3>
                <p>We work with home builders only, so your strategy is never a copy of another industry&rsquo;s.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
