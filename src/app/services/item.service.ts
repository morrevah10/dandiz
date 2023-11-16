import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = '../../assets/jsons/items.json'

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<any>(this.itemsUrl);
  }

  getItemById(itemId: string): Observable<any> {
    return this.getItems().pipe(
      map((response: any) => {
        const items = response.items || []; // Access the 'items' property
        console.log('Items from JSON file:', items);

        const foundItem = items.find((item: { id: string; }) => item.id === itemId);
        console.log('Found Item:', foundItem);

        return foundItem || null; // Return null if item is not found
      })
    );
  }
}
