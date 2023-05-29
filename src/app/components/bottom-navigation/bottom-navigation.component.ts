import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { NewArticlePage } from 'src/app/modal/new-article/new-article.page';
import { NewGroupPage } from 'src/app/modal/new-group/new-group.page';
import { SearchPage } from 'src/app/modal/search/search.page';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  async openAdd() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Que voulez-vous créer ?',
      mode: 'ios',
      buttons: [
        {
          text: 'Liste',
          role: 'list',
          handler: () => {
            this.openAddFolder();
          },
        },
        {
          text: 'Article',
          role: 'article',
          handler: () => {
            this.openAddProduct();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

  async openAddFolder() {
    const modal = await this.modalController.create({
      component: NewGroupPage,
      initialBreakpoint: 0.6,
      breakpoints: [0, 0.6, 0.6],
    });
    modal.present();

    await modal.onWillDismiss();
  }

  async openAddProduct() {
    const modal = await this.modalController.create({
      component: NewArticlePage,
      initialBreakpoint: 0.7,
      breakpoints: [0, 0.7, 0.7],
    });
    modal.present();

    await modal.onWillDismiss();
  }

  async openSearchPage() {
    const modal = await this.modalController.create({
      component: SearchPage,
      initialBreakpoint: 0.99,
      breakpoints: [0, 0.9, 0.99],
    });
    modal.present();

    await modal.onWillDismiss();
  }
}
