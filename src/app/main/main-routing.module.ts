import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('../pages/user/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('../pages/user/support/support.module').then(
        (m) => m.SupportPageModule
      ),
  },
  {
    path: 'update-password',
    loadChildren: () =>
      import('../pages/user/update-password/update-password.module').then(
        (m) => m.UpdatePasswordPageModule
      ),
  },
  {
    path: 'personal-information',
    loadChildren: () =>
      import(
        '../pages/user/personal-information/personal-information.module'
      ).then((m) => m.PersonalInformationPageModule),
  },
  {
    path: 'group',
    data: { list: 'list' },
    loadChildren: () =>
      import('../pages/group/group.module').then((m) => m.GroupPageModule),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('../modal/article/article.module').then(
        (m) => m.ArticlePageModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('../pages/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'new-product',
    loadChildren: () =>
      import('../modal/new-article/new-article.module').then(
        (m) => m.NewArticlePageModule
      ),
  },
  {
    path: 'new-group',
    loadChildren: () =>
      import('../modal/new-group/new-group.module').then(
        (m) => m.NewGroupPageModule
      ),
  },

  {
    path: 'memo',
    data: { memo: 'memo' },
    loadChildren: () =>
      import('../pages/memo/memo.module').then((m) => m.MemoPageModule),
  },
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'groups',
        data: { refresh: 'refresh' },
        loadChildren: () =>
          import('../pages/groups/groups.module').then(
            (m) => m.GroupsPageModule
          ),
      },
      {
        path: 'memos',
        data: { refresh: 'refresh' },
        loadChildren: () =>
          import('../pages/memos/memos.module').then((m) => m.MemosPageModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../pages/notifications/notifications.module').then(
            (m) => m.NotificationsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainPageRoutingModule {}
