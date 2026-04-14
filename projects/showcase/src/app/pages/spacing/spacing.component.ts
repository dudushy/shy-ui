import { Component } from '@angular/core';

@Component({
  selector: 'app-spacing',
  standalone: true,
  templateUrl: './spacing.component.html',
  styleUrl: './spacing.component.scss'
})
export class SpacingComponent {
  spacings = [
    { name: 'space-1', value: '0.25rem', px: '4px' },
    { name: 'space-2', value: '0.5rem', px: '8px' },
    { name: 'space-3', value: '0.75rem', px: '12px' },
    { name: 'space-4', value: '1rem', px: '16px' },
    { name: 'space-5', value: '1.25rem', px: '20px' },
    { name: 'space-6', value: '1.5rem', px: '24px' },
    { name: 'space-8', value: '2rem', px: '32px' },
    { name: 'space-10', value: '2.5rem', px: '40px' },
    { name: 'space-12', value: '3rem', px: '48px' },
    { name: 'space-16', value: '4rem', px: '64px' },
  ];
}
