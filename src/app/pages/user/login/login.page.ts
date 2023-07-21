import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/common/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  keyboardHidden = true;
  formGroup: FormGroup;

  constructor(
    private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    window.addEventListener('ionKeyboardDidShow', (ev) => {
      this.ngZone.run(() => {
        this.keyboardHidden = false;
      });
    });
    window.addEventListener('ionKeyboardDidHide', () => {
      this.ngZone.run(() => {
        this.keyboardHidden = true;
      });
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    this.authService.login(this.formGroup.value);
  }
}
