import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  MapPin,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Database,
  Beaker,
  MousePointerClick,
  Telescope,
  Stars,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

/** ======== EDIT THESE LINKS ======== */
const GITHUB_URL = "https://github.com/Mahir-Puri";
const LINKEDIN_URL = "https://www.linkedin.com/in/mahir-puri/";
const EMAIL = "mpuri@uvic.ca";
/** ================================== */

const personas = [
  {
    name: "Affiliate",
    color: "violet",
    copy:
      "Affiliates need transparent attribution, working deep links, and timely payouts.",
    ideas: [
      "Deep link validator (one-click)",
      "Fraud/anomaly alerts in Partner Portal",
      "Promo-code ROI nudges",
    ],
  },
  {
    name: "Influencer",
    color: "fuchsia",
    copy:
      "Creators care about trackable codes, content-ready assets, and fair bonuses.",
    ideas: [
      "Auto asset kits per campaign",
      "Predictive bonus tiers",
      "Content/code performance heatmaps",
    ],
  },
  {
    name: "B2B/Tech Partner",
    color: "indigo",
    copy:
      "Integrators need solid APIs, sandboxes, versioning, and contract visibility.",
    ideas: [
      "Contract diff viewer",
      "API quota health widget",
      "Schema explorer & sandbox quickstart",
    ],
  },
];

const chartData = [
  { month: "May", partners: 12, revenue: 6 },
  { month: "Jun", partners: 18, revenue: 9 },
  { month: "Jul", partners: 30, revenue: 15 },
  { month: "Aug", partners: 42, revenue: 22 },
  { month: "Sep", partners: 63, revenue: 30 },
  { month: "Oct", partners: 85, revenue: 41 },
];

const Chip: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">
    {children}
  </span>
);

const GradientText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
    {children}
  </span>
);

const Section: React.FC<any> = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Pill = ({ icon: Icon, title, text }: any) => (
  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10">
    <div className="p-2 rounded-lg bg-black/5 dark:bg-white/10"><Icon className="h-5 w-5" /></div>
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-neutral-700 dark:text-white/80">{text}</div>
    </div>
  </div>
);

