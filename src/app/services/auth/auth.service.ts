import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../common/storage/storage.service';
import { UserService } from '@spacelab-task/api';
import { LoaderService } from '../common/loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  CONNECTED_USER = 'CONNECTED_SPENDER';
  private userSubject = new BehaviorSubject<any>(this.getUser());
  user = this.userSubject.asObservable();

  constructor(
    private router: Router,
    private userService: UserService,
    private loaderService: LoaderService,
    private storageService: StorageService
  ) {}

  register(user: any) {
    return this.userService.create(user);
  }

  login(user: any) {
    let loading = this.loaderService.show('Connexion...');
    this.userService.login(user).subscribe({
      next: (response) => {
        this.saveUser(response);
        this.loaderService.hide(loading);
        this.router.navigate(['home']);
      },
      error: () => {
        this.loaderService.hide(loading);
      },
    });
  }

  logout() {
    this.unsetUser();
    this.router.navigate(['login']);
  }

  unsetUser() {
    this.userSubject.next(null);
    this.storageService.removeData(this.CONNECTED_USER);
  }

  validateToken(data: any) {
    this.userService.validateToken(data).subscribe((status) => {
      if (!status) this.logout();
    });
  }

  isAuthenticated(): boolean {
    let user = this.getUser();
    return user != null && user !== undefined && user != '';
  }

  saveUser(data: any) {
    this.storageService.saveData(this.CONNECTED_USER, data);
    this.userSubject.next(data);
  }

  getUser() {
    return this.storageService.getData(this.CONNECTED_USER);
  }

  getToken() {
    return this.getUser().token;
  }

  setUpAccessToken() {
    let user = this.getUser();
    this.userService.configuration.accessToken = user.token;
  }

  activateUser(user: any) {
    return this.userService.activateUser(user);
  }

  updatePassword(data: any) {
    return this.userService.updatePassword(data);
  }

  updateUser(data: any) {
    return this.userService.update(data);
  }

  forgotPassword(email: string) {
    return this.userService.forgotPassword(email);
  }

  resetPassword(data: any) {
    return this.userService.resetPassword(data);
  }
}
