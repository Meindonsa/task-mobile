import { ExpensesListService, ProductService } from '@spacelab-task/api';
import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  NavController,
  PopoverController,
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NewArticlePage } from 'src/app/modal/new-article/new-article.page';
import { UtilService } from 'src/app/services/common/util/util.service';
import { ToastService } from 'src/app/services/common/toast/toast.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  showProgressBar = false;
  status: any = 'TODO';
  products: any = [];
  userTarget: any;
  done: any = [];
  todo: any = [];
  amount: number;
  group: any;
  user: any;

  constructor(
    private utilService: UtilService,
    private authService: AuthService,
    private toastService: ToastService,
    private navController: NavController,
    private productService: ProductService,
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
      this.retrieveGroupDetail(this.status);
    }
    this.userTarget = {
      userName: this.user.userName,
      targetNumber: this.group.expensesListNumber,
    };
    this.amount = this.group.amount;
  }

  generateAmount() {
    this.amount = 0;
    this.products.forEach((item: any) => {
      this.amount += item.price;
    });
    this.group.amount = this.amount;
  }

  retrieveGroupDetail(status: any) {
    this.showProgressBar = true;
    let view = {
      userName: this.user.userName,
      targetNumber: this.group.expensesListNumber,
      status: status,
    };
    this.expensesListService.retrieveTaskGroupDetail(view).subscribe({
      next: (res) => {
        this.group = res;
        this.showProgressBar = false;
        this.products = res.products;
        this.generateAmount();
      },
      error: () => {
        this.showProgressBar = false;
      },
    });
  }

  updateGroup() {
    delete this.group.products;
    let view = { ...this.group, userName: this.user.userName };
    this.expensesListService.updateTaskGroup(view).subscribe();
  }

  changeSegment(event: any) {
    this.retrieveGroupDetail(event.detail.value);
    this.status = event.detail.value;
  }

  receiveChanging(event: any) {
    if (event.action == 'check') {
      this.changeProductStatus(event);
    }
    if (event.action == 'delete') {
      this.deleteProduct(event);
    }
    if (event.action == 'edit') {
      this.openAddProduct(event.product);
    }
  }

  changeProductStatus(view: any) {
    this.products = this.removeProduct(this.products, view.product, 500);
    this.changeStatus(view);
  }

  deleteProduct(event: any) {
    let view = {
      ...this.userTarget,
      productNumber: event.product.productNumber,
    };
    let index = this.utilService.retrieveProductIndex(
      this.products,
      event.product
    );
    if (index > -1) {
      this.products = this.removeProduct(this.products, event.product, 500);
      this.productService.deleteProdcut(view).subscribe();
    }
  }

  editProduct(view: any) {
    console.log(view);
  }

  changeStatus(view: any) {
    delete view.product;
    delete view.action;
    this.productService.validateProduct(view).subscribe();
  }

  removeProduct(list: any, product: any, time: number = 0) {
    let myList = list;
    setTimeout(() => {
      let index = this.utilService.retrieveProductIndex(list, product);
      myList.splice(index, 1);
      this.generateAmount();
    }, time);
    return myList;
  }

  addProduct(list: any, product: any, time: number = 0) {
    let myList = list;
    setTimeout(() => {
      myList.unshift(product);
      this.generateAmount();
    }, time);
    return myList;
  }

  async openAddProduct(product: any) {
    const modal = await this.modalController.create({
      component: NewArticlePage,
      componentProps: {
        expensesListNumber: this.group.expensesListNumber,
        product: product,
      },
      initialBreakpoint: 0.7,
      breakpoints: [0, 0.7, 0.7],
    });
    modal.present();

    await modal.onWillDismiss().then((out) => {
      if (out.role == 'confirm') this.retrieveGroupDetail(this.status);
    });
  }

  pinList() {
    this.showProgressBar = true;
    let view = this.userTarget;
    this.group.pin = !this.group.pin;
    this.expensesListService.pinTaskGroup(view, this.group.pin).subscribe({
      next: () => {
        this.showProgressBar = false;
        this.toastService.successToast(
          this.group.pin ? 'Liste épinglée' : 'List désépinglée'
        );
      },
      error: () => {
        this.showProgressBar = false;
      },
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
