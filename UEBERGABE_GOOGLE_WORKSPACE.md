# Übergabedokument: Google Workspace Migration – PaCos GmbH

## Zweck dieses Dokuments

Dieses Dokument enthält alle relevanten Informationen zur Einrichtung und schrittweisen Migration von PaCos GmbH zu Google Workspace. Ein Claude Code Agent nutzt dieses Dokument als Kontextgrundlage.

---

## 1. Ausgangslage

| Parameter | Wert |
|---|---|
| Unternehmen | PaCos GmbH, Halle (Saale) |
| Domain | `pacos-gmbh.de` |
| Registrar / Hoster | Strato |
| Aktueller E-Mail-Dienst | Microsoft Exchange Server 2019 (on-premises, nicht extern erreichbar) |
| Exchange-Status | End-of-Support seit Oktober 2025 — Migration dringend |
| Ziel-System | Google Workspace Business Standard |
| Ca. Nutzeranzahl | ~50 Mitarbeiter (Rollout nach Pilotphase) |

---

## 2. Migrationsstrategie

### Phase 1: Pilotprojekt (aktuell)

- **Nur 2 Nutzer:** `admin@pacos-gmbh.de` (Super-Admin) und `sebastian.hirsch@pacos-gmbh.de` (Arbeitskonto)
- **MX-Einträge werden NICHT geändert.** E-Mails laufen weiterhin über Exchange.
- **Gmail-Aktivierung wird bei der Registrierung übersprungen.**
- Ziel: Workspace einrichten, Admin-Konsole kennenlernen, Drive/Kalender/Meet testen, Sicherheitseinstellungen konfigurieren.

### Phase 2: MX-Umstellung & E-Mail-Migration (später)

- Erfordert Strato Kunden-Login (DNS-Zugang) für MX-, SPF-, DKIM- und DMARC-Records.
- E-Mail-Migration per PST-Import (Exchange nicht extern erreichbar → GWMME und Admin Console IMAP nicht möglich).
- Ablauf: PST aus Exchange exportieren → Gmail via IMAP in Outlook hinzufügen → PST importieren → Drag-and-Drop-Sync.
- Erst nach erfolgreicher Pilotphase und DNS-Zugang.

### Phase 3: Unternehmensweiter Rollout

- Restliche ~48 Nutzer anlegen (CSV-Upload über Admin-Konsole).
- Nutzer-Schulung.
- File Server Migration zu Google Drive (separater Workstream, ggf. Google Workspace Migrate).

---

## 3. Verfügbare Zugänge

### Plesk-Panel (vorhanden)

- URL: `https://pacos-gmbh.de:8443`
- Benutzer: Sebastian Hirsch
- Vollzugriff auf: File Manager, FTP-Zugang, PHP-Einstellungen, SSL/TLS, Datenbanken, E-Mail-Einstellungen, Hosting-Einstellungen.
- **Kein DNS in Plesk** — DNS-Verwaltung liegt beim Strato-Kundenportal.

### Strato Kunden-Login (NICHT vorhanden)

- URL: `login.strato.de`
- Zugangsdaten beim externen IT-Dienstleister angefragt, aber noch nicht erhalten.
- **Erforderlich für:** DNS-Einstellungen (MX, TXT, CNAME, SPF, DKIM), Domain-Verwaltung, Vertragseinstellungen.
- **Blocker für Phase 2** (MX-Umstellung).

### FTP

- Host: `pacos-gmbh.de`
- Benutzer: `pacosftp`
- Zielverzeichnis: `/httpdocs/`

---

## 4. Domain-Verifizierung

### Gewählte Methode: HTML-Datei hochladen

Da kein DNS-Zugang vorhanden ist, wird die Domain über eine HTML-Datei verifiziert:

1. Google Workspace registrieren → Verifizierungsmethode „HTML-Datei" wählen.
2. HTML-Datei von Google herunterladen.
3. Über Plesk File Manager nach `/httpdocs/` hochladen.
4. In der Google Admin-Konsole auf „Verifizieren" klicken.

### Kritische Hinweise

- **Frist:** Domain muss innerhalb von 9 Tagen nach Registrierung verifiziert werden, sonst wird das Konto automatisch gelöscht.
- **HTML-Datei nicht löschen** — muss dauerhaft in `/httpdocs/` liegen bleiben. Beim Website-Relaunch (separater Workstream) beachten.
- Alternative Methode (TXT-Record) wird möglich, sobald Strato Kunden-Login verfügbar ist.

---

## 5. Google Workspace Konfiguration

### Plan

| Parameter | Wert |
|---|---|
| Plan | Business Standard |
| Speicher | 2 TB Pooled Storage pro Lizenz (organisationsweit geteilt, kein Silo) |
| Pilotphase | 2 Lizenzen → 4 TB Pool |
| Rollout | ~50 Lizenzen → ~100 TB Pool |

