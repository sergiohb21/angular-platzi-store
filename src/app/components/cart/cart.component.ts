import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  items: Product[] = [];
  totalPrice: number = 0;
  isCartOpen: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getItems();
    this.getTotalPrice();
  }

  getItems() {
    this.items = this.cartService.getItems();
  }

  getTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.getItems();
    this.getTotalPrice();
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
