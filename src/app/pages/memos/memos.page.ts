import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MemoService } from '@spacelab-task/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/common/storage/storage.service';
import { UtilService } from 'src/app/services/common/util/util.service';
import { MemoPage } from '../memo/memo.page';
import { ModalAnimationService } from 'src/app/services/common/animation/modal-animation.service';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.page.html',
  styleUrls: ['./memos.page.scss'],
})
export class MemosPage implements OnInit {
  showProgressBar = false;
  canRefresh = null;
  memos: any = [];
  user: any;
  memo: any = {
    title: '',
    content: '',
    memoNumber: null,
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private memoService: MemoService,
    private utilService: UtilService,
    private modalController: ModalController,
    private storageService: StorageService,
    private modalAnimationService: ModalAnimationService
  ) {}

  ngOnInit() {
    // this.refresh();
  }

  ionViewWillEnter() {
    this.user = this.authService.getUser();
    this.retrieveMemos();
  }

  retrieveMemos() {
    this.showProgressBar = true;
    this.memoService.retrieveMemos(this.user.userName).subscribe({
      next: (response) => {
        this.showProgressBar = false;
        this.memos = response;
        this.storageService.removeData('MEMO');
      },
      error: () => {
        this.showProgressBar = false;
      },
    });
  }

  handleRefresh(event: any) {
    this.showProgressBar = true;
    setTimeout(() => {
      this.showProgressBar = false;
      this.retrieveMemos();
      event.target.complete();
    }, 2000);
  }

  refresh() {
    setInterval(() => {
      console.log(this.utilService.getRefreshMemo());
      if (this.utilService.getRefreshMemo()) {
        this.retrieveMemos();
      }
    }, 1000);
  }

  async openMemo(memo: any) {
    const modal = await this.modalController.create({
      component: MemoPage,
      componentProps: { memo: memo },
      enterAnimation: this.modalAnimationService.enterAnimation,
      leaveAnimation: this.modalAnimationService.leaveAnimation,
    });
    modal.present();
    // this.router.navigate(['memo'], { state: { memo: memo } });
  }
}
