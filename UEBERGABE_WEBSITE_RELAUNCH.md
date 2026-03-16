# Übergabedokument: Website-Relaunch pacos-gmbh.de

## Zweck dieses Dokuments

Dieses Dokument enthält alle relevanten Informationen zur Hosting-Umgebung, Zugangswegen und bekannten Problemen für den Relaunch der Website `pacos-gmbh.de`. Der Claude Code Agent im Python-Projekt nutzt dieses Dokument als Kontextgrundlage.

---

## 1. Hosting-Umgebung

| Parameter | Wert |
|---|---|
| Domain | `pacos-gmbh.de` |
| Hoster | Strato |
| Management-Panel | Plesk (erreichbar unter `pacos-gmbh.de:8443`) |
| Plesk-Benutzer | Sebastian Hirsch |
| Abonnement | pacos-gmbh.de |
| IP-Adresse | 85.214.110.12 |
| Webroot-Verzeichnis | `/httpdocs/` |
| FTP-Systembenutzer | `pacosftp` |
| Speicherplatz | Unbegrenzt (aktuell 122.4 MB belegt) |
| Traffic | Unbegrenzt (aktuell 238.4 MB/Monat) |

---

## 2. Aktuelle Konfiguration & bekannte Probleme

### PHP-Version: KRITISCH

- Aktuell installiert: **PHP 5.4.45** — End-of-Life seit 2015.
- Keine Sicherheitsupdates, keine Kompatibilität mit modernen Frameworks.
- **Aktion erforderlich:** Vor oder beim Relaunch auf mindestens **PHP 8.1+** aktualisieren (via Plesk → PHP-Einstellungen).
- **Risiko:** Die alte Website basiert möglicherweise auf Code, der nur mit PHP 5.4 läuft. Ein PHP-Update kann die alte Seite brechen. Das ist akzeptabel, wenn die neue Seite zeitgleich deployed wird.

### SSL/TLS-Zertifikat: PROBLEM

- Plesk zeigt unter "SSL/TLS-Zertifikate" den Status **"Probleme"**.
- Vermutlich ist kein gültiges Zertifikat aktiv oder es ist abgelaufen.
- **Aktion erforderlich:** Vor Go-Live ein Let's Encrypt-Zertifikat einrichten (via Plesk → SSL/TLS-Zertifikate). Ohne gültiges Zertifikat zeigt der Browser eine Sicherheitswarnung.

### Bestehende Datenbank

- Eine Datenbank **`pacos_xt`** existiert. Dies deutet auf ein ehemaliges xt:Commerce-Shopsystem hin.
- **Hinweis:** Vor dem Überschreiben prüfen, ob dort noch relevante Daten liegen. Im Zweifel Backup erstellen.

---

## 3. Verfügbare Zugangswege

### Plesk-Panel (Browser)

- URL: `https://pacos-gmbh.de:8443`
- Vollzugriff auf alle Hosting-Einstellungen, File Manager, Datenbanken, SSL, PHP-Konfiguration.

### FTP

- Host: `pacos-gmbh.de`
- Benutzer: `pacosftp`
- Passwort: beim externen IT-Dienstleister erfragen oder in Plesk unter "FTP-Zugang" zurücksetzen.
- Zielverzeichnis: `/httpdocs/`
- Empfohlene Clients: FileZilla, WinSCP (SFTP bevorzugen, falls vom Server unterstützt).

### File Manager (Plesk)

- Webbasierter Dateimanager innerhalb von Plesk.
- Geeignet für kleinere Änderungen, nicht für das Deployment einer kompletten Website.

### DNS-Verwaltung

- DNS-Einstellungen sind bei Strato möglicherweise **nicht über Plesk**, sondern nur über das **Strato-Kundenportal** verwaltbar.
- Ein separater Strato-Kunden-Login existiert (im Browser als Tab sichtbar).
- Relevant, falls die Domain auf einen anderen Server zeigen soll oder Subdomains eingerichtet werden müssen.

---

## 4. Deployment-Strategie

### Empfohlener Ablauf

1. **Backup erstellen:** Bestehende Dateien in `/httpdocs/` und die Datenbank `pacos_xt` sichern (Plesk → Backup-Manager).
2. **PHP-Version aktualisieren:** Auf PHP 8.1+ umstellen (Plesk → PHP-Einstellungen).
3. **Neue Website deployen:** Generierte/gebaute Dateien per FTP oder File Manager nach `/httpdocs/` hochladen. Alte Dateien vorher entfernen oder in ein Archivverzeichnis verschieben.
4. **SSL-Zertifikat einrichten:** Let's Encrypt über Plesk aktivieren.
5. **Testen:** Website unter `https://pacos-gmbh.de` prüfen – korrekte Darstellung, HTTPS aktiv, keine Mixed-Content-Warnungen.

### Optionaler Staging-Ansatz

- Subdomain `staging.pacos-gmbh.de` in Plesk anlegen (Websites & Domains → Subdomain hinzufügen).
- Neue Website zuerst dort deployen und testen.
- Nach Freigabe: Dateien von Staging nach `/httpdocs/` (Hauptdomain) verschieben.

---

## 5. Aufgabenliste für den Agenten

| # | Aufgabe | Priorität | Status |
|---|---|---|---|
| 1 | Backup der bestehenden Website und Datenbank erstellen | Hoch | Offen |
| 2 | PHP-Version auf 8.1+ aktualisieren | Hoch | Offen |
| 3 | SSL/TLS-Zertifikat (Let's Encrypt) einrichten und validieren | Hoch | Offen |
| 4 | Prüfen, ob Datenbank `pacos_xt` noch relevante Daten enthält | Mittel | Offen |
| 5 | Deployment-Prozess definieren (Build → Upload → Verify) | Hoch | Offen |
| 6 | Optional: Staging-Subdomain einrichten | Mittel | Offen |
| 7 | Neue Website nach `/httpdocs/` deployen | Hoch | Offen |
| 8 | Post-Deployment: HTTPS, Darstellung, Funktionalität testen | Hoch | Offen |
| 9 | DNS-Einstellungen prüfen (falls Änderungen nötig) | Mittel | Offen |

---

## 6. Ansprechpartner

| Rolle | Kontakt | Zuständigkeit |
|---|---|---|
| Projektverantwortlicher | Sebastian Hirsch (Geschäftsführer PaCos GmbH) | Freigabe, Inhalt, Steuerung |
| Externer IT-Dienstleister | (Name beim Projektverantwortlichen erfragen) | Strato-Zugangsdaten, Plesk-Verwaltung, DNS |
| Thomas Hirsch | Geschäftsführer/CEO PaCos | Freigabe bei Bedarf |

---

## 7. Hinweise

- Der Plesk-Zugang wurde vom externen IT-Dienstleister bereitgestellt. Für den vollständigen Strato-Kunden-Login (DNS-Verwaltung, Vertragseinstellungen) ist ggf. eine separate Anfrage an den IT-Dienstleister nötig.
- Die E-Mail-Konfiguration in Plesk **nicht verändern** – PaCos migriert aktuell von Exchange Server 2019 zu Google Workspace. E-Mail-Einstellungen sind ein separates Workstream.
- Die Domain `pacos-gmbh.de` ist bei Strato registriert und gehostet.
