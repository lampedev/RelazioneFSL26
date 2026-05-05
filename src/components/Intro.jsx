import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

export default function Intro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="intro" className="py-28 md:py-40 bg-surface overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10" ref={ref}>
        {/* Asymmetric header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end mb-20">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                Introduzione
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.05] text-text-primary">
                Un polo di eccellenza nel cuore della Fiera del Levante
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ScrollReveal delay={0.15}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Deloitte NextHub Bari rappresenta uno dei progetti strategici piu rilevanti per il
                Sud Italia. Oltre 9.000 mq di innovazione, formazione e trasformazione digitale.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Offset image + metrics */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <ScrollReveal className="lg:col-span-8">
            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]">
              <img
                src="/images/deloitte-reception.jpeg"
                alt="Reception NextHub"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollReveal>

          <motion.div
            style={{ y }}
            className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4 lg:-mt-12"
          >
            <ScrollReveal delay={0.1}>
              <div className="bg-elevated rounded-[2.5rem] p-7 border border-slate-200/50">
                <p className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-text-primary font-mono">
                  9.000
                </p>
                <p className="text-base text-text-secondary mt-2 leading-relaxed">
                  Metri quadri di spazi innovativi, auditorium e laboratori tecnologici.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-elevated rounded-[2.5rem] p-7 border border-slate-200/50">
                <p className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-text-primary font-mono">
                  1.200+
                </p>
                <p className="text-base text-text-secondary mt-2 leading-relaxed">
                  Postazioni di lavoro in un ambiente certificato LEED.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-elevated rounded-[2.5rem] p-7 border border-slate-200/50">
                <p className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-text-primary font-mono">
                  150
                </p>
                <p className="text-base text-text-secondary mt-2 leading-relaxed">
                  Paesi in cui Deloitte opera con standard di eccellenza globali.
                </p>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
