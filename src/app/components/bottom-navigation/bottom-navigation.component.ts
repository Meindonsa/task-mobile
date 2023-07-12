import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit {
  constructor(
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['profile']);
  }
}
