import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { LucideIconModule } from 'src/app/module/lucide-icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucideIconModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule,
  ],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
