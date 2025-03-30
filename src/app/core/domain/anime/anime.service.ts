import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, catchError, filter, map, switchMap, tap, throwError } from 'rxjs';

import { mapAniListDtoToAniList } from '#domain/aniList/mappers/aniList.mapper';
import { AniListDto } from '#domain/aniList/models/aniList.dto.model';
import { AniList } from '#domain/aniList/models/aniList.model';
import AnimeMediaQuery from '#domain/aniList/queries/AnimeMediaQuery';
import { ApiResultDto as TraceMoeApiResultDto } from '#domain/trace-moe/models/trace-moe.dto.model';
import { environment } from '#environment';
import { notUndefined } from '#utilities/predicates/not-null-undefined';

import { mapTraceMoeApiResultToTraceMoe } from '../trace-moe/mappers/api-result-to-trace-moe.mapper';
import { TraceMoe } from '../trace-moe/models/trace-moe.model';

import { AnimeStateService } from './anime-state.service';

@Injectable({ providedIn: 'root' })
export class AnimeService {
  private readonly httpClient = inject(HttpClient);
  private readonly animeStateService = inject(AnimeStateService);

  public findAnime(image: Blob, contentType: string): Observable<AniList> {
    return this.findAnimeOrMangaBasedOnImage(image, contentType).pipe(
      switchMap(data => this.fetchAnilistAnimeData(data.id)),
      tap((anime: AniList) => this.animeStateService.setState(anime))
    );
  }

  private findAnimeOrMangaBasedOnImage(image: Blob, contentType: string): Observable<TraceMoe> {
    return this.httpClient
      .post<TraceMoeApiResultDto>(`${environment.traceMoe}/search`, image, {
        headers: new HttpHeaders({
          'Content-type': contentType
        }),
        params: {
          cutBorders: true,
          anilistInfo: true
        }
      })
      .pipe(
        filter(notUndefined),
        map(dto => mapTraceMoeApiResultToTraceMoe(dto.result)),
        catchError(err => throwError(() => err)) //TODO: display error message
      );
  }

  private fetchAnilistAnimeData(id: TraceMoe['id']): Observable<AniList> {
    return this.httpClient
      .post<AniListDto>(
        environment.aniList,
        {
          query: AnimeMediaQuery,
          variables: { id }
        },
        {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            Accept: 'application/json'
          })
        }
      )
      .pipe(
        catchError(err => throwError(() => err)), //TODO: display error message
        map(dto => mapAniListDtoToAniList(dto.data))
      );
  }
}
