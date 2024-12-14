# baumarkt-app

1. Projektplanung

Anforderungen für den Baumarkt-Shop

  Produkte: Kategorien, Preis, Verfügbarkeit.
  Funktionen: Warenkorb, Benutzerregistrierung/Anmeldung, Produktfilter, Suchfunktion, Wunschliste für Produkte, Rabattaktionen
  Design: Responsives Layout, klare Navigation.
  Backend: Integration für die Datenverwaltung und Bestellungen (mit PHP).
  Datenbank: Produkte, Benutzer und Bestellungen (mit MySQL).

2. Technologieauswahl

  Frontend: PHP, HTML, and JavaScript for dynamic and interactive features.
  Backend: PHP for server-side logic and API integration.
  Datenbank: MySQL for data storage and retrieval.
  Styling: CSS and Bootstrap for a responsive and visually appealing design.
  Images... von https://pixabay.com/de/

# app structur
```
baumarkt-app/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── register.html
│   │   ├── components/
│   │   │        └── header.php, footer.php
│   │   └── assets/
│   │       ├── css/
│   │       │   └── styles.css
│   │       ├── images/
│   │       ├── fonts/ 
│   │       └── js/
│   │           ├── register.js 
│   │           ├── login.js    
│   │           └── scripts.js
│   └── src/
│       ├── App.js
│       ├── index.js
│       └── ProductDetails.js
├── database/
│       └── insert_products.sql, schema.sql
└── backend/
    ├── api/
    │   └── products.php, register.php
    ├── config/
    │   └── db.php
    ├── controllers/
    │   └── ProductController.php
    ├── models/
    │   └── Product.php
    └── api/
        └── index.php