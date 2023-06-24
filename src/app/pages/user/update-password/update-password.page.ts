import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/common/loader/loader.service';
import { ToastService } from 'src/app/services/common/toast/toast.service';
import { UtilService } from 'src/app/services/common/util/util.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  user: any;
  formGroup: FormGroup;
  isSamePassword: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private toastService: ToastService,
    private loaderService: LoaderService,
    private navController: NavController
  ) {
    this.formGroup = formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.formGroup.valueChanges.subscribe((value) => {
      this.isSamePassword = this.utilService.isSamePassword(
        value.newPassword,
        value.confirmPassword
      );
    });
  }

  updatePassword() {
    let loader = this.loaderService.show('Chargement...');
    let view = {
      ...this.formGroup.value,
      email: this.user.email,
    };
    this.authService.updatePassword(view).subscribe({
      next: () => {
        this.loaderService.hide(loader);
        this.toastService.successToast('Mot de passe modifié');
        this.navController.back();
      },
      error: () => {
        this.loaderService.hide(loader);
      },
    });
  }
}
