Inhoud:
-Inleiding
-Installs
-.evn
-Functionaliteiten
-Api's

INLEIDING
Deze applicatie is geschreven in Webstorm. Voor verdere ontwikkeling van deze site
is het noodzakelijk een IDE te hebben.


INSTALLS 
De applicatie maakt gebruik van de onderstaande externe libraries. Die kunnen geinstalleerd worden met de volgende commando's in de terminal
- npm install
- npm install axios
- npm install react-router-dom (voor tabladen?)
- npm run build (environment variables 8.2)
- npm install react-hook-form
- npm install jwt-decode


.EVN

Maak voor gebruik een .env bestand aan ter hoogste van de gitignore in de applicatie.
(Rechtermuis knop -> new -> file, en noem die .evn). 
Vul deze met eigen key conform de syntax op .evn.dist 
Deze key is te verkrijgen door in te schrijven op: https://developer.marvel.com/docs
Jouw key wordt nu meegenomen in de apicall naar de Marvel database.
Draai een npm run build in de terminal om deze te installeren in het project.

FUNCTIONALITEITEN

1) ZOEK JOUW SUPERHELD (Search your Hero)
2) IN HOEVEEL COMICS, SERIES EN STORIES KOMT EEN MARVEL-HELD VOOR (SERIES)
3) INLOGGEN, UITLOGGEN EN AUTHENTICATIE
4) TOP 100'S (GROOTSTE, STERKSTE, LANGSTE, SNELSTE SUPERHELDEN)

API's

_DEZE APPLICATIE MAAKT GEBRUIK VAN 2 API'S_
1. VOOR ECHTE INFO OVER HELDEN
  https://akabab.github.io/superhero-api/api/

2. VOOR COMICS EN SERIES:
- MY PUBLIC KEY: 8a621d214f6703c92354d117a0cdb893
- MY PRIVATE KEY : ee113a5aa21a594a97eeda96adc86766a7b56358
- RATE LIMIT: 3000
Hierboven staan de public en private keys. Normaal gesproken push je die niet mee.
Dan zou ik schrijven: maak een account aan bij: https://developer.marvel.com/docs voor een eigen APIKEY

Als je bovenstaande instructies doorneemt, zou de apllicatie moeten werken. Succes!
