import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  matchStarted: boolean = false;
  title = 'Architectural quiz';

  startMatch() {
    this.matchStarted = true;
  }
}
