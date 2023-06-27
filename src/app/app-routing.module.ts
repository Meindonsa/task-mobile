import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modal/notifications/notifications.module').then(
        (m) => m.NotificationsPageModule
      ),
  },
  {
    path: 'search',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modal/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'new-product',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modal/new-article/new-article.module').then(
        (m) => m.NewArticlePageModule
      ),
  },
  {
    path: 'new-group',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modal/new-group/new-group.module').then(
        (m) => m.NewGroupPageModule
      ),
  },
  {
    path: 'group',
    canActivate: [AuthGuard],
    data: { list: 'list' },
    loadChildren: () =>
      import('./pages/group/group.module').then((m) => m.GroupPageModule),
  },
  {
    path: 'article',
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/user/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'terms',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/user/terms/terms.module').then((m) => m.TermsPageModule),
  },
  {
    path: 'support',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/user/support/support.module').then(
        (m) => m.SupportPageModule
      ),
  },
  {
    path: 'update-password',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/user/update-password/update-password.module').then(
        (m) => m.UpdatePasswordPageModule
      ),
  },
  {
    path: 'personal-information',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        './pages/user/personal-information/personal-information.module'
      ).then((m) => m.PersonalInformationPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
