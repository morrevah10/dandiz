import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'; // Import your item service here


@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent implements OnInit {

  filterOptions: string[] = ['Shirts', 'Pants', 'Hats'];
  selectedOption: string = '';
  searchText: string = '';
  selectedSortingOption: string = 'cheapToExpensive';
  items: any[] = []; 
  filteredItems: any[] = [];

  constructor(private ItemService: ItemService) {}

  ngOnInit() {
    this.ItemService.getItems().subscribe((data) => {
      this.items = data.items;
      console.log(this.items)
      this.applyFilters();
    });
  }

  selectOption(option: string) {
    this.selectedOption = this.selectedOption === option ? '' : option;
    this.applyFilters();
  }

  applyFilters() {
    if (
      !this.selectedOption &&
      !this.searchText &&
      this.selectedSortingOption === 'cheapToExpensive'
    ) {
      this.filteredItems = this.items.slice();
    } else {
      this.filteredItems = this.items
        .filter((item) => this.filterByOption(item))
        .filter((item) => this.filterByText(item))
        .sort(this.sortItems.bind(this));
    }
  }
  

  filterByOption(item: any): boolean {
    return this.selectedOption ? item.category === this.selectedOption : true;
  }

  filterByText(item: any): boolean {
    return item.name.toLowerCase().includes(this.searchText.toLowerCase());
  }

  sortItems(a: any, b: any): number {
    switch (this.selectedSortingOption) {
      case 'cheapToExpensive':
        return a.price - b.price;
      case 'expensiveToCheap':
        return b.price - a.price;
      case 'newToOld':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldToNew':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default:
        return 0;
    }
  }

}
