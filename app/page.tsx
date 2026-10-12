"use client";

import React, { useState } from "react";

/* =====================================================================
   EDIT HERE: theme, images, contact details
   ===================================================================== */

// Theme colors (CSS variables, change once and the whole site updates)
const THEME = {
  "--primary": "#0B132B", // deep navy: headings, dark sections
  "--accent": "#A0422B", // terracotta: buttons, links, eyebrows
  "--accent-hover": "#883520",
  "--accent-light": "#E8A58F", // accent on dark backgrounds
  "--cream": "#FBF9F5", // page background
  "--sand": "#F4EBE1", // soft section background
} as React.CSSProperties;

// Images (files live in /public). TODO: swap repeated photos for new ones.
const IMG = {
  heroMaya: "/dr-maya-reynolds.png",
  heroOffice: "/therapy-session.png", // second hero photo (Maya with a client, no office shot)
  helpProfessionals: "/therapy-session.png",
  helpSurvivors: "/office-bookshelf.jpeg",
  helpCreatives: "/office-brick.jpeg",
  bio: "/therapy-session.png",
  howIWork: "/office-bookshelf.jpeg",
  officeA: "/office-brick.jpeg",
  officeB: "/office-bookshelf.jpeg",
  cta: "/dr-maya-reynolds.png",
  intro: "/office-brick.jpeg", // wide image under the intro text
};

// TODO: confirm every detail below against Dr. Maya's profile
const CONTACT = {
  street: "123th Street 45 W", // exactly as written in the profile
  cityLine: "Santa Monica, CA 90401",
  email: "contact@drmayareynolds.com",
};

