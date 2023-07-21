import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ModalAnimationService {
  constructor(private animationCtrl: AnimationController) {}

  /*
   * Animation de page
   *
   */

  // enterAnimation = (baseEl: HTMLElement) => {
  //   const root: any = baseEl.shadowRoot;

  //   const backdropAnimation = this.animationCtrl
  //     .create()
  //     .addElement(root.querySelector('ion-backdrop')!)
  //     .fromTo('opacity', '°5', 'var(--backdrop-opacity)');

  //   const wrapperAnimation = this.animationCtrl
  //     .create()
  //     .addElement(root.querySelector('.modal-wrapper')!)
  //     .keyframes([
  //       { offset: 0, opacity: '1', transform: 'translate(100vw)' },
  //       { offset: 1, opacity: '1', transform: 'translate(0px)' },
  //     ]);

  //   return this.animationCtrl
  //     .create()
  //     .addElement(baseEl)
  //     .easing('ease-in-out')
  //     .duration(300)
  //     .addAnimation([wrapperAnimation]);
  // };

  /*
   * Animation de maintient
   *
   */

  enterAnimation = (baseEl: HTMLElement) => {
    const root: any = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .keyframes([
        { offset: 0, opacity: '.03' },
        { offset: 1, opacity: '.3' },
      ]);

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        {
          offset: 0,
          opacity: '1',
          transform: 'scale(1)',
          height: '100px',
          border: '.5px solid #ccc',
        },
        { offset: 1, opacity: '1', transform: 'scale(1)', height: '100%' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('cubic-bezier(1,-0.01,0,1.01)')
      .duration(400)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
}
