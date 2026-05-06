import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from '@phosphor-icons/react';

const keywords = [
  'AI',
  'GenAI',
  'Cybersecurity',
  'Cloud',
  'Digital Twin',
  'Data Analytics',
  'Blockchain',
  'Smart Manufacturing',
  'NextHub',
  'Innovazione',
];

function KineticMarquee() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-border-subtle bg-surface">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {[...keywords, ...keywords, ...keywords, ...keywords].map((word, i) => (
          <span
            key={i}
            className="text-base font-medium tracking-wide text-text-tertiary uppercase flex items-center gap-12 font-serif"
          >
            {word}
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-elevated"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Text — left, aggressive asymmetry */}
          <div className="lg:col-span-7 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-6"
            >
              IISS Ferraris — Molfetta
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-normal tracking-tight leading-[0.95] text-text-primary mb-8"
            >
              Relazione
              <br />
              <span className="text-accent italic">PCTO</span> 2026
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-[52ch] mb-10"
            >
              Un&apos;immersione di cinque giorni nel cuore dell&apos;innovazione
              digitale del Mezzogiorno. NextHub Bari, Deloitte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-8"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-text-tertiary mb-1 font-medium">Studente</p>
                <p className="text-base font-semibold text-text-primary">Giovanni Lampedecchia</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-tertiary mb-1 font-medium">Classe</p>
                <p className="text-base font-semibold text-text-primary">5BI Informatica</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-tertiary mb-1 font-medium">Periodo</p>
                <p className="text-base font-semibold text-text-primary">Marzo 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-tertiary mb-1 font-medium">Ore</p>
                <p className="text-base font-semibold text-text-primary font-mono">35</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <motion.a
                href="#intro"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-text-primary text-white rounded-full text-base font-medium
                           shadow-[0_4px_14px_-4px_rgba(0,0,0,0.2)]"
              >
                Esplora l&apos;esperienza
                <ArrowDown size={18} weight="bold" />
              </motion.a>
            </motion.div>
          </div>

          {/* Image — right, offset, parallax */}
          <motion.div style={{ y: y1 }} className="lg:col-span-5 relative">
            <div className="relative">
              <div
                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-slate-200/50
                           shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
              >
                <img
                  src="images/deloitte-palazzo.jpg"
                  alt="Sede Deloitte NextHub Bari"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card offset */}
              <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-8 -left-8 md:-left-16 bg-surface rounded-[2rem] px-6 py-5
                           border border-slate-200/50 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]"
              >
                <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1">Ente ospitante</p>
                <p className="text-base font-bold text-text-primary">Deloitte NextHub</p>
                <p className="text-sm text-text-secondary mt-0.5">Fiera del Levante, Bari</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <KineticMarquee />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </section>
  );
}
