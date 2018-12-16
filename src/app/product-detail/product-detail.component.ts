import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products: Product[] = [
    new Product(1, "Product 001"),
    new Product(2, "Product 002"),
    new Product(3, "Product 003"),
    new Product(4, "Product 004"),
    new Product(5, "Product 005"),
    new Product(6, "Product 006"),
    new Product(7, "Product 007"),
    new Product(8, "Product 008"),
    new Product(9, "Product 009"),
    new Product(10, "Product 010"),
    new Product(11, "Product 011"),
    new Product(12, "Product 012"),
    new Product(13, "Product 013"),
    new Product(14, "Product 014"),
    new Product(15, "Product 015"),
    new Product(16, "Product 016"),
    new Product(17, "Product 017"),
    new Product(18, "Product 018"),
    new Product(19, "Product 019"),
    new Product(20, "Product 020"),
    new Product(21, "Product 021"),
    new Product(22, "Product 022"),
    new Product(23, "Product 023"),
    new Product(24, "Product 024"),
  ];
  product: Product = this.product[0]; // this will store the current to display

  constructor() { }

  ngOnInit() {
  }

}
