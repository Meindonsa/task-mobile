import { Component, Input, OnInit } from '@angular/core';

enum TaskStatus {
  TODO = 'TODO',
  DONE = 'DONE',
  DELETED = 'DELETED',
}

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {
  @Input('notification') notification: any;

  constructor() {}

  ngOnInit() {}

  change(status: any) {
    return status == TaskStatus.DONE
      ? (status = TaskStatus.TODO)
      : TaskStatus.DONE;
  }
}