const NAV = [
  { label: "About", href: "#about" },
  { label: "Who I Help", href: "#who-i-help" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Specialties", href: "#specialties" },
  { label: "Our Office", href: "#office" },
  { label: "Fees", href: "#fees" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Do you offer in-person or online telehealth sessions?",
    a: "I provide both in-person sessions at my office in Santa Monica, CA, and secure telehealth sessions for clients living anywhere across California.",
  },
  {
    q: "What modalities do you integrate into therapy?",
    a: "I integrate evidence-based practices including Cognitive Behavioral Therapy (CBT), EMDR, somatic body-oriented methods, and mindfulness practices tailored to your specific goals.",
  },
  {
    q: "How do I know if we are a good fit?",
    a: "I offer a complimentary 15-minute consultation call where we can discuss what you are looking for, answer any questions, and make sure my therapeutic approach feels right for you.",
  },
];

const WHO_I_HELP = [
  {
    title: "High-Achieving Professionals",
    img: IMG.helpProfessionals,
    alt: "Therapist and client talking in a calm, plant-filled room",
    text: "Adults who appear functional and capable externally while internally struggling with chronic worry, perfectionism, or racing thoughts.",
  },
  {
    title: "Trauma & Burnout Survivors",
    img: IMG.helpSurvivors,
    alt: "Quiet bookshelf and soft seating in a therapy office",
    text: "Individuals navigating single-incident events or complex relational patterns who want paced, safe stabilization and healing.",
  },
  {
    title: "Creatives & Entrepreneurs",
    img: IMG.helpCreatives,
    alt: "Sunlit seating area with exposed brick and large windows",
    text: "Thoughtful adults seeking sustainable tools to restore emotional regulation without sacrificing their personal standards.",
  },
];

const KEYWORDS = [
  "Anxiety & panic",
  "Trauma & EMDR",
  "Burnout & perfectionism",
  "Somatic & mindfulness practices",
  "Santa Monica & California telehealth",
];

const SPECIALTIES = [
  {
    title: "Anxiety & Panic",
    text: "Support for adults feeling functional on the outside while struggling with constant worry, body tension, sleeping difficulty, or bracing for something to go wrong.",
  },
  {
    title: "Trauma & EMDR Recovery",
    text: "Paced trauma therapy focused on safety and stabilization for single-incident events or complex patterns stemming from childhood, relationships, or chronic stress.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "Tailored for entrepreneurs, creatives, and professionals feeling disconnected after years of pushing through stress, helping you develop sustainable ways of living and working.",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Dr. Maya Reynolds, PsyD",
    description:
      "Licensed clinical psychologist offering anxiety, trauma (EMDR), and burnout therapy in Santa Monica, CA and via telehealth across California.",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    areaServed: "California",
    email: CONTACT.email,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

/* =====================================================================
   Small reusable pieces
   ===================================================================== */

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-wider ${
        light ? "text-[color:var(--accent-light)]" : "text-[color:var(--accent)]"
      }`}
    >
      {children}
    </p>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-block rounded-full bg-[color:var(--accent)] px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-hover)]"
    >
      {children}
    </a>
  );
}

/* =====================================================================
   Page
   ===================================================================== */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={THEME}
      className="min-h-screen bg-[color:var(--cream)] font-sans text-[color:var(--primary)] antialiased selection:bg-[color:var(--accent)] selection:text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[color:var(--cream)]/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <div>
            <a
              href="#top"
              className="block font-serif text-lg font-bold tracking-tight md:text-xl"
            >
              Dr. Maya Reynolds, PsyD
            </a>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 md:text-xs">
              Licensed Clinical Psychologist
            </span>
          </div>

          <nav
            aria-label="Main"
            className="hidden items-center gap-7 text-sm font-medium text-stone-700 lg:flex"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="transition hover:text-[color:var(--accent)]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800 sm:inline-block"
            >
              Book Consultation
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-xl lg:hidden"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="flex flex-col gap-1 border-t border-stone-200 bg-[color:var(--cream)] px-6 py-4 font-medium lg:hidden"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-center font-semibold text-white"
            >
              Book Consultation
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        {/* 2. HERO: text + 2-photo grid */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <Eyebrow>A space to exhale • In-Person &amp; Telehealth</Eyebrow>
            <h1 className="font-serif text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
              Anxiety, Trauma &amp; Burnout Therapy in{" "}
              <span className="whitespace-nowrap italic text-[color:var(--accent)]">
                Santa Monica, CA
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-stone-700">
              Therapy for high-achieving, thoughtful, and self-aware adults who
              internally feel exhausted, stuck in overthinking, or emotionally
              on edge.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <PrimaryButton href="#contact">
                Schedule Free Consultation
              </PrimaryButton>
              <a
                href="#specialties"
                className="rounded-full border border-stone-300 px-7 py-3.5 font-semibold transition hover:bg-stone-100"
              >
                Explore Specializations
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            <div className="space-y-4">
              <img
                src={IMG.heroMaya}
                alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
                className="h-64 w-full rounded-2xl border border-stone-200 object-cover object-top shadow-sm"
              />
              <div className="rounded-2xl border border-stone-200 bg-white p-4 text-center">
                <p className="text-xs font-bold">In-Person Practice</p>
                <p className="text-[11px] text-stone-600">Santa Monica, CA</p>
              </div>
            </div>
            <div className="pt-6">
              <img
                src={IMG.heroOffice}
                alt="Dr. Maya Reynolds in a therapy session with a client"
                className="h-72 w-full rounded-2xl border border-stone-200 object-cover shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* 3. CORE METHODS STRIP */}
        <section className="border-y border-stone-200 bg-[color:var(--sand)]/60 py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 text-xs font-semibold text-stone-700">
            <span className="mr-2 text-[11px] font-bold uppercase tracking-wider text-[color:var(--accent)]">
              Core Methods:
            </span>
            {[
              "Cognitive Behavioral Therapy (CBT)",
              "EMDR Trauma Recovery",
              "Somatic & Mindfulness Practices",
              "California Telehealth",
            ].map((m) => (
              <span
                key={m}
                className="rounded-full border border-stone-200 bg-white px-3.5 py-1.5"
              >
                {m}
              </span>
            ))}
          </div>
        </section>

        {/* 3b. INTRO: heading, italic line, paragraph, wide image (mirrors original) */}
        <section className="mx-auto max-w-5xl px-6 pt-20 text-center">
          <h2 className="font-serif text-3xl leading-snug md:text-4xl">
            You can look like you have it all together and still feel
            depleted inside.
          </h2>
          <p className="mt-4 font-serif text-xl italic text-[color:var(--accent)]">
            You deserve therapy that moves at a pace that feels safe.
          </p>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-stone-700">
            If you are healing from complex past trauma, managing chronic
            anxiety, or navigating workplace burnout, I offer a collaborative,
            structured space in Santa Monica and online across California to
            slow down, feel understood, and find your footing again.
          </p>
          <img
            src={IMG.intro}
            alt="Calm Santa Monica therapy office with natural light and soft seating"
            className="mt-10 h-72 w-full rounded-3xl border border-stone-200 object-cover shadow-sm md:h-96"
          />
        </section>

        {/* 4. ABOUT / BIO */}
        <section
          id="about"
          className="mx-auto grid max-w-7xl scroll-mt-24 grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <img
              src={IMG.bio}
              alt="Dr. Maya Reynolds in session with a client in her Santa Monica office"
              className="h-[420px] w-full rounded-3xl border border-stone-200 object-cover shadow-sm"
            />
          </div>
          <div className="space-y-5 lg:col-span-7">
            <Eyebrow>Grounded, Warm &amp; Collaborative</Eyebrow>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Hi, I&rsquo;m Dr. Maya Reynolds.
            </h2>
            <p className="leading-relaxed text-stone-700">
              I specialize in working with high-achieving adults,
              professionals, and creatives who feel internally overwhelmed
              while maintaining high standards on the outside. My approach
              blends evidence-based techniques like CBT and EMDR with somatic
              and mindfulness practices.
            </p>
            <p className="leading-relaxed text-stone-700">
              Whether you are healing from complex past trauma, managing
              chronic anxiety, or navigating workplace burnout, we will work at
              a pace that feels safe, structured, and collaborative.
            </p>
          </div>
        </section>

        {/* 5. WHO I HELP */}
        <section
          id="who-i-help"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20"
        >
          <div className="mx-auto mb-14 max-w-2xl space-y-3 text-center">
            <Eyebrow>Tailored Support</Eyebrow>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Who I Help
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {WHO_I_HELP.map((w) => (
              <article
                key={w.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                <img src={w.img} alt={w.alt} className="h-48 w-full object-cover" />
                <div className="space-y-3 p-6">
                  <h3 className="font-serif text-xl font-bold">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {w.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. STACKED ITALIC KEYWORD LIST */}
        <section className="border-y border-stone-200 bg-white py-12">
          <div className="mx-auto max-w-4xl divide-y divide-stone-200 px-6 text-center font-serif text-lg italic text-stone-700 md:text-2xl">
            {KEYWORDS.map((k) => (
              <div key={k} className="py-4">
                {k}
              </div>
            ))}
            <div className="py-4 text-[color:var(--accent)]">…and more.</div>
          </div>
        </section>

        {/* 7. HOW I WORK */}
        <section
          id="how-i-work"
          className="scroll-mt-24 border-b border-stone-200 bg-stone-100/60 py-20"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <img
                src={IMG.howIWork}
                alt="Calm therapy room with bookshelf and natural light"
                className="h-[420px] w-full rounded-3xl border border-stone-200 object-cover shadow-sm"
              />
            </div>
            <div className="space-y-5 lg:col-span-7">
              <Eyebrow>Intentional &amp; Personalized Care</Eyebrow>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                How I Work
              </h2>
              <p className="leading-relaxed text-stone-700">
                I believe therapy works best when clients feel respected,
                understood, and actively involved. My approach blends
                evidence-based techniques like CBT and EMDR with somatic and
                mindfulness practices.
              </p>
              <p className="leading-relaxed text-stone-700">
                I take the time to deeply listen to your story, gently explore
                your emotions, and build practical tools tailored to your
                daily life.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                >
                  Start With a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SPECIALTIES (3 services - image banner removed) */}
        <section id="specialties" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mx-auto mb-14 max-w-2xl space-y-3 text-center">
              <Eyebrow>Areas of Focus</Eyebrow>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                Anxiety, Trauma &amp; Burnout Specialties in Santa Monica
              </h2>
              <p className="text-stone-600">
                Practical tools combined with depth-oriented care tailored to
                your individual goals.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {SPECIALTIES.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col justify-between space-y-4 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
                >
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-stone-600">
                      {s.text}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-block text-sm font-bold text-[color:var(--accent)] hover:underline"
                  >
                    Learn more →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 9. NEW SECTION: OUR OFFICE */}
        <section
          id="office"
          className="scroll-mt-24 border-y border-stone-200 bg-[color:var(--sand)]/40 py-20"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              <Eyebrow>A Calm Physical Space</Eyebrow>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                Our Santa Monica Sanctuary
              </h2>
              <p className="leading-relaxed text-stone-700">
                Located at{" "}
                <strong className="text-[color:var(--primary)]">
                  {CONTACT.street}, {CONTACT.cityLine}
                </strong>
                , our physical practice space is intentionally curated to feel
                warm, safe, and private.
              </p>
              <p className="leading-relaxed text-stone-700">
                Featuring uncluttered surroundings, natural sunlight, and quiet
                seating, our office offers a serene environment where you can
                slow down and feel centered from the moment you arrive.
              </p>
              <p className="inline-block rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700">
                In-person in Santa Monica · Telehealth across California
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              <img
                src={IMG.officeA}
                alt="Seating area with brick wall and tall windows in the Santa Monica therapy office"
                className="h-64 w-full rounded-2xl border border-stone-200 object-cover shadow-sm"
              />
              <img
                src={IMG.officeB}
                alt="Therapy office with built-in shelves, plants, and natural light"
                className="h-64 w-full rounded-2xl border border-stone-200 object-cover shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* 9b. STANDALONE FEES & INSURANCE SECTION */}
        <section
          id="fees"
          className="scroll-mt-24 border-b border-stone-200 bg-white py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-14 max-w-2xl space-y-3 text-center">
              <Eyebrow>Investment &amp; Logistics</Eyebrow>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                Fees &amp; Insurance
              </h2>
              <p className="text-stone-600">
                Transparent pricing and clear guidance on out-of-network reimbursement.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <article className="flex flex-col justify-between space-y-4 rounded-2xl border border-stone-200 bg-[color:var(--cream)] p-8 shadow-sm">
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--sand)] text-lg font-bold text-[color:var(--accent)]">
                    1
                  </div>
                  <h3 className="font-serif text-xl font-bold">Initial Consultation</h3>
                  <p className="text-2xl font-bold text-[color:var(--accent)]">
                    Complimentary
                  </p>
                  <p className="text-sm leading-relaxed text-stone-600">
                    A free 15-minute phone consultation to discuss your goals, answer logistical questions, and confirm fit.
                  </p>
                </div>
              </article>

              <article className="flex flex-col justify-between space-y-4 rounded-2xl border border-stone-200 bg-[color:var(--cream)] p-8 shadow-sm">
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--sand)] text-lg font-bold text-[color:var(--accent)]">
                    2
                  </div>
                  <h3 className="font-serif text-xl font-bold">Individual Sessions</h3>
                  <p className="text-2xl font-bold text-[color:var(--accent)]">
                    $220 – $250 / session
                  </p>
                  <p className="text-sm leading-relaxed text-stone-600">
                    50-minute individual sessions (In-Person Santa Monica or California Telehealth). Payment is due at session time via debit, credit, or HSA/FSA card.
                  </p>
                </div>
              </article>

              <article className="flex flex-col justify-between space-y-4 rounded-2xl border border-stone-200 bg-[color:var(--cream)] p-8 shadow-sm">
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--sand)] text-lg font-bold text-[color:var(--accent)]">
                    3
                  </div>
                  <h3 className="font-serif text-xl font-bold">Insurance &amp; Superbills</h3>
                  <p className="text-2xl font-bold text-[color:var(--accent)]">
                    Out-of-Network (PPO)
                  </p>
                  <p className="text-sm leading-relaxed text-stone-600">
                    Dr. Reynolds is an out-of-network provider and does not bill insurance directly. Itemized monthly superbills are provided for you to submit to your PPO insurance for potential reimbursement.
                  </p>
                </div>
              </article>
            </div>

            {/* Insurance details helper card */}
            <div className="mt-10 rounded-2xl border border-stone-200 bg-[color:var(--sand)]/40 p-6 sm:p-8">
              <h4 className="font-serif text-lg font-bold text-[color:var(--primary)] mb-2">
                Questions to Ask Your PPO Insurance Provider:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 list-disc list-inside">
                <li>Do I have out-of-network mental health benefits?</li>
                <li>What is my out-of-network deductible, and has it been met?</li>
                <li>What percentage of the session cost is covered for CPT code 90834?</li>
                <li>How do I submit monthly superbills for reimbursement?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20">
          <div className="mx-auto mb-12 max-w-xl space-y-3 text-center">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="font-serif text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-serif font-bold transition hover:bg-stone-50"
                    >
                      <span>{item.q}</span>
                      <span
                        aria-hidden
                        className="text-xl text-[color:var(--accent)]"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={`faq-panel-${idx}`}
                      className="border-t border-stone-100 px-6 pb-5 pt-3 text-sm leading-relaxed text-stone-700"
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section
          id="contact"
          className="scroll-mt-24 bg-[color:var(--primary)] px-6 py-20 text-white"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12">
            <div className="space-y-5 text-center md:col-span-7 md:text-left">
              <Eyebrow light>Find a Therapist</Eyebrow>
              <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
                Find the pace that feels right for you.
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-stone-300">
                Schedule a free 15-minute consultation to discuss your therapy
                goals and explore how we can work together in Santa Monica or
                online across California.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-block rounded-full bg-[color:var(--accent)] px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-[color:var(--accent-hover)]"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={IMG.cta}
                alt="Dr. Maya Reynolds, welcoming new therapy clients in Santa Monica"
                className="h-80 w-full rounded-3xl border border-stone-800 object-cover object-top shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 12. FOOTER */}
      <footer className="border-t border-stone-800 bg-stone-900 px-6 py-12 text-xs text-stone-400">
        <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-8 border-b border-stone-800 pb-8 md:grid-cols-3">
          <div className="space-y-3">
            <p className="font-serif text-base font-bold text-white">
              Dr. Maya Reynolds, PsyD
            </p>
            <p className="leading-relaxed">
              Licensed Clinical Psychologist providing in-person therapy in
              Santa Monica and secure telehealth throughout California.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white">
              Practice Location
            </p>
            <p>{CONTACT.street}</p>
            <p>{CONTACT.cityLine}</p>
            <p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition hover:text-white"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white">
              Navigate
            </p>
            <div className="flex flex-col gap-1.5">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="transition hover:text-white"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <p>Santa Monica, CA · Telehealth across California</p>
        </div>
      </footer>
    </div>
  );
}