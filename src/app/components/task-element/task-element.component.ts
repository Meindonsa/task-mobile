import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { ProductService } from '@spacelab-task/api';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.scss'],
})
export class TaskElementComponent implements OnInit {
  @Output('productChanged') productChanged = new EventEmitter<any>();
  @Input('userTarget') userTarget: any;
  @Input('task') product: any;
  user: any;

  constructor() {}

  ngOnInit() {}

  change() {
    let view = {
      ...this.userTarget,
      productNumber: this.product.productNumber,
      status: this.getStatus(),
    };
  }

  getStatus() {
    return this.product.status == 'TODO' ? 'DONE' : 'TODO';
  }

  slideEvent(action: any, item: IonItemSliding) {
    item.close();
    let status = action == 'check' ? this.getStatus() : null;
    let data = {
      ...this.userTarget,
      productNumber: this.product.productNumber,
      product: this.product,
      action: action,
      status: status,
    };
    this.productChanged.emit(data);
  }
}
