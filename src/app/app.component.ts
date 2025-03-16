import { Component } from '@angular/core';
import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';
import { IonApp, IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons';

import { base64toBlob } from '#utilities/converters/base64-to-blob';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonButton, IonIcon, IonContent]
})
export class AppComponent {
  constructor() {
    addIcons({ search });
  }

  public async openCameraOrPickImage(): Promise<void> {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      direction: CameraDirection.Rear,
      quality: 100,
      webUseInput: true
    });

    console.log('BLOB', base64toBlob(photo.base64String as string, `image/${photo.format}`));
  }
}
