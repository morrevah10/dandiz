import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  messages: string[] = [
      'Free shipping on purchases over NIS 500',
      'When you buy a shirt, you get 50 percent off the second shirt'
    ];
}
