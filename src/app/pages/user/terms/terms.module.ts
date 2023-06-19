import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsPageRoutingModule } from './terms-routing.module';

import { TermsPage } from './terms.page';
import {
  LucideAngularModule,
  User,
  Lock,
  BellRing,
  FileText,
  Rotate3d,
} from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsPageRoutingModule,
    LucideAngularModule.pick({ User, Lock, BellRing, FileText, Rotate3d }),
  ],
  declarations: [TermsPage],
})
export class TermsPageModule {}
