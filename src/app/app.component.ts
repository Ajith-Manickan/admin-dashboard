import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';

  sidebarOpen:boolean=true
  toggle()
  {
    this.sidebarOpen = !this.sidebarOpen
  }
}
