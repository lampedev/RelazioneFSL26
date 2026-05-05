import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  ShieldCheck,
  Cloud,
  ChartBar,
  Cube,
  Link as LinkIcon,
  Users,
  Lightning,
  ChatCenteredText,
} from '@phosphor-icons/react';
import { MagicCard, GlobalSpotlight } from './MagicBento';

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

const hard = [
  { title: 'AI & GenAI', desc: 'Intelligenza artificiale generativa e applicazioni aziendali.', icon: Brain },
  { title: 'Cybersecurity', desc: 'Minacce digitali e best practice di sicurezza informatica.', icon: ShieldCheck },
  { title: 'Cloud & ERP', desc: 'Architetture cloud e pianificazione risorse aziendali.', icon: Cloud },
  { title: 'Data Analytics', desc: 'Analisi dati e visualizzazione per il decision making.', icon: ChartBar },
  { title: 'Digital Twin', desc: 'Simulazione digitale di processi industriali.', icon: Cube },
  { title: 'Blockchain', desc: 'Tracciabilita su blockchain per filiere agroalimentari.', icon: LinkIcon },
];

const soft = [
  { title: 'Problem Solving', desc: 'Affrontare complessita con metodo.' },
  { title: 'Teamwork', desc: 'Collaborare in gruppi eterogenei.' },
  { title: 'Comunicazione', desc: 'Presentare idee con chiarezza.' },
  { title: 'Autonomia', desc: 'Gestire task e responsabilita.' },
  { title: 'Adattabilita', desc: 'Rispondere a cambiamenti rapidi.' },
  { title: 'Pensiero Critico', desc: 'Valutare soluzioni oggettivamente.' },
];

export default function Competenze() {
  const gridRef = useRef(null);

  return (
    <section id="competenze" className="py-28 md:py-40 bg-elevated relative">
      <GlobalSpotlight gridRef={gridRef} spotlightRadius={400} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
              Competenze acquisite
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.05] text-text-primary">
              Hard skills e soft skills
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento 2.0 Grid — wrapped with bento-section for spotlight */}
        <div ref={gridRef} className="bento-section grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Row 1: Large card AI + metric 35h */}
          <ScrollReveal className="md:col-span-2">
            <MagicCard className="h-full p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <Brain size={20} weight="duotone" />
                  </div>
                  <h3 className="text-xl font-serif font-normal text-text-primary tracking-tight mb-2">
                    Intelligenza Artificiale
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed max-w-md">
                    Dalla teoria alle applicazioni pratiche: modelli generativi, prompt engineering e
                    integrazione nei processi aziendali.
                  </p>
                </div>
              </div>
            </MagicCard>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="md:col-span-1">
            <MagicCard className="h-full p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Lightning size={24} weight="duotone" />
                </div>
                <p className="text-3xl font-serif font-normal text-text-primary font-mono mb-1">35h</p>
                <p className="text-sm text-text-secondary">Ore di formazione intensiva</p>
              </div>
            </MagicCard>
          </ScrollReveal>

          {/* Row 2: three equal */}
          {hard.slice(1, 4).map((skill, i) => (
            <ScrollReveal key={skill.title} delay={0.1 + i * 0.06}>
              <MagicCard className="h-full p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <skill.icon size={20} weight="duotone" />
                  </div>
                  <h3 className="text-lg font-serif font-normal text-text-primary tracking-tight mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">{skill.desc}</p>
                </div>
              </MagicCard>
            </ScrollReveal>
          ))}

          {/* Row 3: two remaining + metric 5 */}
          {hard.slice(4).map((skill, i) => (
            <ScrollReveal key={skill.title} delay={0.2 + i * 0.06}>
              <MagicCard className="h-full p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <skill.icon size={20} weight="duotone" />
                  </div>
                  <h3 className="text-lg font-serif font-normal text-text-primary tracking-tight mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">{skill.desc}</p>
                </div>
              </MagicCard>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.25} className="md:col-span-1">
            <MagicCard className="h-full p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Users size={24} weight="duotone" />
                </div>
                <p className="text-3xl font-serif font-normal text-text-primary font-mono mb-1">5</p>
                <p className="text-sm text-text-secondary">Aree operative esplorate</p>
              </div>
            </MagicCard>
          </ScrollReveal>

          {/* Row 4: Soft skills wide — NO MagicCard */}
          <ScrollReveal delay={0.3} className="md:col-span-3">
            <div className="bg-surface rounded-[2.5rem] p-8 md:p-10 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <ChatCenteredText size={20} weight="duotone" />
                </div>
                <h3 className="text-lg font-serif font-normal text-text-primary tracking-tight">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5">
                {soft.map((s) => (
                  <div key={s.title} className="flex flex-col gap-2">
                    <span className="text-base font-semibold text-text-primary">{s.title}</span>
                    <span className="text-sm text-text-secondary leading-relaxed">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
