installs 
- npm install
- npm install react-router-dom@5.2.0 (voor de router)
- npm install axios
- npm install react-router-dom (voor tabladen?)
- npm run build (environment variables 8.2)
- npm install jwt-decode (voor authenticatie)
- npm install sass --save-dev (voor SASS en SCSS, nog niet gedaan)
- npm install react-hook-form

is het zo dat:
- npx nodemon spread-operator.js een paginaatje standalone maakt?


Maak voor gebruik een .env bestandje aan ter hoogste van de gitignore in de applicatie
vul deze met eigen key conform de syntax op .evn.dist 
Draai een npm run build in de terminal om deze te installeren in het project.
Deze key is te verkrijgen door in te schrijven op: https://developer.marvel.com/docs


- FUNCTIONALITEITEN
1) ZOEK JE SUPERHELD (EN MAAK EEN MOOI PLAATJE DAARVAN)
2) WELKE HELDEN KOMEN VOOR IN EEN GENOEMDE COMIC? (LIJSTJE)
3) ALS JE DAAROP DOORKLIKT: WEER BIOGRAFIE VAN EEN SUPERHELD
4) INLOGGEN EN AUTHENTICATIE
5) TOP TIENS (GROOTSTE, STERKSTE, LANGSTE, SNELSTE SUPERHELDEN)



Voor het inloggen heb je de NOVI backend nodig
https://github.com/hogeschoolnovi/novi-educational-backend-documentation/blob/main/README.md#rest-endpoints
Dit lijkt op de BANANA Security Opdracht. Die authenticatie kun je praktisch nabouwen, maar de endpoint is anders.
https://github.com/hogeschoolnovi/frontend-react-banana-security-professional-uitwerkingen



git@github.com:hogeschoolnovi/frontend-react-private-blog-uitwerkingen.git
Deze kun je gebruiken voor om te kijken hoe het met useParam werkt.


_DEZE APPLICATIE MAAKT GEBRUIK VAN 2 API'S_
1. VOOR ECHTE INFO OVER HELDEN
  https://akabab.github.io/superhero-api/api/

2. VOOR COMICS EN SERIES:
- MY PUBLIC KEY: 8a621d214f6703c92354d117a0cdb893
- MY PRIVATE KEY : ee113a5aa21a594a97eeda96adc86766a7b56358
- RATE LIMIT: 3000
