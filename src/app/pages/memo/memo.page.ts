import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MemoService } from '@spacelab-task/api';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.page.html',
  styleUrls: ['./memo.page.scss'],
})
export class MemoPage implements OnInit {
  memo: any = {
    title: '',
    content: '',
  };
  user: any;
  canRefresh = false;

  constructor(
    private memoService: MemoService,
    private authService: AuthService,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    // const state = history.state;
    // if (state.memo != null) {
    //   this.memo = state['memo'];
    // }
  }

  onChange() {
    let view = {
      ...this.memo,
      userName: this.user.userName,
    };
    this.memo.memoNumber != null && this.memo.memoNumber != undefined
      ? this.updateMemo(view)
      : this.createMemo(view);
  }

  createMemo(memo: any) {
    memo.title =
      memo.title == null || memo.title == '' ? 'Nouveau mémo' : memo.title;
    this.memoService.createMemo(memo).subscribe({
      next: (res) => {
        this.memo.memoNumber = res.memoNumber;
        this.canRefresh = true;
      },
    });
  }

  updateMemo(memo: any) {
    this.memoService.updateMemo(memo).subscribe({
      next: () => {
        this.canRefresh = true;
      },
    });
  }

  async canDeleteMemo() {
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Voulez-vous vraiment supprimer ce mémo ?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.deleteMemo();
          },
        },
      ],
    });

    await alert.present();
  }

  deleteMemo() {
    let userTargetView = {
      userName: this.user.userName,
      targetNumber: this.memo.memoNumber,
    };
    this.memoService.deleteMemo(userTargetView).subscribe({
      next: () => {
        this.canRefresh = true;
        this.back();
      },
    });
  }

  back() {
    this.modalController.dismiss(this.canRefresh);
    // this.navController.navigateBack('memos', { state: { refresh: true } });
  }
}
