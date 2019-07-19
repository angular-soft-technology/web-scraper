# Web Scraper & Client website

Acest proiect este proprietatea Angular Soft Technology

Introducere
npm install, sa intalati toate dependintele din package.json

Proiectul este impartit in trei parti:

Client - Pagina web - client website
Componente - SASS, JS, etc
Server - Scraperul
Clientul este impartit in doua foldere:

Development - aici este enviromentul unde se salveaza si testeaza codul compilat din Componente
Production - tot codul css, js, html, imagini din Development compilat si minimizat. Aici nu umblam. Aici se salveaza last version gata de urcat pe server
Avem doua variante de rulat gulp:

NODE_ENV=development gulp - il folosim doar pe acesta. Suntem pe mod development
NODE_ENV=production gulp - il folosim doar cand exportam ultima varianta testata buna de urcat pe serverul live
Va rog sa cititi gulp.js pentru mai multe detalii
