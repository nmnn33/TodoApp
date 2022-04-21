import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'mail' },
    { title: 'Add task', url: '/folder/Add task', icon: 'paper-plane' },
    { title: 'Monday', url: '/folder/Monday' },
    { title: 'Tuesday', url: '/folder/Tuesday' },
    { title: 'Wednesday', url: '/folder/Wednesday' },
    { title: 'Thursday', url: '/folder/Thursday' },
    { title: 'Friday', url: '/folder/Friday' },
    { title: 'Saturday', url: '/folder/Saturday' },
    { title: 'Sunday', url: '/folder/Sunday' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
