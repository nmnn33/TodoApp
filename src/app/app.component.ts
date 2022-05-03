import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Monday', url: 'monday' },
    { title: 'Tuesday', url: 'tuesday' },
    { title: 'Wednesday', url: 'wednesday' },
    { title: 'Thursday', url: 'thursday' },
    { title: 'Friday', url: 'friday' },
    { title: 'Saturday', url: 'saturday' },
    { title: 'Sunday', url: 'sunday' },
  ];
  public appEssentials = [
    { title: 'Home', url: 'home' },
    { title: 'Add task', url: 'add' },
  ];
  constructor() {}
}
