import { LoaderService } from './../../../services/common/loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/common/toast/toast.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {
  user: any;
  formGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private loaderService: LoaderService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.formGroup = this.formBuilder.group({
      lastName: [this.user.lastName, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      phone: [this.user.phone, Validators.required],
      email: [this.user.email, Validators.required],
    });
  }

  update() {
    let loader = this.loaderService.show('Chargement...');
    let user = {
      ...this.formGroup.value,
      userName: this.user.userName,
    };
    this.authService.updateUser(user).subscribe({
      next: (res) => {
        this.authService.saveUser(res);
        this.loaderService.hide(loader);
        this.toastService.successToast('Informations modifiées', 3000);
        this.navController.back();
      },
      error: () => {
        this.loaderService.hide(loader);
      },
    });
  }
}
