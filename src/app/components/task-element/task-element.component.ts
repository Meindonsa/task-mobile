import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  change() {
    let view = {
      ...this.userTarget,
      productNumber: this.product.productNumber,
      status: this.getStatus(),
    };
    this.productService.validateProduct(view).subscribe({
      next: () => {
        this.productChanged.emit(true);
      },
    });
  }

  getStatus() {
    return this.product.status == 'TODO' ? 'DONE' : 'TODO';
  }
}
