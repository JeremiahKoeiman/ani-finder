import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, filter, shareReplay } from 'rxjs';

import { AniList } from '#domain/aniList/models/aniList.model';
import { Memoize } from '#utilities/decorators/memoize';
import { notUndefined } from '#utilities/predicates/not-null-undefined';

@Injectable({
  providedIn: 'root'
})
export class AnimeStateService {
  private readonly aniListStateSubject = new BehaviorSubject<AniList | undefined>(undefined);

  public setState(data: AniList): void {
    this.aniListStateSubject.next(data);
  }

  public clearState(): void {
    this.aniListStateSubject.next(undefined);
  }

  @Memoize public get state$(): Observable<AniList> {
    return this.aniListStateSubject.pipe(filter(notUndefined), shareReplay(1));
  }

  @Memoize public get clear$(): Observable<undefined> {
    return this.aniListStateSubject.pipe(
      filter((data: AniList | undefined) => !notUndefined(data)),
      shareReplay(1)
    );
  }
}
