import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  secureLS = new SecureLS({ encodingType: 'aes' });
  constructor() {}

  saveData(key: string, value: any) {
    this.secureLS.set(key, value);
  }

  getData(key: string) {
    return this.secureLS.get(key);
  }

  removeData(key: string) {
    this.secureLS.remove(key);
  }
}
