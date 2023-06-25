import { ExpensesListService } from '@spacelab-task/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilService } from 'src/app/services/common/util/util.service';
import { TaskService } from 'src/app/services/tasks/task.service';

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
    private taskService: TaskService,
    private utilService: UtilService,
    private authService: AuthService,
    private expensesListService: ExpensesListService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  ionViewWillEnter() {
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
    // this.showProgressBar = true;
    setTimeout(() => {
      event.target.complete();
      // this.showProgressBar = false;
    }, 2000);
  }

  showDetails(list: any) {
    this.router.navigate(['group'], { state: { list: list } });
  }
}
