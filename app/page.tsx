'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E293B] font-sans relative selection:bg-[#E07A5F] selection:text-white">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/60 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] left-[-100px] w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FBF9F5]/85 border-b border-stone-200/60 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#E07A5F] text-white flex items-center justify-center font-serif text-lg font-bold shadow-md shadow-[#E07A5F]/20">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-semibold tracking-tight text-[#0B132B]">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="text-[11px] text-stone-500 uppercase tracking-widest font-medium">
                Licensed Clinical Psychologist
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-[#E07A5F] transition-colors">About</a>
            <a href="#services" className="hover:text-[#E07A5F] transition-colors">Services Offered</a>
            <a href="#office" className="hover:text-[#E07A5F] transition-colors">Office Space</a>
            <a href="#faq" className="hover:text-[#E07A5F] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#E07A5F] transition-colors">Contact</a>
          </div>

          <a
            href="#contact"
            className="bg-[#0B132B] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#E07A5F] transition-all duration-300 shadow-sm"
          >
            Book a Consultation
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-xs font-semibold text-[#8C4A32]">
            <span className="w-2 h-2 rounded-full bg-[#E07A5F]" />
            <span>Santa Monica Practice & Virtual Care Across California</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0B132B] font-medium leading-[1.15]">
            A space to exhale: <br />
            <span className="italic font-normal text-[#E07A5F]">Anxiety, trauma,</span> & burnout therapy.
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
            Therapy for high-achieving, thoughtful, and self-aware adults who internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contact"
              className="bg-[#E07A5F] text-white text-center font-medium px-8 py-4 rounded-full hover:bg-[#d0694e] transition-all shadow-lg shadow-[#E07A5F]/25"
            >
              Schedule Free Consultation
            </a>
            <a
              href="#services"
              className="border border-stone-300 text-[#0B132B] text-center font-medium px-8 py-4 rounded-full hover:bg-stone-100 transition-all"
            >
              Explore Specializations
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500">
            <span className="uppercase text-[10px] tracking-widest text-stone-400 font-semibold mr-2">Evidence-Based Methods:</span>
            {['Cognitive-Behavioral Therapy (CBT)', 'EMDR Therapy', 'Mindfulness Practices', 'Body-Oriented Techniques'].map((tag) => (
              <span key={tag} className="bg-white border border-stone-200/80 px-3.5 py-1.5 rounded-full shadow-sm text-stone-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Portrait Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="bg-white p-6 rounded-[2.5rem] border border-stone-200/80 shadow-xl shadow-stone-200/50 w-full max-w-md space-y-5">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-stone-100">
              <img
                src="/dr-maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-200 text-xs font-semibold text-[#0B132B]">
                ✨ Dr. Maya Reynolds, PsyD
              </div>
            </div>

            <div className="space-y-2 text-center">
              <h3 className="font-serif text-xl font-semibold text-[#0B132B]">
                Licensed Clinical Psychologist
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed italic">
                "I believe therapy works best when clients feel respected, understood, and actively involved in the process."
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                In-Person & Telehealth
              </span>
              <span className="font-semibold text-[#E07A5F]">Santa Monica, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-t border-stone-200/60">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
              <img
                src="/therapy-session.png"
                alt="Dr. Maya Reynolds in an active therapy session"
                className="w-full h-[28rem] object-cover object-top"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#E07A5F] font-bold">About Dr. Maya Reynolds, PsyD</span>
            <h2 className="text-3xl font-serif text-[#0B132B] font-medium">A warm, collaborative, and grounded approach</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Sessions are structured enough to feel supportive, while leaving space for reflection and depth. I integrate Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20 border-t border-stone-200/60">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E07A5F] font-bold">Clinical Specializations</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0B132B] font-medium mt-2">
            Practical tools combined with depth-oriented care
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Anxiety & Panic',
              icon: '☀️',
              badge: 'Individual Care',
              desc: 'Support for adults feeling functional on the outside while struggling with constant worry, body tension, sleeping difficulty, or bracing for something to go wrong.'
            },
            {
              title: 'Trauma & EMDR Recovery',
              icon: '🕊️',
              badge: 'Paced & Safe',
              desc: 'Paced trauma therapy focused on safety and stabilization for single-incident events or complex patterns stemming from childhood, relationships, or chronic stress.'
            },
            {
              title: 'Burnout & Perfectionism',
              icon: '🌱',
              badge: 'Creatives & Executives',
              desc: 'Tailored for entrepreneurs, creatives, and professionals feeling disconnected after years of pushing through stress, helping you develop sustainable ways of living and working.'
            },
            {
              title: 'Somatic & Body-Oriented',
              icon: '🌊',
              badge: 'Mind-Body Care',
              desc: 'Addressing both emotional and physiological experiences, utilizing body-centered practices to help you feel more regulated in daily life.'
            },
            {
              title: 'California Telehealth',
              icon: '💻',
              badge: 'Virtual Care',
              desc: 'Secure, HIPAA-compliant telehealth sessions providing depth-oriented therapy to clients located anywhere within California.'
            },
            {
              title: 'Santa Monica In-Person',
              icon: '🏛️',
              badge: 'In-Person Sanctuary',
              desc: 'In-person therapy held in a quiet, private office designed with natural light and an uncluttered environment to help you feel at ease upon arrival.'
            },
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-stone-200/80 hover:border-[#E07A5F]/50 transition-all shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-[11px] font-semibold uppercase bg-amber-50 text-[#8C4A32] border border-amber-200 px-3 py-1 rounded-full">{service.badge}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#0B132B] mb-3 group-hover:text-[#E07A5F] transition-colors">{service.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Office & Location Section */}
      <section id="office" className="max-w-7xl mx-auto px-6 py-20 border-t border-stone-200/60">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E07A5F] font-bold">Office Environment</span>
            <h2 className="text-3xl font-serif text-[#0B132B] font-medium">A calm and grounding sanctuary in Santa Monica</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              My office is a quiet, private space designed to feel calm and grounding, featuring natural light and a comfortable, uncluttered environment[cite: 1, 2, 3, 4]. Clients often share that the space itself helps them feel more at ease when they arrive[cite: 1, 2, 3, 4].
            </p>
            <div className="p-4 bg-white rounded-2xl border border-stone-200 text-sm text-stone-700 space-y-1 max-w-xl">
              <p className="font-semibold text-[#0B132B]">📍 Practice Office Address:</p>
              <p className="text-stone-600">123th Street 45 W, Santa Monica, CA 90401</p>
              <p className="text-xs text-stone-500 pt-1">In-person appointments in Santa Monica | Secure Telehealth statewide across California</p>
            </div>
          </div>

          {/* Office Image Gallery */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-4 rounded-3xl border border-stone-200 shadow-md space-y-3">
              <div className="h-72 rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src="/office-brick.jpeg"
                  alt="Santa Monica Therapy Office Seating Area"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-stone-500 font-medium">Santa Monica Office - Seating & Natural Light[cite: 1, 4]</p>
            </div>

            <div className="bg-white p-4 rounded-3xl border border-stone-200 shadow-md space-y-3">
              <div className="h-72 rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src="/office-bookshelf.jpeg"
                  alt="Santa Monica Therapy Office Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-stone-500 font-medium">Santa Monica Office - Calm Uncluttered Environment[cite: 2, 3]</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20 border-t border-stone-200/60">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#E07A5F] font-bold">Common Questions</span>
          <h2 className="text-3xl font-serif text-[#0B132B] font-medium mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Where is your therapy practice located?',
              a: 'My office is located at 123th Street 45 W, Santa Monica, CA 90401. I also provide secure, HIPAA-compliant telehealth sessions to clients anywhere in California.'
            },
            {
              q: 'What therapeutic approaches do you integrate?',
              a: 'I combine Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented somatic techniques to address both the emotional and physiological aspects of anxiety, trauma, and stress.'
            },
            {
              q: 'How does trauma therapy with EMDR work?',
              a: 'Trauma work is carefully paced with an emphasis on safety and stabilization. We work with single-incident trauma as well as complex patterns, helping you feel regulated in daily life rather than just in session.'
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left font-serif font-medium text-lg text-[#0B132B] flex items-center justify-between hover:text-[#E07A5F] transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-xl ml-4">{activeFaq === index ? '−' : '+'}</span>
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-stone-200/60">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#E07A5F] font-bold">Get In Touch</span>
          <h2 className="text-3xl font-serif text-[#0B132B] font-medium mt-2">Schedule a Free Initial Consultation</h2>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <span className="text-4xl">✨</span>
              <h3 className="text-xl font-serif font-semibold text-[#0B132B]">Thank you for reaching out!</h3>
              <p className="text-sm text-stone-600">Dr. Maya Reynolds will review your inquiry and get back to you within 24 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#E07A5F] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#E07A5F] text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-stone-600 mb-2">How can I help you? *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a brief overview of what you are seeking support with..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#E07A5F] text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0B132B] text-white py-4 rounded-xl font-medium hover:bg-[#E07A5F] transition-all shadow-md text-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B132B] text-stone-400 py-12 px-6 text-center text-xs">
        <p className="text-stone-300 font-serif text-base mb-2">Dr. Maya Reynolds, PsyD</p>
        <p className="mb-1">123th Street 45 W, Santa Monica, CA 90401</p>
        <p>© 2026 Dr. Maya Reynolds, PsyD. All rights reserved. Santa Monica, CA & Telehealth statewide.</p>
      </footer>
    </div>
  );
}