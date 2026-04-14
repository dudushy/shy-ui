import { Component, Input } from '@angular/core';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'shy-spinner',
  standalone: true,
  template: `<div class="shy-spinner shy-spinner--{{size}} shy-spinner--{{color}}" role="status" aria-label="Loading"></div>`,
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() color: 'primary' | 'white' | 'gray' = 'primary';
}
