import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, catchError, filter, map, throwError } from 'rxjs';

import { ApiResultDto as TraceMoeApiResultDto } from '#domain/trace-moe/api.dto.model';
import { environment } from '#environment';
import { notUndefined } from '#utilities/predicates/not-null-undefined';

import { mapApiResultToTraceMoe } from './mappers/api-result-to-trace-moe.mapper';
import { TraceMoe } from './models/trace-moe.model';

@Injectable({ providedIn: 'root' })
export class AnimeService {
  private readonly httpClient = inject(HttpClient);

  public search(image: Blob, contentType: string): Observable<TraceMoe> {
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
        map(dto => mapApiResultToTraceMoe(dto.result)),
        catchError(err => throwError(() => err)) //TODO: display error message
      );
  }
}