### Nutzerkonten (Pilotphase)

| E-Mail | Rolle | Zweck |
|---|---|---|
| `admin@pacos-gmbh.de` | Super-Admin | Reines Admin-Konto, nicht personengebunden |
| `sebastian.hirsch@pacos-gmbh.de` | Nutzer + Admin-Rechte | Persönliches Arbeitskonto für Pilottest |

### Registrierungsablauf

1. `workspace.google.com` → Business Standard wählen.
2. Domain `pacos-gmbh.de` angeben.
3. Admin-Konto `admin@pacos-gmbh.de` anlegen.
4. **Gmail-Aktivierung überspringen** (Pilotprojekt-Option).
5. Domain-Verifizierung per HTML-Datei (siehe Abschnitt 4).
6. Zweiten Nutzer `sebastian.hirsch@pacos-gmbh.de` anlegen.

---

## 6. Was NICHT getan werden darf

| Aktion | Grund |
|---|---|
| MX-Einträge ändern | Exchange muss weiterlaufen bis Phase 2 abgeschlossen ist |
| E-Mail-Einstellungen in Plesk verändern | Separater Workstream, Exchange-Abhängigkeit |
| HTML-Verifizierungsdatei aus `/httpdocs/` löschen | Domain-Verifizierung geht verloren |
| Gmail für die Domain aktivieren (vor Phase 2) | Ohne MX-Umstellung kein E-Mail-Empfang möglich |

---

## 7. Offene Punkte / Blocker

| # | Punkt | Status | Verantwortlich |
|---|---|---|---|
| 1 | Strato Kunden-Login beschaffen | Offen — beim IT-Dienstleister angefragt | Sebastian Hirsch / ext. IT |
| 2 | Google Workspace Registrierung durchführen | Offen — wartet auf Strato-Zugang (oder HTML-Verifizierung als Fallback) | Sebastian Hirsch |
| 3 | Domain-Verifizierung abschließen | Offen — abhängig von #2 | Sebastian Hirsch |
| 4 | Admin-Konsole einrichten (Sicherheit, 2FA, Organisationsstruktur) | Offen — nach Verifizierung | Sebastian Hirsch |
| 5 | PST-Export aus Exchange vorbereiten | Offen — Phase 2 | Sebastian Hirsch |
| 6 | MX-, SPF-, DKIM-, DMARC-Records setzen | Offen — erfordert Strato Kunden-Login (#1) | Sebastian Hirsch |
| 7 | Nutzerliste für Rollout erstellen (CSV) | Offen — Phase 3 | Sebastian Hirsch |
| 8 | File Server Migration planen | Offen — separater Workstream | Sebastian Hirsch |

---

## 8. Abhängigkeiten zu anderen Workstreams

| Workstream | Relevanz für Google Workspace |
|---|---|
| **Website-Relaunch** (`UEBERGABE_WEBSITE_RELAUNCH.md`) | HTML-Verifizierungsdatei in `/httpdocs/` darf beim Relaunch nicht gelöscht werden. Beide Workstreams teilen sich Plesk und `/httpdocs/`. |
| **Exchange Server 2019 Abschaltung** | Exchange läuft parallel bis Phase 2 abgeschlossen. Keine E-Mail-Änderungen vor MX-Umstellung. |
| **ERP-Migration (Pfiff → ERPNext)** | Keine direkte technische Abhängigkeit, aber zeitliche Überschneidung bei IT-Ressourcen. |

---

## 9. Ansprechpartner

| Rolle | Kontakt | Zuständigkeit |
|---|---|---|
| Projektverantwortlicher | Sebastian Hirsch (Geschäftsführer PaCos GmbH) | Freigabe, Steuerung, Pilottest |
| Thomas Hirsch | Geschäftsführer/CEO PaCos | Freigabe bei Bedarf |
| Externer IT-Dienstleister | (Name beim Projektverantwortlichen erfragen) | Strato-Zugangsdaten, DNS, Exchange |

---

## 10. Referenzen

- [Google Workspace Kurzanleitung für mittelgroße Unternehmen](https://knowledge.workspace.google.com/admin/getting-started/quick-start-guide-for-medium-size-businesses?hl=de)
- [Domain-Verifizierung – Google Workspace Admin-Hilfe](https://support.google.com/a/answer/60216?hl=en)
- [TXT-Record Verifizierung – Google Workspace Admin-Hilfe](https://support.google.com/a/answer/16018515?hl=en)
- [Pooled Storage – Google Workspace Admin-Hilfe](https://support.google.com/a/answer/12002268?hl=en)
- [Storage FAQ für Admins](https://support.google.com/a/answer/9214707?hl=en)
