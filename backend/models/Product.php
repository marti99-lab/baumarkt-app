<?php
class Product {
    public $id;
    public $name;
    public $image;
    public $category;
    public $price;
    public $availability;
    public $discount;

    public function __construct($id, $name, $image, $category, $price, $availability, $discount) {
        $this->id = $id;
        $this->name = $name;
        $this->image = $image;
        $this->category = $category;
        $this->price = $price;
        $this->availability = $availability;
        $this->discount = $discount;
    }
}
?>
