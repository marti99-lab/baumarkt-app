<?php
$pageTitle = "Produktdetails";
include "components/header.php";
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script defer src="assets/js/product-view.js"></script>
</head>
<body>
    <main>
        <button class="btn-back" id="back-button">Zurück</button>
        <section id="product-detail">
            <div class="product-container">
                <div class="product-details">
                    <img id="product-image" src="assets/images/placeholder.jpg" alt="Produktbild">
                    <h2 id="product-title">Produktname</h2>
                    <p id="product-description">Kategorie: <span id="product-category"></span></p>
                    <p id="availability"></p>
                    <p id="delivery-time"></p>
                    <p id="shipping-info"></p>
                    <p id="discount-info"></p>
                    <button class="btn" id="online-order">Online bestellen</button>
                    <button class="btn" id="reserve-pickup">Reservieren & Abholen</button>
                </div>
            </div>
            <div class="additional-info">
                <h3>Produktbeschreibung:</h3>
                <p id="additional-text">Keine weiteren Informationen verfügbar.</p>
            </div>
        </section>
    </main>
</body>
</html>
<?php include "components/footer.php"; ?>