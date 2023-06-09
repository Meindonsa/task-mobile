import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGroupPageRoutingModule } from './new-group-routing.module';

import { NewGroupPage } from './new-group.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ReactiveFormsModule,
    NewGroupPageRoutingModule,
  ],
  declarations: [NewGroupPage],
})
export class NewGroupPageModule {}
