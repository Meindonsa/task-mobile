import { ExpensesListService } from '@spacelab-task/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/common/toast/toast.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.page.html',
  styleUrls: ['./new-group.page.scss'],
})
export class NewGroupPage implements OnInit {
  user: any;
  formGroup: FormGroup;
  showProgressBar = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private modalController: ModalController,
    private expensesListService: ExpensesListService
  ) {
    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  create() {
    this.showProgressBar = true;
    let view = {
      ...this.formGroup.value,
      userName: this.user.userName,
    };
    this.expensesListService.createTaskGroup(view).subscribe({
      next: () => {
        this.close('confirm');
        this.showProgressBar = false;
        this.toastService.successToast('Liste créée avec succès !');
      },
      error: () => {
        this.showProgressBar = false;
      },
    });
  }

  close(role: any) {
    return this.modalController.dismiss(null, role);
  }
}
