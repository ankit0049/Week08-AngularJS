import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root', 
  // Ensure it's a standalone component 
  standalone: true,  
  // Import required modules
  imports: [CommonModule, FormsModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  private _userName: string = "";  
  title: string = "Hello from BridgeLabz";  
  ImageURL = "https://github.com/user-attachments/assets/eccf9b76-5291-493b-a9be-b0ef482bbe92"; 
  url: string = "https://www.bridgelabz.com"; 
  errorMessage: string = "";  

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
    this.validateName();
  }

  validateName() { 
    const regex = /^[A-Z][a-zA-Z]{2,}$/;  
    this.errorMessage = regex.test(this.userName) ? "" : "Name must start with a capital letter and have at least 3 letters.";
  }

  onClick(): void {
    window.open(this.url, "_blank");
  }
}
