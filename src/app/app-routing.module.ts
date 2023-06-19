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
    loadChildren: () =>
      import('./modal/notifications/notifications.module').then(
        (m) => m.NotificationsPageModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modal/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'new-product',
    loadChildren: () =>
      import('./modal/new-article/new-article.module').then(
        (m) => m.NewArticlePageModule
      ),
  },
  {
    path: 'new-group',
    loadChildren: () =>
      import('./modal/new-group/new-group.module').then(
        (m) => m.NewGroupPageModule
      ),
  },
  {
    path: 'group',
    data: { list: 'list' },
    loadChildren: () =>
      import('./pages/group/group.module').then((m) => m.GroupPageModule),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./modal/article/article.module').then((m) => m.ArticlePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/user/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/user/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/user/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/user/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
