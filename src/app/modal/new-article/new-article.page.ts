import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProductService } from '@spacelab-task/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/common/toast/toast.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.page.html',
  styleUrls: ['./new-article.page.scss'],
})
export class NewArticlePage implements OnInit {
  today = new Date('dd/MM/yyyy');
  showProgressBar = false;
  expensesListNumber: any;
  formGroup: FormGroup;
  lists: any = [];
  user: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private productService: ProductService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: [''],
      targetNumber: [this.expensesListNumber],
    });
  }

  create() {
    this.showProgressBar = true;
    let view = {
      ...this.formGroup.value,
      userName: this.user.userName,
    };
    this.productService.createProduct(view).subscribe({
      next: () => {
        this.showProgressBar = false;
        this.toastService.successToast('Article créée avec succès !');
        this.close('confirm');
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
