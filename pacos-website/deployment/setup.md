# VPS-Einrichtung -- PaCos GmbH Website

## 1. VPS bestellen

- **Anbieter:** Hostinger VPS (hostinger.de/vps-hosting)
- **Produkt:** KVM 1 oder KVM 2 (ab ca. 5 EUR/Monat)
- **Standort:** EU-Rechenzentrum (Litauen, Niederlande oder UK) -- WICHTIG fuer DSGVO: kein US-Standort
- **OS:** Ubuntu 24.04 LTS

## 2. Erster Login & Absicherung

```bash
# Als root einloggen
ssh root@DEINE-VPS-IP

# System aktualisieren
apt update && apt upgrade -y

# Neuen User anlegen (nicht root fuer den Alltag)
adduser deploy
usermod -aG sudo deploy

# SSH-Key fuer den neuen User einrichten
mkdir -p /home/deploy/.ssh
cp ~/.ssh/authorized_keys /home/deploy/.ssh/
chown -R deploy:deploy /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys

# Passwort-Login deaktivieren
# In /etc/ssh/sshd_config aendern:
#   PasswordAuthentication no
#   PermitRootLogin no
systemctl restart sshd
```

## 3. Firewall (UFW)

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp   # SSH
ufw allow 80/tcp   # HTTP
ufw allow 443/tcp  # HTTPS
ufw enable
```

## 4. fail2ban

```bash
apt install fail2ban -y
systemctl enable fail2ban
systemctl start fail2ban
```

## 5. Automatische Sicherheitsupdates

```bash
apt install unattended-upgrades -y
dpkg-reconfigure -plow unattended-upgrades
```

## 6. Node.js 20 LTS installieren

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install nodejs -y
node --version  # Sollte v20.x anzeigen
```

## 7. PM2 installieren

```bash
npm install -g pm2
pm2 startup  # Folge den Anweisungen in der Ausgabe
```

## 8. nginx installieren

```bash
apt install nginx -y
systemctl enable nginx
```

## 9. SSL-Zertifikat (Let's Encrypt)

```bash
apt install certbot python3-certbot-nginx -y

# WICHTIG: Zuerst DNS bei Strato konfigurieren!
# A-Record: pacos-gmbh.de -> VPS-IP
# A-Record: www.pacos-gmbh.de -> VPS-IP
# Warten bis DNS propagiert ist (kann bis zu 24h dauern, meist < 1h)

certbot --nginx -d pacos-gmbh.de -d www.pacos-gmbh.de

# Auto-Renewal testen
certbot renew --dry-run
```

## 10. Website deployen

```bash
# Als deploy-User:
sudo mkdir -p /var/www/pacos-website
sudo chown deploy:deploy /var/www/pacos-website

# Repository klonen
cd /var/www
git clone https://github.com/DEIN-USERNAME/pacos-website.git pacos-website
cd pacos-website

# Dependencies installieren
npm ci

# Build erstellen
npm run build

# PM2 starten
pm2 start ecosystem.config.js
pm2 save
```

## 11. nginx konfigurieren

```bash
# nginx-Config kopieren
sudo cp deployment/nginx.conf /etc/nginx/sites-available/pacos-website
sudo ln -s /etc/nginx/sites-available/pacos-website /etc/nginx/sites-enabled/

# Default-Config entfernen
sudo rm /etc/nginx/sites-enabled/default

# Konfiguration testen
sudo nginx -t

# nginx neuladen
sudo systemctl reload nginx
```

## 12. DNS bei Strato konfigurieren

1. Login bei strato.de
2. Domains -> DNS-Verwaltung
3. A-Record: `@` (oder leer) -> VPS-IP-Adresse
4. A-Record: `www` -> VPS-IP-Adresse
5. Aenderungen speichern
6. Warten bis DNS propagiert ist (pruefen: `dig pacos-gmbh.de`)

## 13. AVV mit Hostinger abschliessen

1. Login bei Hostinger (hostinger.de)
2. Im Account-Bereich unter "Rechtliches" / "Legal" das DPA (Data Processing Agreement) abschliessen
3. PDF herunterladen und aufbewahren

## 14. Spaeters Deployment (Updates)

```bash
ssh deploy@DEINE-VPS-IP
cd /var/www/pacos-website
./deployment/deploy.sh
```

## Checkliste nach Einrichtung

- [ ] Website erreichbar unter https://pacos-gmbh.de
- [ ] HTTP leitet auf HTTPS um
- [ ] www leitet auf non-www um
- [ ] Impressum erreichbar
- [ ] Datenschutzerklaerung erreichbar
- [ ] 404-Seite funktioniert (z.B. /test123)
- [ ] SSL-Bewertung pruefen: ssllabs.com/ssltest
- [ ] Security Headers pruefen: securityheaders.com
- [ ] AVV/DPA mit Hostinger abgeschlossen
