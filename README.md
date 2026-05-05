# Relazione PCTO 2026 — Deloitte NextHub Bari

Sito web interattivo per la relazione del percorso PCTO/FSL svolto presso **Deloitte NextHub Bari** in collaborazione con il **Politecnico di Bari**.

## Informazioni

- **Studente:** Giovanni Lampedecchia
- **Classe:** 5BI Informatica — IISS "Ferraris" Molfetta
- **Anno scolastico:** 2025/2026
- **Durata:** 35 ore — Marzo 2026
- **Tutor aziendale:** Francesco Diamante

## Descrizione

Il sito racconta l'esperienza completa del PCTO attraverso una narrazione visuale e interattiva, suddivisa in sezioni:

- **Hero & Intro** — Presentazione dell'esperienza e della sede Deloitte
- **Attività** — Giornate formative, workshop e visite
- **Sfide pratiche** — Progetti hands-on: EndoSignal, MacroPlate AI e AgriData
- **Competenze** — Skills acquisite durante il percorso
- **Orientamento** — Visita al Politecnico di Bari
- **Riflessioni** — Valutazione personale e ringraziamenti

## Tecnologie

- [React](https://react.dev/) — Libreria UI
- [Vite](https://vitejs.dev/) — Build tool
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Framer Motion](https://www.framer.com/motion/) — Animazioni
- [Phosphor Icons](https://phosphoricons.com/) — Icone

## Installazione

```bash
# Clona il repository
git clone https://github.com/carogna34/RelazionePCTO26.git
cd RelazionePCTO26

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build di produzione
npm run build
```

## Struttura

```
relazione-pcto-sito/
├── public/images/        # Immagini e asset
├── src/
│   ├── components/       # Componenti React
│   ├── App.jsx           # Root app
│   └── index.css         # Stili globali + tema Tailwind
├── index.html
└── package.json
```

## Licenza

Contenuti originali riferiti all'esperienza personale. Realizzato per il percorso di Formazione Scuola-Lavoro (PCTO/FSL).
