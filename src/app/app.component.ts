import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = "I love Angular!";
  public tooltip: string = "Enter word";
  public alertButton() {
    alert("Clicked!");
  };
}
