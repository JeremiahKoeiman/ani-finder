import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonAvatar, IonContent, IonImg, IonItem, IonLabel, IonList, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'ani-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sheet.component.html',
  imports: [CommonModule, IonContent, IonModal, IonList, IonItem, IonAvatar, IonImg, IonLabel]
})
export class SheetComponent {}
