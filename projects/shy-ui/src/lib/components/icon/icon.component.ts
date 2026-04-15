import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icons';

@Component({
  selector: 'shy-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent implements OnChanges {
  @Input({ required: true }) name!: string;

  svgContent!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    const svg = ICONS[this.name] ?? ICONS['help'];
    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
