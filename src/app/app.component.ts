import { Component } from '@angular/core';
import { IonApp, IonButton, IonContent, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonButton, IonIcon, IonContent]
})
export class AppComponent {
  constructor() {
    addIcons({ search });
  }
}
