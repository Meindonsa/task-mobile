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
      this.retrieveGroupDetail();
    }
    this.userTarget = {
      userName: this.user.userName,
      targetNumber: this.group.expensesListNumber,
    };
    this.amount = this.group.amount;
  }

  generateAmount() {
    this.amount = 0;
    this.todo.forEach((item: any) => {
      this.amount += item.price;
    });
    this.group.amount = this.amount;
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

  divideProducts(products: any[]) {
    products.forEach((item) => {
      if (item.status == 'TODO') this.todo.push(item);
      if (item.status == 'DONE') this.done.push(item);
    });
  }

  receiveChanging(event: any) {
    if (event.action == 'check') {
      this.changeProductStatus(event);
    }
    if (event.action == 'delete') {
      this.deleteProduct(event);
    }
    if (event.action == 'edit') {
      this.editProduct(event);
    }
  }

  changeProductStatus(view: any) {
    view.status == 'DONE'
      ? this.doneProduct(view)
      : view.status == 'TODO'
      ? this.todoProduct(view)
      : null;
  }

  deleteProduct(event: any) {
    let view = {
      ...this.userTarget,
      productNumber: event.product.productNumber,
    };
    let index = this.utilService.retrieveProductIndex(this.todo, event.product);
    if (index > -1) {
      this.todo = this.removeProduct(this.todo, event.product, 500);
    } else {
      index = this.utilService.retrieveProductIndex(this.done, event.product);
      this.done = this.removeProduct(this.done, event.product, 500);
    }
    this.productService.deleteProdcut(view).subscribe();
  }

  editProduct(view: any) {}

  doneProduct(view: any) {
    this.todo = this.removeProduct(this.todo, view.product, 500);
    view.product.status = 'DONE';
    this.done = this.addProduct(this.done, view.product, 600);
    this.changeStatus(view);
  }

  todoProduct(view: any) {
    this.done = this.removeProduct(this.done, view.product, 500);
    view.product.status = 'TODO';
    this.todo = this.addProduct(this.todo, view.product, 600);
    this.changeStatus(view);
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
