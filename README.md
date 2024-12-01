# baumarkt-app

1. Projektplanung

Anforderungen für den Baumarkt-Shop

  Produkte: Kategorien, Preis, Verfügbarkeit.
  Funktionen: Warenkorb, Benutzerregistrierung/Anmeldung, Produktfilter, Suchfunktion, Wunschliste für Produkte, Rabattaktionen
  Design: Responsives Layout, klare Navigation.
  Backend: Integration für die Datenverwaltung und Bestellungen (mit PHP).
  Datenbank: Produkte, Benutzer und Bestellungen (mit MySQL).

2. Technologieauswahl

    Frontend: React für dynamische Benutzeroberfläche.
    Backend: PHP.
    Datenbank: MySQL 
    Styling: CSS, Bootstrap,

# app structur
```
baumarkt-app/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── css/
│   │       │   └── styles.css
│   │       └── images/
│   └── src/
│       ├── App.js
│       └── index.js
├── database/
│       └── schema.sql
└── backend/
    ├── api/
    │   └── products.php
    ├── config/
    │   └── db.php
    ├── controllers/
    │   └── ProductController.php
    ├── models/
    │   └── Product.php
    └── api/
        └── index.php