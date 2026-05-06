import { motion } from 'framer-motion';
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

const images = [
  { src: 'deloitte-palazzo.jpg', alt: 'Palazzo Deloitte', grid: 'col-span-2 row-span-2' },
  { src: 'deloitte-reception.jpeg', alt: 'Reception', grid: 'col-span-1 row-span-1' },
  { src: 'Deloitte_Bari-NextOrbit-2.jpg', alt: 'NextOrbit', grid: 'col-span-1 row-span-1' },
  { src: 'foto-tutti-insieme-sulk-palco.jpg', alt: 'Gruppo sul palco', grid: 'col-span-2 row-span-1' },
  { src: 'digital-twin-bello.webp', alt: 'Digital Twin', grid: 'col-span-1 row-span-2' },
  { src: 'foto-collaborazione-lavoro-gruppo.jpg', alt: 'Collaborazione', grid: 'col-span-1 row-span-1' },
  { src: 'fasi-startup.jpg', alt: 'Fasi startup', grid: 'col-span-1 row-span-1' },
  { src: 'foto-server-rack.jpg', alt: 'Server rack', grid: 'col-span-1 row-span-1' },
  { src: 'digital-twin-1.jpg', alt: 'Digital twin dettaglio', grid: 'col-span-1 row-span-1' },
  { src: 'nascita-di-un-progetto.jpg', alt: 'Nascita progetto', grid: 'col-span-2 row-span-1' },
  { src: 'or2-tracciabilita-digitale-prodotti-agricoli.jpg', alt: 'Tracciabilita OR2', grid: 'col-span-1 row-span-1' },
  { src: 'or2-tracciabilita-blockchain-prodotti-agricoli.jpg', alt: 'Blockchain OR2', grid: 'col-span-1 row-span-1' },
  { src: 'foto-indormatica-operation-tecnologies.jpg', alt: 'Operation technologies', grid: 'col-span-1 row-span-1' },
];

export default function Galleria() {
  return (
    <Lightbox>
      {(openLightbox) => (
        <section id="galleria" className="py-28 md:py-40 bg-surface">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                  Galleria
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.05] text-text-primary">
                  Momenti indelebili
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
              {images.map((img, i) => (
                <ScrollReveal
                  key={img.src}
                  delay={i * 0.03}
                  className={`${img.grid} relative group overflow-hidden rounded-[2rem] border border-slate-200/50 bg-muted cursor-zoom-in`}
                >
                  <div onClick={() => openLightbox(`images/${img.src}`, img.alt)} className="absolute inset-0">
                    <img
                      src={`images/${img.src}`}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-sm font-medium text-white drop-shadow-md">{img.alt}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </Lightbox>
  );
}
