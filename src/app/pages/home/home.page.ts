import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: any = [];
  folders: any = [];
  today = new Date();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.retrieveTasks();
    this.folders = this.taskService.retrieveFolders().slice(0, 3);
  }
}
