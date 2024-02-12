import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../services/cart-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,NgIf,MatIcon],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product?: Product;
  
  showDescription: boolean = false;
  liked: boolean = false;

  constructor(private cartService: CartService) { }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  toggleLiked() {
    this.liked = !this.liked;
  }
}
