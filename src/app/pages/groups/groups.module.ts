import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupsPage } from './groups.page';

import { GroupsPageRoutingModule } from './groups-routing.module';
import { ComponentModule } from 'src/app/components/component.module';
import { LucideAngularModule, ClipboardCheck } from 'lucide-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GroupsPageRoutingModule,
    ComponentModule,
    LucideAngularModule.pick({
      ClipboardCheck,
    }),
  ],
  declarations: [GroupsPage],
})
export class GroupsPageModule {}
