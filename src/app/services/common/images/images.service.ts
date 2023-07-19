import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor() {}

  binaryToBase64(binary: string): string {
    return 'data:image/jpeg;base64,' + binary;
  }

  base64ToBinary(base64: any) {
    return base64.split(',')[1];
  }

  fileToBase64(event: any) {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const data: any = reader.result;
        resolve(data as string);
      };
      reader.onerror = (error) => reject(error);
    });
  }
}
