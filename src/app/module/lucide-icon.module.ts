import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  File,
  Home,
  Menu,
  Power,
  UserCheck,
} from 'lucide-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ File, Home, Menu, Power, UserCheck }),
  ],
  exports: [],
})
export class LucideIconModule {}
