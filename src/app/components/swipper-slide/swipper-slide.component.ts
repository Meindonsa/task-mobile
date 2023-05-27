import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/common/util/util.service';

@Component({
  selector: 'app-swipper-slide',
  templateUrl: './swipper-slide.component.html',
  styleUrls: ['./swipper-slide.component.scss'],
})
export class SwipperSlideComponent implements OnInit {
  @Input('folders') folders: any;

  constructor(private utilService: UtilService) {}

  ngOnInit() {}

  swiperSlideChanged(event: any) {
    // console.log(event);
  }

  getTotalPrice(tasks: any) {
    return this.utilService.getTotalFolderPrice(tasks);
  }
}
