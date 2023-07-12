import { Component, OnInit } from '@angular/core';
import { UserService } from '@spacelab-task/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/common/loader/loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  updateProfilePicture(picture: any) {}

  logout() {
    this.authService.logout();
  }
}
