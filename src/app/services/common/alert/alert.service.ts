import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async registerSuccess() {
    const alert = await this.alertController.create({
      header: 'Félicitation',
      message:
        'Votre compte a été crée. Connectez-vous afn de profiter de notre univers !',
      buttons: [
        {
          text: 'ok',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['login']);
          },
        },
      ],
    });
    await alert.present();
  }
}
