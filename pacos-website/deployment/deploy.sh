#!/bin/bash
# PaCos GmbH Website - Deployment Script
# Nutzung: ./deploy.sh
#
# Voraussetzungen:
# - Node.js 20 LTS installiert
# - PM2 installiert (npm install -g pm2)
# - nginx konfiguriert
# - Git Repository geklont nach /var/www/pacos-website

set -e

APP_DIR="/var/www/pacos-website"
APP_NAME="pacos-website"

echo "=== PaCos Website Deployment ==="
echo ""

# In das Projektverzeichnis wechseln
cd "$APP_DIR"

# Neuesten Code holen
echo "[1/4] Git pull..."
git pull origin master

# Dependencies installieren
echo "[2/4] Dependencies installieren..."
npm ci --production=false

# Build erstellen
echo "[3/5] Next.js Build..."
npm run build

# Standalone-Assets kopieren (Next.js standalone braucht static + public separat)
echo "[4/5] Static Assets fuer Standalone kopieren..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

# PM2 neustarten
echo "[5/5] Anwendung neustarten..."
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
    pm2 restart "$APP_NAME"
else
    pm2 start ecosystem.config.js
    pm2 save
fi

echo ""
echo "=== Deployment abgeschlossen ==="
echo "Status: $(pm2 show $APP_NAME | grep status)"
