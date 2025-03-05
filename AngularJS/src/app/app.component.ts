import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title: string = " Ankit AngularJS"; 
  ImageURL = "https://github.com/user-attachments/assets/eccf9b76-5291-493b-a9be-b0ef482bbe92"; 
  url: string = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Ankit Rajput, Hello from BridgeLabz";  
  }

  // This function will open the website on image click
  onClick(event: Event): void {
    window.open(this.url, "_blank");
  }
}
