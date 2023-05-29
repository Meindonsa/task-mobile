import { TaskService } from './../../services/tasks/task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/common/toast/toast.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.page.html',
  styleUrls: ['./new-article.page.scss'],
})
export class NewArticlePage implements OnInit {
  showProgressBar = false;
  formGroup: FormGroup;
  lists: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private modalController: ModalController,
    private taskService: TaskService
  ) {
    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: [''],
      list: [''],
    });
  }

  ngOnInit() {
    this.lists = this.taskService.retrieveFolders();
  }

  create() {
    this.showProgressBar = true;
    this.toastService.successToast('Article créée avec succès !');
    this.showProgressBar = false;
    this.close('confirm');
  }

  close(role: any) {
    return this.modalController.dismiss(null, role);
  }
}
