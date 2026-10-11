"use client";

import React, { useState } from "react";

// Centralized Reusable Theme Token Configuration
const THEME = {
  primary: "#0B132B",      // Obsidian Slate Navy
  accent: "#A0422B",       // Terracotta Primary Accent
  accentHover: "#883520",  // Darker Terracotta Hover
  accentLight: "#E8A58F",  // Light Terracotta Contrast Highlight
  cream: "#FBF9F5",        // Warm Sand Main Background
  sand: "#F4EBE1",         // Soft Sand Secondary Container Accent
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#0B132B] font-sans antialiased selection:bg-[#A0422B] selection:text-white">
      
      {/* LOCAL SEO SCHEMA (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dr. Maya Reynolds, PsyD - Clinical Psychologist",
            "image": "https://www.drmayareynolds.com/dr-maya-reynolds.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 West Street",
              "addressLocality": "Santa Monica",
              "addressRegion": "CA",
              "postalCode": "90401",
              "addressCountry": "US"
            },
            "description": "Individual therapy for anxiety, trauma, and burnout in Santa Monica, CA and virtual care across California.",
            "medicalSpecialty": ["Psychotherapy", "EMDR", "CognitiveBehavioralTherapy"]
          }),
        }}
      />

      {/* 1. STICKY HEADER & RESPONSIVE NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200 py-4 px-6 md:px-12 flex justify-between items-center relative">
        <div>
          <a href="#" className="font-serif text-xl font-bold tracking-tight text-[#0B132B] block">
            Dr. Maya Reynolds, PsyD
          </a>
          <span className="text-xs text-stone-600 uppercase tracking-wider font-semibold block">
            Licensed Clinical Psychologist
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
          <a href="#about" className="hover:text-[#A0422B] transition">About</a>
          <a href="#who-i-help" className="hover:text-[#A0422B] transition">Who I Help</a>
          <a href="#how-i-work" className="hover:text-[#A0422B] transition">How I Work</a>
          <a href="#services" className="hover:text-[#A0422B] transition">Services</a>
          <a href="#office" className="hover:text-[#A0422B] transition">Our Office</a>
          <a href="#faq" className="hover:text-[#A0422B] transition">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-block bg-[#0B132B] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-800 transition"
          >
            Book Consultation
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-10 w-10 rounded-full border border-stone-300 text-xl flex items-center justify-center text-[#0B132B]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Nav Dropdown Panel */}
        {menuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-full bg-[#FBF9F5] border-b border-stone-200 px-6 py-4 flex flex-col gap-3 font-medium text-stone-800 shadow-lg">
            {[
              ["About", "#about"],
              ["Who I Help", "#who-i-help"],
              ["How I Work", "#how-i-work"],
              ["Services", "#services"],
              ["Our Office", "#office"],
              ["FAQ", "#faq"],
              ["Book Consultation", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-1 hover:text-[#A0422B] transition"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-[#A0422B] text-xs font-bold tracking-wider uppercase">
            A space to exhale • In-Person &amp; Telehealth
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-[#0B132B]">
            Anxiety, Trauma &amp; Burnout Therapy in{" "}
            <span className="italic text-[#A0422B] whitespace-nowrap">Santa Monica, CA</span>
          </h1>
          <p className="text-stone-700 text-lg max-w-xl leading-relaxed">
            Therapy for high-achieving, thoughtful, and self-aware adults who internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="bg-[#A0422B] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#883520] shadow-sm transition"
            >
              Schedule Free Consultation
            </a>
            <a
              href="#services"
              className="border border-stone-300 text-[#0B132B] px-7 py-3.5 rounded-full font-semibold hover:bg-stone-100 transition"
            >
              Explore Specializations
            </a>
          </div>
        </div>

        {/* Hero Image Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src="/dr-maya-reynolds.png"
              alt="Portrait of Dr. Maya Reynolds, PsyD"
              className="w-full h-64 object-cover rounded-2xl shadow-sm border border-stone-200"
            />
            <div className="bg-white p-4 rounded-2xl border border-stone-200 text-center">
              <p className="text-xs font-bold text-[#0B132B]">In-Person Practice</p>
              <p className="text-[11px] text-stone-500">Santa Monica, CA</p>
            </div>
          </div>
          <div className="space-y-4 pt-6">
            <img
              src="/office-brick.jpeg"
              alt="Therapy consulting room with exposed brick and comfortable seating"
              className="w-full h-72 object-cover rounded-2xl shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      {/* 3. CORE METHODS STRIP */}
      <section className="bg-[#F4EBE1]/60 py-6 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-3 text-xs font-semibold text-stone-700">
          <span className="text-[#A0422B] uppercase tracking-wider text-[11px] font-bold mr-2">Core Methods:</span>
          <span className="bg-white px-3.5 py-1.5 rounded-full border border-stone-200">Cognitive Behavioral Therapy (CBT)</span>
          <span className="bg-white px-3.5 py-1.5 rounded-full border border-stone-200">EMDR Trauma Recovery</span>
          <span className="bg-white px-3.5 py-1.5 rounded-full border border-stone-200">Somatic &amp; Mindfulness Practices</span>
          <span className="bg-white px-3.5 py-1.5 rounded-full border border-stone-200">California Telehealth</span>
        </div>
      </section>

      {/* 4. ABOUT / BIO SECTION */}
      <section id="about" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <img
            src="/dr-maya-reynolds.png"
            alt="Dr. Maya Reynolds, clinical psychologist in Santa Monica, CA"
            className="w-full h-[420px] object-cover rounded-3xl shadow-sm border border-stone-200"
          />
        </div>
        <div className="lg:col-span-7 space-y-5">
          <p className="text-[#A0422B] text-xs font-bold tracking-wider uppercase">Grounded, Warm &amp; Collaborative</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">Hi, I’m Dr. Maya Reynolds.</h2>
          <p className="text-stone-700 leading-relaxed">
            I specialize in working with high-achieving adults, professionals, and creatives who feel internally overwhelmed while maintaining high standards on the outside. My approach blends evidence-based techniques like CBT and EMDR with somatic and mindfulness practices.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Whether you are healing from complex past trauma, managing chronic anxiety, or navigating workplace burnout, we will work at a pace that feels safe, structured, and collaborative.
          </p>
        </div>
      </section>

      {/* 5. "WHO I HELP" SECTION */}
      <section id="who-i-help" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20 border-t border-stone-200">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-[#A0422B] text-xs font-bold tracking-wider uppercase">Tailored Support</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">
            Who I Help
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <img
              src="/therapy-session.png"
              alt="Comfortable therapy conversation setting with natural daylight"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#0B132B]">High-Achieving Professionals</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Adults who appear functional and capable externally while internally struggling with chronic worry, perfectionism, or racing thoughts.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <img
              src="/office-bookshelf.jpeg"
              alt="Quiet therapy office library corner"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#0B132B]">Trauma &amp; Burnout Survivors</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Individuals navigating single-incident events or complex relational patterns who want paced, safe stabilization and healing.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <img
              src="/office-brick.jpeg"
              alt="Warm practice office interior"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#0B132B]">Creatives &amp; Entrepreneurs</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Thoughtful adults seeking sustainable tools to restore emotional regulation without sacrificing their personal standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SHORTENED ITALIC KEYWORD LIST */}
      <section className="bg-white py-12 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 divide-y divide-stone-200 text-center font-serif italic text-lg md:text-xl text-stone-700">
          <div className="py-4">Anxiety &amp; Panic Relief</div>
          <div className="py-4">Trauma &amp; EMDR Recovery</div>
          <div className="py-4">Burnout &amp; Perfectionism Therapy</div>
          <div className="py-4">Somatic &amp; Mindfulness Practices</div>
          <div className="py-4">Santa Monica &amp; California Telehealth</div>
        </div>
      </section>

      {/* 7. "HOW I WORK" SECTION */}
      <section id="how-i-work" className="scroll-mt-24 py-20 bg-stone-100/60 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img
              src="/therapy-session.png"
              alt="Individual counseling setup"
              className="w-full h-[420px] object-cover rounded-3xl shadow-sm border border-stone-200"
            />
          </div>
          <div className="lg:col-span-7 space-y-5">
            <p className="text-[#A0422B] text-xs font-bold tracking-wider uppercase">
              Intentional &amp; Personalized Care
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">
              How I Work
            </h2>
            <p className="text-stone-700 leading-relaxed">
              I believe therapy works best when clients feel respected, understood, and actively involved. My approach blends evidence-based techniques like CBT and EMDR with somatic and mindfulness practices.
            </p>
            <p className="text-stone-700 leading-relaxed">
              I take the time to deeply listen to your story, gently exploring emotions and developing practical tools tailored to your daily life.
            </p>
            <div className="pt-2">
              <a
                href="#about"
                className="inline-block bg-[#0B132B] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-stone-800 transition"
              >
                Learn More About My Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SPECIALTIES & CORE SERVICES */}
      <section id="services" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-[#A0422B] text-xs font-bold tracking-wider uppercase">Areas of Focus</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B132B]">
            Anxiety, Trauma &amp; Burnout Specialties in Santa Monica
          </h2>
          <p className="text-stone-600">
            Practical tools combined with depth-oriented care tailored to your individual goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#0B132B]">Anxiety &amp; Panic</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Support for adults feeling functional on the outside while struggling with constant worry, body tension, sleeping difficulty, or bracing for something to go wrong.
              </p>
            </div>
            <a href="#contact" className="inline-block text-[#A0422B] font-bold text-sm hover:underline">
              Learn more →
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#0B132B]">Trauma &amp; EMDR Recovery</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Paced trauma therapy focused on safety and stabilization for single-incident events or complex patterns stemming from childhood, relationships, or chronic stress.
              </p>
            </div>
            <a href="#contact" className="inline-block text-[#A0422B] font-bold text-sm hover:underline">
              Learn more →
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#0B132B]">Burnout &amp; Perfectionism</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Tailored for entrepreneurs, creatives, and professionals feeling disconnected after years of pushing through stress, helping you develop sustainable ways of living.
              </p>
            </div>
            <a href="#contact" className="inline-block text-[#A0422B] font-bold text-sm hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* 9. CUSTOM "OUR SANTA MONICA SANCTUARY" OFFICE SECTION */}
      <section id="office" className="scroll-mt-24 bg-[#F4EBE1]/40 py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[#A0422B] text-xs font-bold tracking-wider uppercase">
              A Calm Physical Space
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#0B132B]">
              Our Santa Monica Sanctuary
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Located at <strong className="text-[#0B132B]">123 West Street, Santa Monica, CA 90401</strong>, our physical practice space is intentionally curated to feel warm, safe, and private.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Featuring uncluttered surroundings, natural sunlight, and quiet seating, our office offers a serene environment where you can slow down and feel centered from the moment you arrive.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="/office-brick.jpeg"
              alt="Comfortable brick seating alcove in private therapy space"
              className="w-full h-64 object-cover rounded-2xl shadow-sm border border-stone-200"
            />
            <img
              src="/office-bookshelf.jpeg"
              alt="Private bookshelf workspace bathed in natural sunlight"
              className="w-full h-64 object-cover rounded-2xl shadow-sm border border-stone-200"
            />
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION SECTION */}
      <section id="faq" className="scroll-mt-24 max-w-4xl mx-auto px-6 py-20">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <p className="text-[#A0422B] text-xs font-bold tracking-wider uppercase">Common Questions</p>
          <h2 className="font-serif text-3xl font-bold text-[#0B132B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
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
              a: "I offer a complimentary 15-minute consultation call where we can discuss what you are looking for, answer any questions, and ensure my therapeutic approach feels right for you.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
            >
              <button
                type="button"
                aria-expanded={openFaq === idx}
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 text-left font-serif font-bold text-[#0B132B] flex justify-between items-center hover:bg-stone-50 transition"
              >
                <span>{item.q}</span>
                <span className="text-xl text-[#A0422B]">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-stone-700 text-sm leading-relaxed border-t border-stone-100 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. FINAL CTA WITH LARGE VISUAL IMAGE */}
      <section id="contact" className="scroll-mt-24 bg-[#0B132B] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-5 text-center md:text-left">
            <p className="text-[#E8A58F] text-xs font-bold tracking-wider uppercase">Find A Therapist</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              Find the pace that feels right for you.
            </h2>
            <p className="text-stone-300 text-sm max-w-lg leading-relaxed">
              Schedule a free 15-minute consultation to discuss your therapy goals and explore how we can work together in Santa Monica or online across California.
            </p>
            <div className="pt-2">
              <a
                href="mailto:contact@drmayareynolds.com"
                className="inline-block bg-[#A0422B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#883520] transition shadow-md"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <img
              src="/office-bookshelf.jpeg"
              alt="Calm private therapy sanctuary interior"
              className="w-full h-80 object-cover rounded-3xl shadow-lg border border-stone-800"
            />
          </div>
        </div>
      </section>

      {/* 12. EXPANDED FOOTER */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-12 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-stone-800">
          <div className="space-y-3">
            <p className="font-serif text-base text-white font-bold">Dr. Maya Reynolds, PsyD</p>
            <p className="text-stone-400 leading-relaxed">
              Licensed Clinical Psychologist providing in-person therapy in Santa Monica and telehealth throughout California.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-white uppercase text-[11px] tracking-wider">Practice Location</p>
            <p>123 West Street, Santa Monica, CA 90401</p>
            <p>Email: contact@drmayareynolds.com</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-white uppercase text-[11px] tracking-wider">Navigation</p>
            <div className="flex flex-col gap-1.5">
              <a href="#about" className="hover:text-white transition">About Dr. Maya</a>
              <a href="#services" className="hover:text-white transition">Therapy Services</a>
              <a href="#office" className="hover:text-white transition">Office Sanctuary</a>
              <a href="#faq" className="hover:text-white transition">Frequently Asked Questions</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-400">
          <p>© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Santa Monica, CA</span>
            <span>Statewide Telehealth</span>
          </div>
        </div>
      </footer>

    </div>
  );
}