import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';

import { Observable, map } from 'rxjs';

import { AniList } from '#domain/aniList/models/aniList.model';
import { AnimeStateService } from '#domain/anime/anime-state.service';
import { Memoize } from '#utilities/decorators/memoize';

@Component({
  standalone: true,
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonButton, CommonModule, IonContent, IonIcon, IonToolbar, IonButtons, IonHeader, IonBackButton]
})
export class SearchResultContainer {
  private readonly modalCtrl = inject(ModalController);
  private readonly animeStateService = inject(AnimeStateService);
  private readonly domSanitizer = inject(DomSanitizer);

  public close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  public confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

  @Memoize public get searchResult$(): Observable<AniList> {
    return this.animeStateService.state$.pipe(
      map(
        state =>
          ({
            ...state,
            description: new DOMParser().parseFromString(state.description, 'text/html').body.textContent as string
          }) satisfies AniList
      )
    );
  }
}
