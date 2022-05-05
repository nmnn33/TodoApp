import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private popoverCtrl: PopoverController,
    private afFirestore: AngularFirestoreModule) { }

  ngOnInit() {}
 
  close() {
    this.popoverCtrl.dismiss();
  }
}
