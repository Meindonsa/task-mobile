import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPageRoutingModule } from './group-routing.module';

import { GroupPage } from './group.page';
import { ComponentModule } from 'src/app/components/component.module';
import { LucideAngularModule, LayoutList } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    GroupPageRoutingModule,
    LucideAngularModule.pick({
      LayoutList,
    }),
  ],
  declarations: [GroupPage],
})
export class GroupPageModule {}
