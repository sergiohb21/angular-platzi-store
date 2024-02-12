import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatMenuModule,RouterLink,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  cartItemsCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.toggleCartSubject.subscribe(() => {
      this.updateCartItemsCount(); // Actualiza el contador cuando hay cambios en el carrito
    });
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

  private updateCartItemsCount() {
    const items = this.cartService.getItems(); // Obtiene los elementos del carrito
    this.cartItemsCount = items.length; // Actualiza el contador
  }
}
