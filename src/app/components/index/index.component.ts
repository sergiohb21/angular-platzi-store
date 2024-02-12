import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/get-products.service';
import { Product } from '../../models/product.model';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ProductDetailComponent,NgIf,NgFor,MatCardModule, CartComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  Products?:Product[];

  constructor(private productService: ProductService) { }
  
  ngOnInit () {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts()
      .then((products) => {
        this.Products = products;
        return products;
      })
      .catch(error => console.error(error));
  }
}
