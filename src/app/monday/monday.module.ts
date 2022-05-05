import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MondayPageRoutingModule } from './monday-routing.module';

import { MondayPage } from './monday.page';
import { AddPageModule } from '../add/add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MondayPageRoutingModule,
    AddPageModule
  ],
  declarations: [MondayPage]
})
export class MondayPageModule {}
