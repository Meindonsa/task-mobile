import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  regEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  constructor() {}

  getTotalFolderPrice(tasks: any) {
    let totalPrice = 0;
    tasks.forEach((element: any) => {
      totalPrice += element.price;
    });
    return totalPrice;
  }

  isSamePassword(password: string, confirmPassword: string) {
    return password === confirmPassword;
  }

  isEmail(email: string) {
    return this.regEmail.test(email);
  }

  retrieveProductIndex(list: any, product: any) {
    let index = list.findIndex(
      (item: any) => item.productNumber == product.productNumber
    );
    return index > -1 ? index : null;
  }
}
