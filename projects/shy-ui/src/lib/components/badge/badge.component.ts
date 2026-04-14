import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

@Component({
  selector: 'shy-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="shy-badge shy-badge--{{variant}}"><ng-content /></span>`,
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
}
