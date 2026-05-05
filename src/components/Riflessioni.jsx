import { motion } from 'framer-motion';
import { Compass, Plant, Star, HandHeart, Quotes } from '@phosphor-icons/react';

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

export default function Riflessioni() {
  return (
    <section id="riflessioni" className="py-28 md:py-40 bg-elevated">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                Valutazione personale
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.05] text-text-primary">
                Cosa porto con me
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <ScrollReveal delay={0.15}>
              <div className="bg-surface rounded-[2.5rem] p-8 md:p-10 border border-emerald-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <Quotes size={32} weight="duotone" className="text-accent mb-4 opacity-80" />
                <p className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed">
                  &quot;Il futuro non si aspetta, si costruisce con competenza, curiosità e voglia di
                  mettersi in gioco.&quot;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Cards — varied rhythm, asymmetric widths */}
        <div className="space-y-6">
          <ScrollReveal>
            <div className="bg-surface rounded-[2.5rem] p-8 md:p-12 border border-emerald-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Compass size={20} weight="duotone" className="text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-normal text-text-primary tracking-tight">
                  Impatto sull&apos;orientamento
                </h3>
              </div>
              <div className="text-lg md:text-xl text-text-secondary leading-relaxed space-y-4">
                <p>
                  Prima di questo PCTO avevo un&apos;idea principalmente teorica del mondo tech. Dopo cinque giorni in un <strong className="text-text-primary">ambiente reale</strong> — tra server rack, AI e presentazioni corporate — ho potuto osservare concretamente come funziona il settore e quali dinamiche lo caratterizzano.
                </p>
                <p>
                  Questa esperienza mi ha permesso di sviluppare una <strong className="text-text-primary">visione consapevole</strong>: ho riconosciuto il valore della tecnologia come <strong className="text-text-primary">strumento strategico</strong>, capace di trasformare dati e problemi complessi in <strong className="text-text-primary">soluzioni concrete</strong>, e ho apprezzato la combinazione tra innovazione, lavoro di squadra e approccio progettuale.
                </p>
                <p>
                  Pur non rappresentando necessariamente la mia scelta definitiva, questo percorso ha ampliato la mia prospettiva e mi ha fornito competenze e metodo che rimarranno centrali in qualsiasi direzione futura.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:ml-auto lg:max-w-5xl">
            <ScrollReveal delay={0.1}>
              <div className="bg-surface rounded-[2.5rem] p-8 md:p-10 border border-emerald-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Plant size={20} weight="duotone" className="text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-normal text-text-primary tracking-tight">
                    Crescita personale
                  </h3>
                </div>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  Ho imparato a stare in un <strong className="text-text-primary">team multidisciplinare</strong>, a gestire tempi stretti e a presentare il mio lavoro con chiarezza. La visita al Politecnico di Bari mi ha dato uno stimolo ulteriore: vedere da vicino dove posso arrivare con <strong className="text-text-primary">studio e impegno</strong>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-surface rounded-[2.5rem] p-8 md:p-10 border border-emerald-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Star size={20} weight="duotone" className="text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-normal text-text-primary tracking-tight">
                    Cosa mi ha colpito
                  </h3>
                </div>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  La <strong className="text-text-primary">cultura aziendale</strong> di Deloitte: giovane, inclusiva, spinta all&apos;innovazione ma ancorata a standard professionali eccellenti. Avere tutor disponibili e appassionati come <strong className="text-text-primary">Francesco Diamante</strong> ha fatto la differenza.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25}>
            <div className="bg-surface rounded-[2.5rem] p-8 md:p-12 border border-emerald-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] max-w-4xl lg:mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <HandHeart size={20} weight="duotone" className="text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-normal text-text-primary tracking-tight">
                  Ringraziamenti
                </h3>
              </div>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Un sentito ringraziamento a <strong className="text-text-primary">Deloitte Italia</strong> e
                a tutto il team del NextHub Bari. Grazie al tutor aziendale{' '}
                <strong className="text-text-primary">Francesco Diamante</strong> per la pazienza e
                la guida. Grazie alla scuola IISS &quot;Ferraris&quot; e al referente PCTO. E grazie
                ai compagni di squadra: insieme abbiamo dimostrato che la collaborazione genuina
                genera risultati concreti.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
