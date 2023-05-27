import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'notifications',
    loadChildren: () => import('./modal/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./modal/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'new-product',
    loadChildren: () => import('./modal/new-product/new-product.module').then( m => m.NewProductPageModule)
  },
  {
    path: 'new-group',
    loadChildren: () => import('./modal/new-group/new-group.module').then( m => m.NewGroupPageModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./pages/group/group.module').then( m => m.GroupPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./modal/article/article.module').then( m => m.ArticlePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
