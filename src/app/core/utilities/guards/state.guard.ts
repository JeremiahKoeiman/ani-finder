import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable, map, merge } from 'rxjs';

import { AnimeStateService } from '#domain/anime/anime-state.service';

@Injectable({
  providedIn: 'root'
})
export class StateGuard implements CanActivate {
  private readonly router = inject(Router);
  private readonly animeState = inject(AnimeStateService);

  public canActivate(): Observable<boolean> {
    return merge(this.animeState.state$, this.animeState.clear$).pipe(
      map(data => {
        if (!data) {
          this.router.navigate(['']);
          return false;
        }

        return true;
      })
    );
  }
}
