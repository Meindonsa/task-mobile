import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { TaskElementComponent } from './task-element/task-element.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwipperSlideComponent } from './swipper-slide/swipper-slide.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {
  LucideAngularModule,
  File,
  Home,
  Menu,
  UserCheck,
  Bell,
} from 'lucide-angular';

@NgModule({
  declarations: [
    HeaderComponent,
    TaskElementComponent,
    SwipperSlideComponent,
    BottomNavigationComponent,
    NotificationItemComponent,
    ProgressBarComponent,
  ],
  exports: [
    HeaderComponent,
    TaskElementComponent,
    SwipperSlideComponent,
    BottomNavigationComponent,
    NotificationItemComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    LucideAngularModule.pick({ File, Home, Menu, UserCheck, Bell }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule {}
