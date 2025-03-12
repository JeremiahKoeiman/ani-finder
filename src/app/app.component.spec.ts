import { provideRouter } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    overrideComponents: [],
    providers: [provideRouter([])],
    imports: []
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should exists', () => {
    expect(spectator.component).toBeTruthy();
  });
});
