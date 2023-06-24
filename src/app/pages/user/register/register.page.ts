import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserView } from '@spacelab-task/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertService } from 'src/app/services/common/alert/alert.service';
import { LoaderService } from 'src/app/services/common/loader/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private loaderService: LoaderService
  ) {
    this.formGroup = formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      agree: [false, Validators.required],
    });
  }

  ngOnInit() {}

  register() {
    let user: UserView = {
      ...this.formGroup.value,
      role: { name: 'CONSUMER' },
    };
    let loading = this.loaderService.show('Connexion...');
    this.authService.register(user).subscribe({
      next: () => {
        this.loaderService.hide(loading);
        this.alertService.registerSuccess();
      },
      error: () => {
        this.loaderService.hide(loading);
      },
    });
  }
}
