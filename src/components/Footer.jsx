import { motion } from 'framer-motion';

function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 bg-text-primary text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xl md:text-2xl font-serif font-normal tracking-tight">Giovanni Lampedecchia</p>
              <p className="text-sm text-slate-400 mt-1">
                5BI Informatica — IISS &quot;Ferraris&quot; Molfetta — A.S. 2025/2026
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-0.5">Relazione PCTO</p>
              <p className="text-sm text-slate-300">
                Deloitte NextHub Bari — Marzo 2026 — 35 ore
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            Realizzato per il percorso di Formazione Scuola-Lavoro (PCTO/FSL).
          </p>
          <p className="text-sm text-slate-500">
            Tutti i contenuti sono originali e riferiti all&apos;esperienza personale.
          </p>
        </div>
      </div>
    </footer>
  );
}
