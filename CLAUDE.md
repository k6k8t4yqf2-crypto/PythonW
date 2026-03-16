# PythonW - Projekt-Anweisungen

## Projektübersicht
Python-Workspace für verschiedene Projekte, Automatisierungen und Web-Applikationen.

## Projektstruktur
```
PythonW/
├── .claude/
│   ├── settings.json        # Projekt-Permissions
│   ├── settings.local.json  # Lokale Permissions
│   └── skills/
│       ├── frontend-design/ # Skill: Frontend-Design (Anthropic)
│       ├── ui-ux-pro-max/   # Skill: UI/UX Design Intelligence
│       ├── ui-styling/      # Skill: shadcn/ui + Tailwind Styling
│       ├── design/          # Skill: Logo, CIP, Icons, Slides
│       ├── design-system/   # Skill: Design Tokens & Components
│       ├── brand/           # Skill: Brand Identity & Guidelines
│       ├── banner-design/   # Skill: Banner-Design
│       └── slides/          # Skill: HTML-Präsentationen
├── .venv/                   # Virtual Environment (Python 3.12)
├── .gitignore               # Git-Ignore-Regeln
├── CLAUDE.md                # Projekt-Anweisungen (dieses File)
└── REPORT.md                # Aufgaben-Reports
```

## Installierte Skills
- **frontend-design**: Erstellt produktionsreife, visuell anspruchsvolle Frontend-Interfaces (HTML/CSS/JS, React, Vue). Vermeidet generische AI-Ästhetik.
- **ui-ux-pro-max**: Design-Intelligenz für Web & Mobile. 67 UI-Styles, 161 Farbpaletten, 57 Font-Pairings, 161 Reasoning-Rules. Unterstützt React, Next.js, Vue, Svelte, SwiftUI, Flutter u.a.
- **ui-styling**: shadcn/ui-Komponenten (Radix UI + Tailwind), Canvas-Designs mit Fonts, Theming & Dark Mode.
- **design**: Logo-Generierung (55 Styles), Corporate Identity Program (50 Deliverables), Icon-Design, Slides, Banner, Social Photos.
- **design-system**: Design-Token-Architektur (primitive→semantic→component), CSS-Variablen, Spacing/Typography-Scales.
- **brand**: Brand Voice, Visual Identity, Messaging Frameworks, Asset-Management, Style Guides.
- **banner-design**: Banner für Social Media, Ads, Website Heroes, Print. Multiple Art-Direction-Optionen.
- **slides**: Strategische HTML-Präsentationen mit Chart.js, Design Tokens, Copywriting-Formeln.

## Setup
- Python 3.12.6
- Virtual Environment: `.venv/`
- Aktivierung: `.venv/Scripts/activate` (Windows)

## Coding Standards
- Type Hints auf allen Funktionen
- Docstrings im Google-Style
- PEP 8, max 100 Zeichen Zeilenlänge
- Spezifische Exceptions, kein bare `except`
- Logging statt `print()` in Produktionscode
- Tests mit `pytest`
- Linting mit `ruff`

## Git-Workflow
- Branch-Strategie: `main` → `feature/*`, `fix/*`, `chore/*`
- Commit-Messages: konventionell (feat:, fix:, chore:, docs:, refactor:, test:)
- Vor jedem Commit: `ruff check` und `pytest`
- PRs für alle Änderungen an `main`

## Websiteerstellung

### Tech Stack
- Next.js 15 + TypeScript + Tailwind CSS
- Framer Motion für Animationen

### Design-Regeln
- Nutze das AskUserQuestion Tool, um den Nutzer über das Websitedesign zu interviewen, damit du die Vorstellungen des Nutzers genau abbilden kannst
- Nutze den **frontend-design** Skill für alle UI-Entscheidungen
- Nutze **UI/UX Pro Max** für Design-System-Generierung
- Nutze ggf. 21st.dev für Component-Inspiration (falls vorgegeben)
- Keine generischen AI-Aesthetics
- Bold, distinctive Design-Choices
- Performance-optimiert (Core Web Vitals)

## PaCos GmbH Website (pacos-website/)

### Tech Stack
- Next.js 15.5.12 (App Router, Webpack, Standalone Build)
- React + TypeScript + "use client" Direktive
- Tailwind CSS mit custom `primary-*` Farbpalette
- Framer Motion Animationen
- Lucide React Icons
- Embla Carousel (shadcn/ui Carousel Komponente)
- Statische Generierung (alle Routen prerendered)

### Seitenstruktur (src/app/page.tsx)
1. Navigation - Logo links, "Made in Germany" zentriert, Nav-Links rechts
2. Hero - WarpShader Background
3. Services - "Full Manufacturing Service" (3 Karten: Entwicklung, Herstellung, Abfuellung)
4. Facts
5. About - Interaktive Timeline (7 Events: 1902-Heute)
6. Products - InteractiveSelector (10 Kategorien, 2 Seiten) + 6 Darreichungsformen
7. Quality (nicht bearbeitet)
8. Karriere - Gallery, JobCards, Benefits, Bewerbungsformular
9. Contact - mailto-Link (Phase 1), kein Google Maps (DSGVO)
10. Footer

### Routen
- `/` - Hauptseite mit allen Sections
- `/datenschutz` - Datenschutzerklaerung (DSGVO-konform)
- `/impressum` - Impressum (DDG, MStV)
- `/agb` - AGB-Seite
- `error.tsx`, `not-found.tsx`, `sitemap.ts`

### Komponenten
- Navigation, Hero, Services, Facts, About, Products, Quality, Karriere, Contact, Footer
- CookieBanner - Cookie-Hinweis-Banner
- ui/interactive-selector.tsx - Accordion-Style Produktkategorie-Selector
- ui/carousel.tsx - shadcn/ui Carousel Wrapper

### Deployment
- Ziel: Hostinger VPS, Ubuntu, Node 20, PM2, nginx, Certbot
- Configs: deployment/ (nginx.conf, deploy.sh, setup.md, ecosystem.config.js)
- Standalone Build (next.config.ts: output "standalone")
- Hosting-Anbieter: Hostinger (UAB Hostinger, Litauen)

### Bekannte Probleme
- .next Cache-Korruption -> `rm -rf .next` und neu bauen
- Port 3000 kann belegt sein -> Dev-Server weicht auf 3001 aus

## Learnings
<!-- Hier werden Erkenntnisse aus der Arbeit am Projekt dokumentiert -->
