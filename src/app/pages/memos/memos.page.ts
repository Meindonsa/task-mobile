import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.page.html',
  styleUrls: ['./memos.page.scss'],
})
export class MemosPage implements OnInit {
  showProgressBar = false;
  memos: any = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  handleRefresh(event: any) {}

  openMemo(memo: any) {
    this.router.navigate(['memo', { state: { memo: memo } }]);
  }
}
