import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prototipo1';
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }
}