export default function App() {
  const [dark, setDark] = useState(true);
  const [activePersona, setActivePersona] = useState("Affiliate");
  const persona = useMemo(() => personas.find(p => p.name === activePersona)!, [activePersona]);

  // Proper dark-mode toggle via <html class="dark">
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="relative overflow-x-hidden font-sans">
      {/* Background flair */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-20%] h-[40rem] w-[40rem] bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 rounded-full blur-[140px] opacity-15 dark:opacity-20" />
        <div className="absolute top-1/2 -left-40 h-[38rem] w-[38rem] bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-indigo-500 rounded-full blur-[140px] opacity-10" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-neutral-950/50 border-b border-black/10 dark:border-white/10">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Rocket className="h-5 w-5" />
            <span className="font-semibold">Mahir → impact.com × SaaSquatch</span>
            <Chip>Victoria <MapPin className="h-3 w-3 ml-1 inline-block" /></Chip>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-xl px-3 py-1.5 bg-black/5 border border-black/10 hover:bg-black/10 dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/15"
              onClick={() => setDark(!dark)}
            >
              {dark ? "Light" : "Dark"} mode
            </button>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"
               className="rounded-xl px-2 py-1.5 bg-black/5 border border-black/10 hover:bg-black/10 dark:bg:white/10 dark:border-white/10 dark:hover:bg-white/15 inline-flex items-center">
              <Github className="h-4 w-4" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="rounded-xl px-2 py-1.5 bg-black/5 border border-black/10 hover:bg-black/10 dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/15 inline-flex items-center">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#contact" className="rounded-xl px-3 py-1.5 bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold hover:opacity-90">
              Contact
            </a>
          </div>
        </Section>
      </nav>

      {/* Hero */}
      <header className="pt-16 pb-10">
        <Section>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                A tiny <GradientText>Partnership Insights</GradientText> demo — built for <GradientText>impact.com</GradientText>
              </h1>

              {/* learning honesty */}
              <div className="mt-3 p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 dark:bg-amber-100/10 dark:text-amber-200 dark:border-amber-200/30">
                <b>Honest note:</b> I’m <i>learning</i> React, TypeScript, motion, and charts. To be honest, I built this site (with some help) to practice those skills and to show curiosity + ability to ship.
              </div>

              <p className="mt-4 text-neutral-700 dark:text-white/80 max-w-prose">
                The prototype includes a <b>persona switcher</b>, a <b>momentum chart</b>, and a mini PRD. Stack is <b>React + Vite</b>, animated with <b>Framer Motion</b> and charted with <b>Recharts</b>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["JavaScript (learning)","TypeScript (learning)","React (learning)","Vite","Tailwind (CDN)","Framer Motion (learning)","Recharts (learning)","Lucide"].map(s => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a className="rounded-xl px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold inline-flex items-center gap-2" href="#demo">
                  See Demo <MousePointerClick className="h-4 w-4" />
                </a>
                <a className="rounded-xl px-4 py-2 bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/10 inline-flex items-center gap-2" href="#prd">
                  Read PRD <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: .1 }}>
              <div className="rounded-2xl p-4 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                <div className="rounded-xl p-6 bg-white/70 dark:bg-neutral-900/60 border border-black/10 dark:border-white/10">
                  <div className="text-sm text-neutral-700 dark:text-white/70 mb-2">Momentum — Partners & Revenue (mock)</div>
                  <div className="h-60 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="month" stroke="currentColor" />
                        <YAxis stroke="currentColor" />
                        <Tooltip />
                        <Area type="monotone" dataKey="partners" fill="url(#grad1)" stroke="currentColor" />
                        <Area type="monotone" dataKey="revenue" fill="url(#grad2)" stroke="currentColor" />
                        <defs>
                          <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#a78bfa" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f0abfc" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#f0abfc" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </header>

      {/* Demo + Tech */}
      <Section id="demo" className="py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
            <div className="flex flex-wrap gap-3 mb-4">
              {personas.map(p => (
                <button
                  key={p.name}
                  onClick={() => setActivePersona(p.name)}
                  className={`px-3 py-1.5 rounded-full border ${
                    activePersona===p.name
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-black border-neutral-900 dark:border-white'
                      : 'bg-black/5 text-neutral-900 border-black/10 hover:bg-black/10 dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:bg-white/15'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
            <div className="text-lg font-semibold mb-1">{persona.name} focus</div>
            <p className="text-neutral-700 dark:text-white/80 mb-4">{persona.copy}</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {persona.ideas.map((i: string) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-300" /><span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
            <div className="text-sm text-neutral-700 dark:text-white/70">Mini Tech Spec</div>
            <div className="mt-3 grid gap-3">
              <Pill icon={Cpu} title="Frontend" text="React + Vite (TS), Tailwind via CDN" />
              <Pill icon={Database} title="Data" text="Mocked chart series; wired for API swap" />
              <Pill icon={Beaker} title="Testing" text="Unit-test ready — logic isolated" />
            </div>
            {/* SaaSquatch callout with correct links */}
            <div className="mt-4 text-sm text-neutral-700 dark:text-white/70">
              Built for the <b>SaaSquatch by impact.com</b> team in Victoria — the referral & loyalty platform now natively integrated into impact.com’s partnership stack.
              Learn more at{" "}
              <a className="underline" href="https://www.saasquatch.com/byimpact/" target="_blank" rel="noreferrer">
                saasquatch.com/byimpact
              </a>{" "}
              and the{" "}
              <a className="underline" href="https://docs.saasquatch.com/api/" target="_blank" rel="noreferrer">
                SaaSquatch REST API
              </a>.
            </div>
          </div>
        </div>
      </Section>

      {/* PRD */}
      <Section id="prd" className="py-8">
        <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Telescope className="h-5 w-5" /><div className="text-lg font-semibold">Micro-PRD: Partner Signals Panel</div>
          </div>
          <ol className="list-decimal ml-5 space-y-2 text-neutral-800 dark:text-white/90">
            <li><b>Problem:</b> AMs need faster insight into which partners need attention to hit goals.</li>
            <li><b>Users:</b> Affiliate managers, creator managers, partner ops.</li>
            <li><b>Success:</b> Session <i>time-to-signal</i> &lt; 3s; CTR on suggested actions &gt; 18%.</li>
            <li><b>Scope:</b> Persona switcher, momentum chart, three actionable suggestions.</li>
            <li><b>Tech:</b> React, motion, charts; ship behind feature flag; add tests + Storybook.</li>
          </ol>
        </div>
      </Section>

      {/* What is SaaSquatch? */}
      <Section id="about-saasquatch" className="py-6">
        <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
          <div className="text-lg font-semibold mb-2">What is SaaSquatch?</div>
          <p className="text-neutral-700 dark:text-white/80">
            SaaSquatch is a referral & loyalty platform that helps brands create fully-automated, customizable programs inside their product — with tracking,
            fraud controls, analytics, and reward fulfillment. Now as <b>SaaSquatch by impact.com</b>, it’s integrated into the broader partnership ecosystem.
          </p>
          <div className="mt-3 text-sm">
            <a className="underline mr-3" href="https://www.saasquatch.com/" target="_blank" rel="noreferrer">Homepage</a>
            <a className="underline mr-3" href="https://www.saasquatch.com/referral-program-software/" target="_blank" rel="noreferrer">Referral software</a>
            <a className="underline" href="https://docs.saasquatch.com/guides/referral-quickstart" target="_blank" rel="noreferrer">Quickstart guide</a>
          </div>
        </div>
      </Section>

      {/* Why impact.com */}
      <Section id="why-impact" className="py-8">
        <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
          <div className="text-lg font-semibold mb-2">Why impact.com × SaaSquatch</div>
          <ul className="list-disc ml-5 space-y-2 text-neutral-800 dark:text-white/90">
            <li><b>Partnership DNA:</b> Demo centers on affiliates, creators, and B2B partners to reflect core product pillars.</li>
            <li><b>Faster time-to-signal:</b> UI leads with insights + suggested actions — how AMs work day-to-day.</li>
            <li><b>Frontend craft (learning):</b> React + TS, animation, charts; ready to add Storybook, Percy, and Vitest/Jest.</li>
            <li><b>Team fit:</b> Curious, shipping-focused, comfortable iterating with design in Figma and TDD principles.</li>
          </ul>
        </div>
      </Section>

      {/* Next Iterations */}
      <Section className="py-8">
        <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
          <div className="text-sm text-neutral-700 dark:text-white/70 mb-2">Next Iterations @ impact.com</div>
          <ul className="grid sm:grid-cols-2 gap-2 list-disc ml-5 text-neutral-800 dark:text-white/90">
            <li>Live hookup to partner events (attribution, clicks, conversions, payouts)</li>
            <li>Storybook stories + Percy snapshots for visual diffs</li>
            <li>Vitest unit tests for persona logic + suggestion rules</li>
            <li>Feature flag rollout, usage analytics, and A/B on suggestion CTR</li>
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-10">
        <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="text-lg font-semibold mb-1">Let’s build partnerships that scale</div>
              <p className="text-neutral-700 dark:text-white/80">
                I’m available for an 8-month co-op starting Jan 5, 2026 (hybrid Victoria). I’m learning quickly and enjoy shipping real things.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold"
                   href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> Email</a>
                <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/10"
                   href={GITHUB_URL} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
                <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/10"
                   href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              </div>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/70 dark:bg-neutral-900/60">
              <div className="text-sm text-neutral-700 dark:text-white/70 mb-2">Fast Facts</div>
              <ul className="space-y-2 text-neutral-800 dark:text-white/90">
                <li className="flex items-center gap-2"><Stars className="h-5 w-5" /> UVic Software Engineering (2nd year complete)</li>
                <li className="flex items-center gap-2"><Stars className="h-5 w-5" /> Learning React, TS, Jest/Vitest, Figma</li>
                <li className="flex items-center gap-2"><Stars className="h-5 w-5" /> Built fall-detection + satellite data tooling</li>
                <li className="flex items-center gap-2"><Stars className="h-5 w-5" /> Loves clean UX + measurable outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-8 text-center text-neutral-600 dark:text-white/60">
        © {new Date().getFullYear()} Mahir Puri — handcrafted while learning, for impact.com × SaaSquatch
      </footer>
    </main>
  );
}
