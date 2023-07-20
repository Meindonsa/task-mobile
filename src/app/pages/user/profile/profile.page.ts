import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ImagesService } from 'src/app/services/common/images/images.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  image: any = 'assets/image/profile.png';
  user: any;

  constructor(
    private authService: AuthService,
    private imagesService: ImagesService
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.image =
      this.user.photo != null
        ? this.imagesService.binaryToBase64(this.user.photo)
        : this.image;
  }

  updateProfilePicture(event: any) {
    this.imagesService.fileToBase64(event).then((res) => {
      this.image = res;
      let view: any = {
        targetNumber: this.imagesService.base64ToBinary(this.image),
        userName: this.user.userName,
      };
      this.authService.updateProfilePhoto(view).subscribe({
        next: () => {
          this.user.photo = view.targetNumber;
          this.authService.saveUser(this.user);
        },
      });
    });
  }

  logout() {
    this.authService.logout();
  }
}
