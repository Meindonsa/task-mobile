import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  today = new Date();
  folders: any = [];
  tasks: any = [];
  user: any;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    if (this.user == null || this.user == '') this.router.navigate(['login']);
    this.tasks = this.taskService.retrieveTasks();
    this.folders = this.taskService.retrieveFolders().slice(0, 3);
  }
}
