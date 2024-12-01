<?php
class Product {
    public $id;
    public $name;
    public $category;
    public $price;
    public $availability;
    public $discount;

    public function __construct($id, $name, $category, $price, $availability, $discount) {
        $this->id = $id;
        $this->name = $name;
        $this->category = $category;
        $this->price = $price;
        $this->availability = $availability;
        $this->discount = $discount;
    }
}
?>
