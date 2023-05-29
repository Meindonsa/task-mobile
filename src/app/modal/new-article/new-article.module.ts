import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewArticlePageRoutingModule } from './new-article-routing.module';
import { NewArticlePage } from './new-article.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ReactiveFormsModule,
    NewArticlePageRoutingModule,
  ],
  declarations: [NewArticlePage],
})
export class NewArticlePageModule {}
