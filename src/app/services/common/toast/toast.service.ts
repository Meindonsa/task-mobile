import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async successToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      mode: 'ios',
      position: 'top',
      message: message,
      duration: duration,
      cssClass: 'success-toast',
      icon: 'checkmark-circle-outline',
    });

    await toast.present();
  }

  async errorToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      mode: 'ios',
      position: 'top',
      message: message,
      duration: duration,
      cssClass: 'error-toast',
      icon: 'warning-outline',
    });

    await toast.present();
  }

  async infoToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      mode: 'ios',
      position: 'top',
      message: message,
      duration: duration,
      cssClass: 'info-toast',
      icon: 'information-circle-outline',
    });

    await toast.present();
  }
}
