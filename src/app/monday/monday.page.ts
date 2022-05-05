import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AddPage } from '../add/add.page';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-monday',
  templateUrl: './monday.page.html',
  styleUrls: ['./monday.page.scss'],
})
export class MondayPage implements OnInit {

  constructor(private popoverCtrl: PopoverController, private router: Router,
    private afFirestore: AngularFirestoreModule) { }

    add() {}

  ngOnInit() {
  }

  async itemAdd(ev) {
    const popover = await this.popoverCtrl.create({
      component: AddPage,
      event: ev,
      cssClass: 'custom-popover'
    })
  
    await popover.present();
  }
  
  }
