import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/common/interceptor/interceptor.service';
import { environment } from 'src/environments/environment';
import {
  BASE_PATH,
  ExpensesListService,
  MemoService,
  ProductService,
  UserService,
} from '@spacelab-task/api';
import { QuillModule, QuillModules } from 'ngx-quill';
registerLocaleData(localeFr, 'fr');

const modules: QuillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strick'],
    // ['blockquote', 'code-block'],
    // [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    // [{ color: [] }, { background: [] }],
    // [{ font: [] }],
    // [{ align: [] }],
  ],
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot({
      format: 'html',
      modules,
      placeholder: 'Ecrivez quelque chose...',
    }),
  ],
  providers: [
    UserService,
    ExpensesListService,
    ProductService,
    MemoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'fr' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    {
      provide: BASE_PATH,
      useValue: environment.BASE_PATH,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
