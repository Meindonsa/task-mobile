import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/common/util/util.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: any;

  constructor(public utilService: UtilService) {}

  ngOnInit() {}
}
