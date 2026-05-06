import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Users, Lightbulb, ArrowRight } from '@phosphor-icons/react';
import Lightbox from './Lightbox';

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

function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ClickableImage({ src, alt, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      onClick={() => onClick(src, alt)}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
      loading="lazy"
    />
  );
}

export default function Orientamento() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Lightbox>
      {(openLightbox) => (
        <section id="orientamento" className="py-28 md:py-40 bg-elevated overflow-hidden" ref={ref}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {/* ─── Header: asymmetric split ─── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end mb-20 md:mb-32">
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                    Giorno 5
                  </p>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[0.92] text-text-primary">
                    Orientamento
                    <br />
                    <span className="text-accent italic">al futuro</span>
                  </h2>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <ScrollReveal delay={0.15}>
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    Il percorso si conclude con la visita al{' '}
                    <strong className="text-text-primary">Politecnico di Bari</strong>, unendo
                    visione aziendale e prospettiva accademica.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* ─── Hero block: split 50/50 + parallax image ─── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-24 md:mb-36">
              <ScrollReveal className="lg:col-span-6">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-text-primary">
                    Dall&apos;impresa all&apos;università
                  </h3>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-[55ch]">
                    Dopo aver respirato la cultura corporate di Deloitte, abbiamo calpestato i campus del
                    Politecnico di Bari. Esplorare laboratori, aule e spazi di ricerca ha trasformato il
                    concetto astratto di &quot;università" in un&apos;opportunità concreta e tangibile.
                  </p>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-[55ch]">
                    Vederlo con i propri occhi ha fatto la differenza rispetto a qualsiasi presentazione
                    in classe. Il percorso <strong className="text-text-primary">Informatica</strong> si è
                    rivelato solido: le professioni STEM non sono un slogan, ma un campo di lavoro
                    espansivo e concreto.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {[
                      { icon: GraduationCap, label: 'Politecnico di Bari' },
                      { icon: MapPin, label: 'Campus e laboratori' },
                      { icon: Users, label: 'Professioni STEM' },
                      { icon: Lightbulb, label: 'Scelte future' },
                    ].map((f, i) => (
                      <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-sm text-text-secondary border border-slate-200/50">
                        <f.icon size={16} weight="duotone" className="text-accent" />
                        {f.label}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <motion.div style={{ y: y1 }} className="lg:col-span-5 lg:col-start-8 relative">
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
                  <ClickableImage
                    src="images/poliba-campus.jpg"
                    alt="Campus Politecnico di Bari"
                    onClick={openLightbox}
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -left-6 md:-left-10 bg-surface rounded-2xl px-5 py-4 border border-slate-200/50 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)]"
                >
                  <p className="text-[10px] uppercase tracking-widest text-text-tertiary mb-1">Sede visitata</p>
                  <p className="text-sm font-bold text-text-primary">Politecnico di Bari</p>
                </motion.div>
              </motion.div>
            </div>

            {/* ─── Photo essay: 4 foto grandi ─── */}
            <ScrollReveal>
              <div className="mb-10 flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-text-primary">
                  Momenti della visita
                </h3>
                <span className="text-xs font-mono text-text-tertiary uppercase tracking-wider">4 foto</span>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-12 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
              {/* All 4 photos same size: 2x2 grid */}
              <StaggerItem className="col-span-12 md:col-span-6 row-span-2 relative overflow-hidden rounded-[2rem] border border-slate-200/50 group">
                <ClickableImage
                  src="images/poliba-presentazione-01.jpg"
                  alt="Presentazione progetto al Politecnico"
                  onClick={openLightbox}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs font-medium text-white drop-shadow-md">Presentazione progetto</p>
                </div>
              </StaggerItem>

              <StaggerItem className="col-span-12 md:col-span-6 row-span-2 relative overflow-hidden rounded-[2rem] border border-slate-200/50 group">
                <ClickableImage
                  src="images/poliba-presentazione-05.jpg"
                  alt="Pitch davanti ai tutor"
                  onClick={openLightbox}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs font-medium text-white drop-shadow-md">Pitch davanti ai tutor</p>
                </div>
              </StaggerItem>

              <StaggerItem className="col-span-12 md:col-span-6 row-span-2 relative overflow-hidden rounded-[2rem] border border-slate-200/50 group">
                <ClickableImage
                  src="images/poliba-presentazione-03.jpg"
                  alt="Sessione di domande e risposte"
                  onClick={openLightbox}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs font-medium text-white drop-shadow-md">Sessione di domande e risposte</p>
                </div>
              </StaggerItem>

              <StaggerItem className="col-span-12 md:col-span-6 row-span-2 relative overflow-hidden rounded-[2rem] border border-slate-200/50 group">
                <ClickableImage
                  src="images/poliba-presentazione-04.jpg"
                  alt="Il team in aula"
                  onClick={openLightbox}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs font-medium text-white drop-shadow-md">Il team in aula</p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* ─── CTA link ─── */}
            <ScrollReveal delay={0.2} className="mt-16 text-center lg:text-left">
              <a
                href="#riflessioni"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-text-primary text-white rounded-full text-base font-medium hover:bg-accent transition-colors shadow-[0_4px_14px_-4px_rgba(0,0,0,0.2)]"
              >
                Passa alle riflessioni
                <ArrowRight size={18} weight="bold" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      )}
    </Lightbox>
  );
}
