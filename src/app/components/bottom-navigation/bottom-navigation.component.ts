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
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

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
