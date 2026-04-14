import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'shy-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;

  @HostBinding('class') get hostClass() {
    return `shy-button shy-button--${this.variant} shy-button--${this.size}${this.fullWidth ? ' shy-button--full' : ''}${this.disabled || this.loading ? ' shy-button--disabled' : ''}`;
  }
}
