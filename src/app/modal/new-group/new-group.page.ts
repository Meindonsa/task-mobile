import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/common/toast/toast.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.page.html',
  styleUrls: ['./new-group.page.scss'],
})
export class NewGroupPage implements OnInit {
  formGroup: FormGroup;
  showProgressBar = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private modalController: ModalController
  ) {
    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {}

  create() {
    this.showProgressBar = true;
    this.close('confirm');
    this.showProgressBar = false;
    this.toastService.successToast('Liste créée avec succès !');
  }

  close(role: any) {
    return this.modalController.dismiss(null, role);
  }
}