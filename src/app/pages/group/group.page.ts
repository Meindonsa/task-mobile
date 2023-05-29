import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  showProgressBar = false;
  list: any;
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {
    const state = history.state;
    if (state.list != null) {
      this.list = state['list'];
    }
    console.log(this.list);
  }

  async isDelete() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Souhaitez-vous vraiment supprimer cette liste ?',
      buttons: [
        {
          text: 'Oui',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
