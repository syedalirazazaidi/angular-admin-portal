import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {  heroLockOpen } from '@ng-icons/heroicons/outline';
@Component({
  selector: 'app-childregistration',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ heroLockOpen })],

  templateUrl: './childregistration.component.html',
  styleUrl: './childregistration.component.css',
})
export class ChildregistrationComponent {
  childId: string = '';
  generatePassword(): void {
    this.childId = Array(12)
      .fill(null)
      .map(() =>
        Math.random()
          .toString(36)
          .charAt(Math.random() < 0.5 ? 2 : 9)
      )
      .join('');
  }
}
