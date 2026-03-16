# Plan: Infrastruktur-Migration pacos-gmbh.de

## Context
Die PaCos GmbH Website (Next.js 15) soll modern gehostet werden. Statt den veralteten Strato/Plesk-Server (PHP 5.4, kein Node.js) zu nutzen, wird die gesamte Infrastruktur neu aufgebaut:
- **Website** → Vercel (automatisches Deployment, CDN, SSL)
- **Domain** → Cloudflare (DNS-Management, DDoS-Schutz)
- **E-Mail** → Google Workspace (separates Workstream)
- **Strato** → Hosting kündigen nach Migration, Domain transferieren

**SICHERHEITSREGEL:** Alte Website auf Strato bleibt unangetastet bis alles Neue funktioniert.

---

## Phase 1: Vercel-Deployment aufsetzen (lokal, kein Server-Risiko)

### 1.1 Vercel-Account & Projekt erstellen
- Vercel-Account anlegen (vercel.com)
- GitHub-Repo mit dem `pacos-website`-Ordner verbinden
- Vercel erkennt Next.js automatisch und konfiguriert Build

### 1.2 Next.js-Config anpassen
**Datei: `pacos-website/next.config.ts`**
- `output: "standalone"` → ENTFERNEN (Vercel braucht das nicht, Standard ist optimal)
- Vercel optimiert Images automatisch, kein `unoptimized: true` nötig

### 1.3 Deployment-Configs aufräumen (lokal)
- `deployment/deploy.sh` → Entfernen (Vercel deployt automatisch via Git)
- `deployment/nginx.conf` → Entfernen (Vercel managed das)
- `deployment/setup.md` → Ersetzen durch kurze Vercel/Cloudflare-Doku
- Kein `.htaccess` nötig (Vercel hat eigenes Routing)

### 1.4 Erster Test-Deploy
- `git push` → Vercel baut und deployt automatisch
- Website ist sofort unter `*.vercel.app` erreichbar
- Testen: alle Seiten, Responsive, Performance

---

## Phase 2: Domain zu Cloudflare transferieren

### 2.1 Vorbereitung bei Strato
- Auth-Code (Transfer-Code) bei Strato anfordern für `pacos-gmbh.de`
- Domain-Lock (Transfer-Sperre) bei Strato deaktivieren
- **WICHTIG:** Aktuelle DNS-Einträge dokumentieren (MX, A, CNAME, TXT) BEVOR Transfer

### 2.2 Transfer zu Cloudflare
- Cloudflare-Account anlegen
- Domain hinzufügen, Auth-Code eingeben
- Cloudflare übernimmt automatisch bestehende DNS-Einträge
- Transfer dauert ca. 5-7 Tage (ICANN-Wartezeit)

### 2.3 DNS bei Cloudflare konfigurieren
- **A/CNAME-Record** → Vercel (für Website)
  - Vercel gibt die nötigen DNS-Werte vor
- **MX-Records** → Bestehende E-Mail-Config beibehalten (Exchange on-prem)
  - Später: MX auf Google Workspace umstellen (separates Workstream)
- **TXT-Records** → SPF, DKIM beibehalten

---

## Phase 3: Vercel mit Custom Domain verbinden

### 3.1 Domain in Vercel hinzufügen
- Vercel Dashboard → Projekt → Settings → Domains
- `pacos-gmbh.de` und `www.pacos-gmbh.de` hinzufügen
- Vercel gibt DNS-Einträge vor → in Cloudflare eintragen

### 3.2 SSL
- Vercel stellt automatisch ein SSL-Zertifikat aus
- Cloudflare SSL auf "Full (strict)" setzen

### 3.3 Verifizierung
- `https://pacos-gmbh.de` zeigt neue Website
- `https://www.pacos-gmbh.de` leitet um auf `pacos-gmbh.de`
- SSL funktioniert ohne Warnung
- E-Mail-Zustellung weiterhin funktionsfähig (MX-Records prüfen!)

---

## Phase 4: Aufräumen

### 4.1 Strato
- Altes Hosting-Paket kündigen (nach erfolgreicher Migration)
- Domain-Registrierung läuft jetzt über Cloudflare

### 4.2 Impressum aktualisieren
**Datei: `pacos-website/src/app/impressum/page.tsx`**
- Hosting-Anbieter von "Hostinger" auf "Vercel Inc., San Francisco, USA" ändern
- Ggf. DSGVO-Hinweis zu Vercel/Cloudflare (US-Anbieter, DPA vorhanden)

### 4.3 Alte Deployment-Configs entfernen
- `deployment/` Ordner: deploy.sh, nginx.conf → löschen
- `deployment/setup.md` → kurze Vercel-Anleitung

---

## Kritische Dateien

| Datei | Aktion |
|-------|--------|
| `pacos-website/next.config.ts` | `output: "standalone"` entfernen |
| `pacos-website/deployment/deploy.sh` | Löschen |
| `pacos-website/deployment/nginx.conf` | Löschen |
| `pacos-website/deployment/setup.md` | Umschreiben für Vercel |
| `pacos-website/src/app/impressum/page.tsx` | Hosting-Anbieter aktualisieren |

---

## Reihenfolge & Sicherheit

```
Phase 1: Vercel aufsetzen          → Kein Risiko (lokal + neuer Service)
Phase 2: Domain → Cloudflare       → E-Mail-Risiko! MX-Records müssen 1:1 übernommen werden
Phase 3: Domain → Vercel verbinden → Alte Website wird ersetzt (gewollt)
Phase 4: Strato kündigen           → Erst wenn alles läuft
```

**Größtes Risiko:** Beim Domain-Transfer (Phase 2) dürfen die MX-Records nicht verloren gehen, sonst funktioniert E-Mail nicht mehr. Cloudflare importiert diese normalerweise automatisch, aber wir müssen das verifizieren.

---

## Verifizierung

1. Vercel-Deploy: `*.vercel.app` zeigt Website korrekt
2. Alle Seiten erreichbar: `/`, `/impressum`, `/datenschutz`, `/agb`
3. Nach Domain-Umstellung: `https://pacos-gmbh.de` zeigt neue Website
4. SSL: Kein Browser-Warnung
5. E-Mail: Test-Mail an eine @pacos-gmbh.de Adresse senden und empfangen
6. Performance: Lighthouse Score prüfen
