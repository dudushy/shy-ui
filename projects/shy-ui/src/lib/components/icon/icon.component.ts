import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icons';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'shy-icon',
  standalone: true,
  template: `<span class="shy-icon shy-icon--{{size}}" [innerHTML]="svgContent" [attr.aria-label]="label || null" [attr.role]="label ? 'img' : 'presentation'"></span>`,
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnChanges {
  @Input({ required: true }) name!: string;
  @Input() size: IconSize = 'md';
  @Input() label?: string;

  svgContent!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    const svg = ICONS[this.name] ?? ICONS['help'];
    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
