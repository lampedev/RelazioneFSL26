import { motion } from 'framer-motion';
import { CheckCircle } from '@phosphor-icons/react';

function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Attivita() {
  return (
    <section id="attivita" className="py-28 md:py-40 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
              Le Attività
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.05] text-text-primary mb-6">
              Attività Svolte
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Dalla teoria alla pratica: lavoro di squadra su challenge reali nei domini chiave del business moderno.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-20 md:space-y-32">
          {/* Activity 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="rounded-[2.5rem] overflow-hidden bg-muted aspect-video group border border-slate-200/50">
                <img
                  src="/images/foto-collaborazione-lavoro-gruppo.jpg"
                  alt="Teamwork"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="order-1 lg:order-2">
              <span className="text-accent font-semibold tracking-wider text-sm mb-4 block">
                01 / TEAM WORK
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-text-primary mb-5">
                Progetti focalizzati su Aree di Business
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Siamo stati divisi in squadre per affrontare sfide reali in specifici ambiti (OR1-OR5), come{' '}
                <strong className="text-text-primary">xTech NextHub</strong> per la Digital
                Transformation e AI, <strong className="text-text-primary">Food & Agritech</strong>, e{' '}
                <strong className="text-text-primary">Smart Manufacturing / Industria 4.0</strong>.
              </p>
              <ul className="space-y-3">
                {[
                  'Analisi di un Need reale',
                  'Brainstorming soluzioni innovative',
                  'Strutturazione di un prototipo',
                  'Preparazione del pitch finale',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Activity 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <span className="text-accent font-semibold tracking-wider text-sm mb-4 block">
                02 / WORKSHOP & APPROFONDIMENTI
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-text-primary mb-5">
                Tecnologie di Frontiera
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Sessioni formative tenute da consulenti Deloitte su tematiche all&apos;avanguardia: dal
                funzionamento della <strong className="text-text-primary">Blockchain</strong> per la
                tracciabilita (es. Agritech), alle reti aziendali, fino all&apos;utilizzo di{' '}
                <strong className="text-text-primary">GenAI</strong> e la creazione di Start-Up
                dall&apos;idea all&apos;MVP.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-[2.5rem] overflow-hidden bg-muted aspect-video group border border-slate-200/50">
                <img
                  src="/images/foto-indormatica-operation-tecnologies.jpg"
                  alt="Presentation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Activity 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="rounded-[2.5rem] overflow-hidden bg-muted aspect-video group border border-slate-200/50">
                <img
                  src="/images/foto-tutti-insieme-sulk-palco.jpg"
                  alt="Students oriented"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="order-1 lg:order-2">
              <span className="text-accent font-semibold tracking-wider text-sm mb-4 block">
                03 / ORIENTAMENTO
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-text-primary mb-5">
                Mondo Corporate e Università
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                L&apos;esperienza ci ha fatto vivere da vicino la realtà di una multinazionale
                (&quot;Life at Deloitte&quot;) e sulle professioni STEM. Il percorso si e concluso con
                l&apos;orientamento al <strong className="text-text-primary">Politecnico di Bari</strong>.
              </p>
              <a href="#orientamento" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark transition-colors font-medium">
                Leggi di piu sull&apos;orientamento
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
