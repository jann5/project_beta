#!/bin/bash

# Script to package the website for hosting
# Usage: ./package-for-hosting.sh

echo "🚀 Pakowanie strony Engleo do wrzucenia na hosting..."
echo ""

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Folder 'dist' nie istnieje!"
    echo "Najpierw zbuduj projekt: npm run build"
    exit 1
fi

# Create package name with timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
PACKAGE_NAME="engleo-website-${TIMESTAMP}.zip"

# Go to dist folder and create zip
echo "📦 Tworzę paczkę: ${PACKAGE_NAME}"
cd dist
zip -r "../${PACKAGE_NAME}" . > /dev/null 2>&1

if [ $? -eq 0 ]; then
    cd ..
    SIZE=$(du -h "${PACKAGE_NAME}" | cut -f1)
    echo ""
    echo "✅ Gotowe!"
    echo "📦 Plik: ${PACKAGE_NAME}"
    echo "📏 Rozmiar: ${SIZE}"
    echo ""
    echo "🎯 Co dalej?"
    echo "1. Pobierz plik: ${PACKAGE_NAME}"
    echo "2. Wgraj na hosting do folderu public_html"
    echo "3. Rozpakuj na serwerze"
    echo "4. Gotowe! 🎉"
    echo ""
    echo "📖 Szczegółowa instrukcja: INSTRUKCJA_HOSTING.md"
else
    echo ""
    echo "❌ Błąd podczas pakowania!"
    exit 1
fi
