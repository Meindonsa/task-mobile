import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { TaskElementComponent } from './task-element/task-element.component';

@NgModule({
  declarations: [HeaderComponent, TaskElementComponent],
  exports: [HeaderComponent, TaskElementComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentModule {}
