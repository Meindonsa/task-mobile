import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal, ModalController } from '@ionic/angular';
import { ProductService } from '@spacelab-task/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/common/toast/toast.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.page.html',
  styleUrls: ['./new-article.page.scss'],
})
export class NewArticlePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  today = new Date('dd/MM/yyyy');
  now = new Date().toISOString();
  showProgressBar = false;
  expensesListNumber: any;
  formGroup: FormGroup;
  product: any;
  lists: any = [];
  user: any;
  date: any;

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
      name: [this.product?.name, Validators.required],
      price: [this.product?.price, Validators.required],
      description: [this.product?.description],
      date: [this.product?.date || this.now],
      targetNumber: [this.expensesListNumber],
    });
  }

  submit() {
    let view = {
      ...this.formGroup.value,
      userName: this.user.userName,
    };
    this.product == null ? this.create(view) : this.update(view);
  }

  create(view: any) {
    this.showProgressBar = true;
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

  update(view: any) {
    view.productNumber = this.product.productNumber;
    this.showProgressBar = true;
    this.productService.updateProduct(view).subscribe({
      next: () => {
        this.showProgressBar = false;
        this.toastService.successToast('Mise à jour effectué avec succès !');
        this.close('confirm');
      },
      error: () => {
        this.showProgressBar = false;
      },
    });
  }

  selectDate(event: any) {
    this.date = event.detail.value;
    this.formGroup.patchValue({
      date: this.date,
    });
    this.modal.dismiss();
  }

  close(role: any) {
    return this.modalController.dismiss(null, role);
  }
}
