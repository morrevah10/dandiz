import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  itemId!: string;
  itemDetails: any;
  selectedImage: string = '';

  panelOpenState = false;

  colorOptions: string[] = ['Red', 'Green', 'Blue']; 
  sizeOptions: string[] = ['Small', 'Medium', 'Large']; 

  selectedColor: string = ''; 
  selectedSize: string = '';
  dropdownFields: any[] = [
    { title: 'Field 1', isOpen: false, content: 'Content for Field 1' },
    { title: 'Field 2', isOpen: false, content: 'Content for Field 2' },
    { title: 'Field 3', isOpen: false, content: 'Content for Field 3' },
    { title: 'Field 4', isOpen: false, content: 'Content for Field 4' }
  ];

  constructor(private route: ActivatedRoute,private itemService: ItemService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      this.loadItemDetails();
    });

  }

  private loadItemDetails() {
    this.itemService.getItemById(this.itemId).subscribe(
      (data) => {
        this.itemDetails = data;
        if (this.itemDetails.images && this.itemDetails.images.length > 0) {
          this.selectedImage = this.itemDetails.images[0];
      }
        console.log(this.itemDetails);
      },
      (error) => {
        console.error('Error fetching item details:', error);
        // Handle error (e.g., display an error message)
      }
    );
  }

  selectImage(image: string): void {
    this.selectedImage = image;
    console.log('Selected Image:', image);
  }

  addToCart(): void {
    // Logic to handle adding the product to the cart
    // You can implement this based on your cart management system
    console.log('Product added to cart:', this.itemDetails);
  }

  toggleDropdown(field: any): void {
    // Toggle the isOpen property to show/hide the content for the selected field
    field.isOpen = !field.isOpen;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

}