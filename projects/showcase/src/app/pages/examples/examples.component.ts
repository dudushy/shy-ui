import { Component } from '@angular/core';
import { ButtonComponent, CardComponent, BadgeComponent, IconComponent, SpinnerComponent } from 'shy-ui';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [ButtonComponent, CardComponent, BadgeComponent, IconComponent, SpinnerComponent],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss'
})
export class ExamplesComponent {
  loading = false;

  simulate(): void {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }
}
