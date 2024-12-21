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
│   │   ├── index.php, login-page.php, product-detail.php, register-page.php
│   │   ├── components/
│   │   │        └── header.php, footer.php
│   │   └── assets/
│   │       ├── css/
│   │       │   └── styles.css
│   │       ├── images/
│   │       ├── fonts/ 
│   │       └── js/  
│   │           └── login.js, product-details.js, register.js, scripts.js
│   └── src/
│       └── App.js, index.js, ProductDetails.js
├── database/
│       └── insert_products.sql, schema.sql
└── backend/
    ├── api/
    │   └── products.php, api-register.php, login-handler.php, login_api
    ├── config/
    │   └── db.php, includes.php
    ├── controllers/
    │   └── ProductController.php
    ├── includes/
    │   └── auth.php, footer.php, header.php
    ├── models/
    │   └── Product.php
    └── views/
        └── index.php
  