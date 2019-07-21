# Web Scraper & Client website

Acest proiect este proprietatea Angular Soft Technology

Mod de lucru:

- creati un folder de lucru local
- se deschide un terminal si se mută in folderul de lucru
- se cloneaza proiectul de pe GitHub (cu git clone)
- se ruleaza npm install pentru a instala toate dependintele din package.json
- trebuie sa aveti instalat Ruby si Compass
- folosind un terminal cu Ruby se rulază gem install compass pentru a instala utilitarul

Proiectul este impartit astfel:

- Client - Pagina web - client website
- Componente - SASS, JS, etc
- Server - Scraperul
- Clientul este impartit in doua foldere:

    - Development - aici este mediul de lucru unde se salveaza si testeaza codul compilat din Componente

    - Production - tot codul (CSS, JS, HTML, imagini) din development compilat si minimizat. Aici nu umblam pentru că reține ultima versiune gata de urcat pe server

In momentul in care avem toate dependintele instalate pentru proiect, in terminal rulam gulp pentru a porni proiectul pe un server local.

In acest sens, avem doua variante de rulat gulp:

1. NODE_ENV=development gulp - il folosim doar pe acesta. Suntem pe mod development
2. NODE_ENV=production gulp - il folosim doar cand exportam ultima varianta testata buna de urcat pe serverul live

Nota: a se citi fisierul gulpfile.js pentru mai multe detalii legate de task-urile create
