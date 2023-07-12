import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {
  LucideAngularModule,
  User,
  Lock,
  BellRing,
  FileText,
  Rotate3d,
  Power,
  Bookmark,
} from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,

    LucideAngularModule.pick({
      User,
      Lock,
      BellRing,
      FileText,
      Rotate3d,
      Power,
      Bookmark,
    }),
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
