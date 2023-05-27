import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.page.html',
  styleUrls: ['./new-group.page.scss'],
})
export class NewGroupPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  close(role: any) {
    return this.modalController.dismiss(null, role);
  }
}
