import { ExpensesListService } from '@spacelab-task/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilService } from 'src/app/services/common/util/util.service';
import { TaskService } from 'src/app/services/tasks/task.service';
import { NewGroupPage } from 'src/app/modal/new-group/new-group.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-groups',
  templateUrl: 'groups.page.html',
  styleUrls: ['groups.page.scss'],
})
export class GroupsPage implements OnInit {
  user: any;
  groups: any = [];
  showProgressBar = false;
  expensesLists: any = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalController: ModalController,
    private expensesListService: ExpensesListService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  ionViewWillEnter() {
    this.retrieveExpensesList();
    const state = history.state;
    if (state.refresh) {
      console.log(state);
      this.retrieveExpensesList();
    }
  }

  retrieveExpensesList() {
    this.showProgressBar = true;
    this.expensesListService
      .retrieveUserTaskGroups(this.user.userName)
      .subscribe({
        next: (res) => {
          this.expensesLists = res;
          this.showProgressBar = false;
        },
        error: () => {
          this.showProgressBar = false;
        },
      });
  }

  handleRefresh(event: any) {
    this.showProgressBar = true;
    setTimeout(() => {
      this.showProgressBar = false;
      this.retrieveExpensesList();
      event.target.complete();
    }, 2000);
  }

  showDetails(list: any) {
    this.router.navigate(['group'], { state: { list: list } });
  }

  async openAddFolder() {
    const modal = await this.modalController.create({
      component: NewGroupPage,
      initialBreakpoint: 0.6,
      breakpoints: [0, 0.6, 0.6],
    });
    modal.present();

    await modal.onWillDismiss().then((out) => {
      if (out.role == 'confirm') this.retrieveExpensesList();
    });
  }
  getPercentage(value: any) {
    let percent = '0.' + value;
    return +percent;
  }
}
