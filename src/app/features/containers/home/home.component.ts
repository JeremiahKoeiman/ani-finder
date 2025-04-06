import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';
import { IonButton, IonContent, IonIcon, ModalController } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { closeCircle, search } from 'ionicons/icons';
import { BehaviorSubject, Observable, distinctUntilChanged, shareReplay } from 'rxjs';

import { AniList } from '#domain/aniList/models/aniList.model';
import { AnimeStateService } from '#domain/anime/anime-state.service';
import { AnimeService } from '#domain/anime/anime.service';
import { base64toBlob } from '#utilities/converters/base64-to-blob';
import { Memoize } from '#utilities/decorators/memoize';

@Component({
  standalone: true,
  selector: 'home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, IonButton, IonIcon, IonContent]
})
export class HomeContainer {
  public exampleData = {
    id: 146984,
    description:
      'The fate of the world hangs in the balance as Eren unleashes the ultimate power of the Titans. With a burning determination to eliminate all who threaten Eldia, he leads an unstoppable army of Colossal Titans towards Marley. Now a motley crew of his former comrades and enemies scramble to halt his deadly mission, the only question is, can they stop him?<br>\n<br>\n(Source: Crunchyroll)',
    title: {
      english: 'Attack on Titan Final Season THE FINAL CHAPTERS Special 1',
      native: '進撃の巨人 The Final Season完結編 前編',
      romaji: 'Shingeki no Kyojin: The Final Season - Kanketsu-hen Zenpen'
    },
    coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146984-GXrLeT6vQqyP.jpg',
    bannerImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/146984-yAkTtW2AExVj.jpg',
    url: 'https://anilist.co/anime/146984'
  } satisfies AniList;

  private readonly modalCtrl = inject(ModalController);
  private readonly router = inject(Router);
  private readonly animeService = inject(AnimeService);
  private readonly animeStateService = inject(AnimeStateService);

  private readonly searchResultModalSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    addIcons({ search, closeCircle });
  }

  ngOnInit(): void {
    // this.searchResultModalIsOpen$.subscribe(res => console.log('searchResultModalIsOpen$', res));
    this.animeStateService.setState(this.exampleData);
    this.router.navigate(['/search-result']);
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

  // public async openModal(): Promise<void> {
  //   this.searchResultModalSubject.next(true);

  //   const modal = await this.modalCtrl.create({
  //     component: SearchResultContainer,
  //     showBackdrop: false,
  //     backdropDismiss: false,
  //     keyboardClose: false,
  //     componentProps: {
  //       searchResult: this.exampleData
  //     }
  //   });

  //   modal.present();

  //   modal.onDidDismiss().then(() => {
  //     this.searchResultModalSubject.next(false);
  //   });
  // }

  @Memoize public get searchResultModalIsOpen$(): Observable<boolean> {
    return this.searchResultModalSubject.pipe(distinctUntilChanged(), shareReplay(1));
  }
}
