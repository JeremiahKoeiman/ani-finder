import { Component, inject } from '@angular/core';
import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';
import { IonApp, IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons';

import { AnimeService } from '#domain/anime/anime.service';
import { base64toBlob } from '#utilities/converters/base64-to-blob';

import { SheetComponent } from './features/components/sheet/sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonButton, IonIcon, SheetComponent]
})
export class AppComponent {
  private readonly animeService = inject(AnimeService);

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

    const contentType = `image/${photo.format}`;
    const image = base64toBlob(photo.base64String as string, contentType);

    console.log('BLOB', image);

    this.animeService.findAnime(image, contentType).subscribe(res => console.log('openCameraOrPickImage', res));

    // this.animeService.find(image, contentType).subscribe(res => console.log('openCameraOrPickImage', res));
  }
}
