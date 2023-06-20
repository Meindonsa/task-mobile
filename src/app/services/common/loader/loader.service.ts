import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private loadingController: LoadingController) {}

  async show(message: string): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create({
      cssClass: 'custom-loader-class',
      message: message,
    });
    await loading.present();
    return loading;
  }

  async hide(loading: Promise<HTMLIonLoadingElement>) {
    await loading.then((element) => {
      element.dismiss();
    });
  }
}
