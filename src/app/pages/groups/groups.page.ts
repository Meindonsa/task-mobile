import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/common/util/util.service';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-groups',
  templateUrl: 'groups.page.html',
  styleUrls: ['groups.page.scss'],
})
export class GroupsPage implements OnInit {
  groups: any = [];
  showProgressBar = false;

  constructor(
    private taskService: TaskService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  getTotalPrice(tasks: any) {
    return this.utilService.getTotalFolderPrice(tasks);
  }

  handleRefresh(event: any) {
    this.showProgressBar = true;
    setTimeout(() => {
      event.target.complete();
      this.showProgressBar = false;
    }, 2000);
  }

  init() {
    this.showProgressBar = true;
    setTimeout(() => {
      this.groups = this.taskService.retrieveFolders();
      this.showProgressBar = false;
    }, 2000);
  }
}
