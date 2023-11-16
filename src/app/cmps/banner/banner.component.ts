import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  {

  @Input() messages: string[] = [];
   currentMessageIndex = 0;

   constructor(private cdr: ChangeDetectorRef) { }

   ngOnInit() {
     this.updateMessage();
   }

   updateMessage() {
     setInterval(() => {
       this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
       this.cdr.detectChanges(); 
     }, 10000); 
   }

   getNextMessage(): string {
     return this.messages[this.currentMessageIndex];
   }
 
}
