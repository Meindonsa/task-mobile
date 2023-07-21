import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemosPageRoutingModule } from './memos-routing.module';

import { MemosPage } from './memos.page';
import { ComponentModule } from 'src/app/components/component.module';
import { LucideAngularModule, StickyNote } from 'lucide-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemosPageRoutingModule,
    ComponentModule,
    LucideAngularModule.pick({
      StickyNote,
    }),
  ],
  declarations: [MemosPage],
})
export class MemosPageModule {}
