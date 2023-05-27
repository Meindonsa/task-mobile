import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/common/util/util.service';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any = [];
  showProgressBar = false;

  constructor(
    private taskService: TaskService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  handleRefresh(event: any) {
    this.showProgressBar = true;
    setTimeout(() => {
      event.target.complete();
      this.showProgressBar = false;
    }, 2000);
  }

  async init() {
    this.showProgressBar = true;
    await setTimeout(() => {
      this.notifications = this.taskService.retrieveTasks();
      this.showProgressBar = false;
    }, 2000);
  }
}
