import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  getTotalFolderPrice(tasks: any) {
    let totalPrice = 0;
    tasks.forEach((element: any) => {
      totalPrice += element.price;
    });
    return totalPrice;
  }
}
