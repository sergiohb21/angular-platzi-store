import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/get-products.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  ngOnInit () {
    const Productos = this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts()
      .then(products => {
        return products;
      })
      .catch(error => console.error(error));
  }
}
