import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  private totalPrice: number = 0;
  private itemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  toggleCartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // Utilizamos BehaviorSubject para tener un estado inicial
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
    this.updateTotalPrice();
    this.itemsSubject.next(this.items); // Emitir el nuevo estado del carrito

  }

  private updateTotalPrice() {
    this.totalPrice = this.items.reduce((total, product) => total + product.price, 0);
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getItems() {
    return this.items;
  }

  toggleCart() {
    const currentState = this.toggleCartSubject.getValue();
    this.toggleCartSubject.next(!currentState); // Cambiamos el estado actual del carrito
  }

  clearCart() {
    this.items = [];
    this.totalPrice = 0;
    this.itemsSubject.next(this.items); 
  }


}
