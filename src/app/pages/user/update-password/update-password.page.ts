import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/common/util/util.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  formGroup: FormGroup;
  isSamePassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService
  ) {
    this.formGroup = formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe((value) => {
      this.isSamePassword = this.utilService.isSamePassword(
        value.newPassword,
        value.confirmPassword
      );
    });
  }

  updatePassword() {
    console.log(this.formGroup.value);
  }
}
