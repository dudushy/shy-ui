import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icons';

@Component({
  selector: 'shy-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  host: {
    '[style.--hover-delay]': 'hoverFillDelay + "ms"',
  },
})
export class IconComponent implements AfterViewInit {
  @Input() hoverFill = false;
  @Input() hoverFillDelay = 0;

  @ViewChild('iconName') private iconNameRef!: ElementRef<HTMLElement>;

  svgContent?: SafeHtml;
  svgHoverContent?: SafeHtml;
  isHovered = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    const name = this.iconNameRef.nativeElement.textContent?.trim() ?? '';
    const svg = ICONS[name] ?? ICONS['help'];
    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);

    if (this.hoverFill) {
      const filledSvg = ICONS[`${name}-filled`];
      if (filledSvg) {
        this.svgHoverContent = this.sanitizer.bypassSecurityTrustHtml(filledSvg);
      }
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.hoverFill && this.svgHoverContent) {
      this.isHovered = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isHovered = false;
  }
}
