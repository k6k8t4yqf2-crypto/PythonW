# PythonW - Projekt-Anweisungen

## Projektübersicht
Python-Workspace für verschiedene Projekte, Automatisierungen und Web-Applikationen.

## Projektstruktur
```
PythonW/
├── .venv/           # Virtual Environment (Python 3.12)
├── .gitignore       # Git-Ignore-Regeln
├── CLAUDE.md        # Projekt-Anweisungen (dieses File)
└── REPORT.md        # Aufgaben-Reports
```

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

## Learnings
<!-- Hier werden Erkenntnisse aus der Arbeit am Projekt dokumentiert -->
