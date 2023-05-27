import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper-slide',
  templateUrl: './swipper-slide.component.html',
  styleUrls: ['./swipper-slide.component.scss'],
})
export class SwipperSlideComponent implements OnInit {
  @Input('folders') folders: any;
  constructor() {}

  ngOnInit() {
    console.log(this.folders);
  }

  swiperSlideChanged(event: any) {
    // console.log(event);
  }

  getTotalPrice(tasks: any) {
    let totalPrice = 0;
    tasks.forEach((element: any) => {
      totalPrice += element.price;
    });
    return totalPrice;
  }
}
