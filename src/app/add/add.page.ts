import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}
 
  close() {
    this.popoverCtrl.dismiss();
  }
}
