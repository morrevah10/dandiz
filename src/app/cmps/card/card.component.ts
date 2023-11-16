import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item: any;
  currentImageIndex: number = 0;
  

  constructor(private router: Router, private cartService: CartService) {}


  get currentImage(): string {
    return this.item.images[this.currentImageIndex];
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.item.images.length) % this.item.images.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.item.images.length;
  }


  goToDetails() {
    console.log('click')

    // this.router.navigate(['/product-details', this.item.id]);
    // this.router.navigate(['/', this.item.id]);

  }

  addToCart() {
    console.log('click')
    this.cartService.addToCart(this.item);
  }
}
