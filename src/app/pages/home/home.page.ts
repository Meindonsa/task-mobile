import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesListService, ProductService } from '@spacelab-task/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  expensesLists: any = [];
  products: any = [];
  today = new Date();
  folders: any = [];
  tasks: any = [];
  user: any;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private authService: AuthService,
    private productService: ProductService,
    private expensesListService: ExpensesListService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    if (this.user == null || this.user == '') this.router.navigate(['login']);
    this.tasks = this.taskService.retrieveTasks();
    this.folders = this.taskService.retrieveFolders().slice(0, 3);
  }

  ionViewWillEnter() {
    this.retrieveGroup();
    this.retrieveDayProducts();
  }

  retrieveGroup() {
    this.expensesListService
      .retrieveUserTaskGroups(this.user.userName)
      .subscribe({
        next: (response) => {
          this.expensesLists = response;
        },
      });
  }

  retrieveDayProducts() {
    this.products = [];
    this.productService.retrieveDailyProducts(this.user.userName).subscribe({
      next: (response: any) => {
        this.products = response;
      },
    });
  }
}
