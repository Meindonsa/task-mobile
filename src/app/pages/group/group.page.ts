import { ExpensesListService } from '@spacelab-task/api';
import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  NavController,
  PopoverController,
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NewArticlePage } from 'src/app/modal/new-article/new-article.page';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  showProgressBar = false;
  userTarget: any;
  done: any = [];
  todo: any = [];
  group: any;
  user: any;

  constructor(
    private authService: AuthService,
    private navController: NavController,
    private modalController: ModalController,
    public popoverController: PopoverController,
    private expensesListService: ExpensesListService,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    const state = history.state;
    if (state.list != null) {
      this.group = state['list'];
      this.retrieveGroupDetail();
    }
    this.userTarget = {
      userName: this.user.userName,
      targetNumber: this.group.expensesListNumber,
    };
  }

  retrieveGroupDetail() {
    this.done = [];
    this.todo = [];
    this.showProgressBar = true;
    let view = {
      userName: this.user.userName,
      targetNumber: this.group.expensesListNumber,
    };
    this.expensesListService.retrieveTaskGroupDetail(view).subscribe({
      next: (res) => {
        this.group = res;
        this.showProgressBar = false;
        this.divideProducts(this.group.products);
      },
      error: () => {
        this.showProgressBar = false;
      },
    });
  }

  divideProducts(products: any[]) {
    products.forEach((item) => {
      if (item.status == 'TODO') this.todo.push(item);
      if (item.status == 'DONE') this.done.push(item);
    });
  }

  async receiveChanging(event: any) {
    await setTimeout(() => {
      this.retrieveGroupDetail();
    }, 2500);
  }

  async openAddProduct() {
    const modal = await this.modalController.create({
      component: NewArticlePage,
      componentProps: {
        expensesListNumber: this.group.expensesListNumber,
      },
      initialBreakpoint: 0.7,
      breakpoints: [0, 0.7, 0.7],
    });
    modal.present();

    await modal.onWillDismiss().then((out) => {
      if (out.role == 'confirm') this.retrieveGroupDetail();
    });
  }

  async isDelete() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Souhaitez-vous vraiment supprimer cette liste ?',
      buttons: [
        {
          text: 'Oui',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
  back() {
    this.navController.navigateBack('groups', { state: { refresh: true } });
  }
}
