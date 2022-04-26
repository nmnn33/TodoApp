import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'mail' },
    { title: 'Add task', url: 'home', icon: 'paper-plane' },
    { title: 'Monday', url: 'monday' },
    { title: 'Tuesday', url: 'tuesday' },
    { title: 'Wednesday', url: 'wednesday' },
    { title: 'Thursday', url: 'thursday' },
    { title: 'Friday', url: 'friday' },
    { title: 'Saturday', url: 'saturday' },
    { title: 'Sunday', url: 'sunday' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
