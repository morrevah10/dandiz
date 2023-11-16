import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(item: any) {
    const currentCartItems = this.cartItemsSubject.value;
    const updatedCartItems = [...currentCartItems, item];
    this.cartItemsSubject.next(updatedCartItems);
  }

  removeCartItem(index: number) {
    const currentCartItems = this.cartItemsSubject.value;
    const updatedCartItems = currentCartItems.filter((item, i) => i !== index);
    this.cartItemsSubject.next(updatedCartItems);
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }
}
