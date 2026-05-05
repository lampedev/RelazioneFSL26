import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain, ChartBar, FileText, Scan,
  ArrowRight, Globe, Database, TrendUp,
  FilePdf, Lightning, Target, BowlFood, ArrowsClockwise,
  Code, ActivityIcon, Sigma,
} from '@phosphor-icons/react';
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

function ClickableImage({ src, alt, className, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      onClick={() => onClick(src, alt)}
      className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in ${className}`}
      loading="lazy"
    />
  );
}

/* ─── Project 1: EndoSignal ─── */
function EndoSignalBlock({ onImageClick }) {
  return (
    <div className="mb-32 md:mb-48">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <ScrollReveal className="lg:col-span-7 relative">
          <div className="space-y-4">
            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]">
              <ClickableImage src="/images/dashboard-medico-endosignal.png" alt="Dashboard medico EndoSignal" onClick={onImageClick} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/applicativo-mobile-endosignal.png" alt="App mobile EndoSignal" onClick={onImageClick} />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/come-funziona-endosignal.png" alt="Come funziona EndoSignal" onClick={onImageClick} />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/endosignal-roadmap.png" alt="Roadmap EndoSignal" onClick={onImageClick} />
              </div>
            </div>
          </div>

        </ScrollReveal>

        <ScrollReveal delay={0.15} className="lg:col-span-5 lg:pt-8">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent block mb-4">Progetto 01</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[0.95] text-text-primary mb-4">
            EndoSignal
          </h3>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            Individuare una nicchia specifica nel settore healthcare e sviluppare un’idea innovativa di startup in grado di migliorare l’accesso, l’efficienza o la qualità dei servizi sanitari, attraverso soluzioni digitali e approcci smart care.
          </p>

          <div className="space-y-6 mb-10">
            <div className="relative pl-5 border-l-2 border-red-200">
              <p className="text-xs font-bold tracking-wider uppercase text-red-400 mb-1">Il Problema</p>
              <p className="text-base text-text-secondary leading-relaxed">
                I disturbi ormonali vengono spesso diagnosticati tardivamente. I pazienti non tracciano
                i sintomi e i medici non hanno strumenti predittivi per correlare sensazioni con dati oggettivi.
              </p>
            </div>
            <div className="relative pl-5 border-l-2 border-accent">
              <p className="text-xs font-bold tracking-wider uppercase text-accent mb-1">La Soluzione</p>
              <p className="text-base text-text-secondary leading-relaxed">
                Applicativo che raccoglie <strong className="text-text-primary">input giornalieri del paziente</strong>{' '}
                e li incrocia con <strong className="text-text-primary">quadri ormonali storici</strong> del medico.
                Un motore AI identifica pattern e predice squilibri prima che emergano.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: Brain, label: 'ML Predictive' },
              { icon: ChartBar, label: 'Data Fusion' },
              { icon: FileText, label: 'Log Giornaliero' },
              { icon: Scan, label: 'Correlazioni' },
            ].map((f, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-text-secondary border border-slate-200/50">
                <f.icon size={16} weight="duotone" className="text-accent" />
                {f.label}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─── Project 2: MacroPlateAI ─── */
function MacroPlateBlock({ onImageClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={ref} className="mb-32 md:mb-48">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <ScrollReveal delay={0.1} className="lg:col-span-5 order-2 lg:order-1 lg:pr-8">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent block mb-4">Progetto 02</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[0.95] text-text-primary mb-4">
            MacroPlate AI
          </h3>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            Simulare la creazione di una startup nel settore healthcare, sviluppando un pitch completo, contenuti di marketing e un MVP funzionale, con l’obiettivo di trasformare un problema reale in una soluzione digitale concreta e validabile.
          </p>

          <div className="space-y-6 mb-10">
            <div className="relative pl-5 border-l-2 border-red-200">
              <p className="text-xs font-bold tracking-wider uppercase text-red-400 mb-1">Il Problema</p>
              <p className="text-base text-text-secondary leading-relaxed">
                Abbiamo individuato un <strong className="text-text-primary">gap</strong> tra <strong className="text-text-primary">teoria nutrizionale</strong> e <strong className="text-text-primary">applicazione pratica</strong>: gli utenti, pur conoscendo i <strong className="text-text-primary">macronutrienti</strong>, faticano a tradurre i <strong className="text-text-primary">target</strong> in <strong className="text-text-primary">pasti reali</strong>. Questo genera <strong className="text-text-primary">perdita di tempo</strong>, <strong className="text-text-primary">affaticamento decisionale</strong>, <strong className="text-text-primary">monotonia alimentare</strong> e una <strong className="text-text-primary">distribuzione inefficiente dei nutrienti</strong>.
              </p>
            </div>
            <div className="relative pl-5 border-l-2 border-accent">
              <p className="text-xs font-bold tracking-wider uppercase text-accent mb-1">La Soluzione</p>
              <p className="text-base text-text-secondary leading-relaxed">
                Abbiamo sviluppato <strong className="text-text-primary">MacrOPlate</strong>, un’app che utilizza un <strong className="text-text-primary">algoritmo di AI</strong> per convertire automaticamente i <strong className="text-text-primary">target nutrizionali</strong> in <strong className="text-text-primary">pasti concreti e bilanciati</strong>. Attraverso un sistema di <strong className="text-text-primary">nutrient timing</strong>, <strong className="text-text-primary">matching preciso</strong> e utilizzo di <strong className="text-text-primary">ingredienti reali</strong> disponibili, la nutrizione diventa <strong className="text-text-primary">semplice</strong>, <strong className="text-text-primary">sostenibile</strong> e <strong className="text-text-primary">immediatamente applicabile</strong>.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { icon: Brain, label: 'Smart Nutrition AI' },
              { icon: Lightning, label: 'Instant Meal Plans' },
              { icon: Target, label: 'Macro Precision' },
              { icon: BowlFood, label: 'Fridge-Based Meals' },
              { icon: ArrowsClockwise, label: 'Infinite Variety' },
              { icon: TrendUp, label: 'Performance Focus' },
            ].map((f, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-text-secondary border border-slate-200/50">
                <f.icon size={16} weight="duotone" className="text-accent" />
                {f.label}
              </span>
            ))}
          </div>

          <a
            href="/images/pdfstrategiadimarketingmacroplateai.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark transition-colors font-medium"
          >
            <FilePdf size={18} weight="duotone" />
            Scarica strategia di marketing (PDF)
          </a>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-7 order-1 lg:order-2">
          <motion.div style={{ y }} className="space-y-4">
            <div
              className="aspect-video rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] bg-muted relative group cursor-zoom-in"
              onClick={() => onImageClick('/images/funzionamento-macroplateai.webm', 'Funzionamento MacroPlateAI', 'video')}
            >
              <video
                src="/images/funzionamento-macroplateai.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="white" className="drop-shadow-lg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200/50">
              <ClickableImage src="/images/macroplateai.png" alt="MacroPlateAI screenshot" onClick={onImageClick} />
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─── Project 3: AgriData ─── */
function AgriDataBlock({ onImageClick }) {
  return (
    <div className="mb-16">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
          {/* Images — left on desktop, first on mobile */}
          <div className="lg:col-span-8 order-1">
            <div className="grid grid-cols-12 auto-rows-[120px] md:auto-rows-[150px] gap-3">
              <div className="col-span-7 row-span-2 rounded-[2rem] overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/agritechrichieste.png" alt="AgriData richieste" onClick={onImageClick} />
              </div>
              <div className="col-span-5 row-span-1 rounded-[2rem] overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/agritech3schermata.png" alt="AgriData schermata" onClick={onImageClick} />
              </div>
              <div className="col-span-5 row-span-1 rounded-[2rem] overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/agritechanalytics.png" alt="AgriData analytics" onClick={onImageClick} />
              </div>
              <div className="col-span-12 row-span-2 rounded-[2rem] overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/agritech2foto.png" alt="AgriData campo" onClick={onImageClick} />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: Scan, label: 'OCR Pipeline' },
                { icon: Database, label: 'Data Extraction' },
                { icon: Code, label: 'Automation Scripts' },
                { icon: ChartBar, label: 'Data Visualization' },
                { icon: ActivityIcon, label: 'Trend Analysis' },
                { icon: Sigma, label: 'Statistical Insights' },
              ].map((f, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-text-secondary border border-slate-200/50">
                  <f.icon size={16} weight="duotone" className="text-accent" />
                  {f.label}
                </span>
              ))}
            </div>
          </div>

          {/* Text — right on desktop, after images on mobile */}
          <div className="lg:col-span-4 order-2 lg:pl-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent block mb-4">Progetto 03</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[0.95] text-text-primary mb-4">
              AgriData
            </h3>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              Analizzare dati grezzi provenienti da grafici e tabelle in formato analogico, estraendo manualmente informazioni significative e rispondendo a quesiti specifici, senza l’uso esplicito di strumenti digitali o automazione.
            </p>

            <div className="space-y-6">
              <div className="relative pl-5 border-l-2 border-red-200">
                <p className="text-xs font-bold tracking-wider uppercase text-red-400 mb-1">Il Problema</p>
                <p className="text-base text-text-secondary leading-relaxed">
                  L’<strong className="text-text-primary">approccio manuale</strong> all’estrazione e interpretazione dei dati (es. temperatura, precipitazioni, umidità del suolo) risulta <strong className="text-text-primary">inefficiente</strong>, <strong className="text-text-primary">soggetto a errori</strong> e limitato nella capacità di individuare rapidamente <strong className="text-text-primary">pattern</strong>, <strong className="text-text-primary">correlazioni</strong> e <strong className="text-text-primary">valori critici</strong> come massimi e minimi.
                </p>
              </div>
              <div className="relative pl-5 border-l-2 border-accent">
                <p className="text-xs font-bold tracking-wider uppercase text-accent mb-1">La Soluzione</p>
                <p className="text-base text-text-secondary leading-relaxed">
                  In quanto team con competenze informatiche, abbiamo adottato un <strong className="text-text-primary">approccio automatizzato</strong>: digitalizzazione dei dati cartacei tramite <strong className="text-text-primary">OCR</strong>, seguita dallo sviluppo di <strong className="text-text-primary">script</strong> per la <strong className="text-text-primary">generazione automatica di grafici</strong> e l’<strong className="text-text-primary">analisi dei dataset</strong>. Questo ha permesso non solo una <strong className="text-text-primary">visualizzazione più chiara</strong>, ma anche l’<strong className="text-text-primary">estrazione immediata di insight</strong> (<strong className="text-text-primary">trend</strong>, <strong className="text-text-primary">correlazioni</strong>, <strong className="text-text-primary">estremi</strong>) e la <strong className="text-text-primary">risoluzione automatica dei quesiti</strong> richiesti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function SfidePratiche() {
  return (
    <Lightbox>
      {(openLightbox) => (
        <section id="sfide" className="py-28 md:py-40 bg-elevated overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end mb-20 md:mb-32">
              <div className="lg:col-span-6">
                <ScrollReveal>
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                    Sfide Pratiche
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[0.95] text-text-primary">
                    Hands-on: dalla teoria al prototipo
                  </h2>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <ScrollReveal delay={0.15}>
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    Challenge reali affrontate in squadra. Ogni progetto segue il ciclo completo:
                    identificazione del problema, ideazione della soluzione, prototipazione e pitch.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <EndoSignalBlock onImageClick={openLightbox} />
            <MacroPlateBlock onImageClick={openLightbox} />
            <AgriDataBlock onImageClick={openLightbox} />
          </div>
        </section>
      )}
    </Lightbox>
  );
}
