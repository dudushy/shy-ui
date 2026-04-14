import * as i0 from '@angular/core';
import { HostBinding, Input, Component, forwardRef, EventEmitter, Output } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/platform-browser';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

class ButtonComponent {
    variant = 'primary';
    size = 'md';
    disabled = false;
    loading = false;
    fullWidth = false;
    get hostClass() {
        return `shy-button shy-button--${this.variant} shy-button--${this.size}${this.fullWidth ? ' shy-button--full' : ''}${this.disabled || this.loading ? ' shy-button--disabled' : ''}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.8", type: ButtonComponent, isStandalone: true, selector: "shy-button", inputs: { variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth" }, host: { properties: { "class": "this.hostClass" } }, ngImport: i0, template: "<button\n  [disabled]=\"disabled || loading\"\n  [attr.aria-busy]=\"loading || null\"\n>\n  @if (loading) {\n    <span class=\"shy-button__spinner\"></span>\n  }\n  <ng-content />\n</button>\n", styles: [":host{display:inline-flex}button{display:inline-flex;align-items:center;gap:.5rem;border:none;border-radius:var(--border-radius-md);font-weight:var(--font-weight-medium);transition:background-color var(--transition-fast),box-shadow var(--transition-fast),opacity var(--transition-fast);cursor:pointer;white-space:nowrap;width:100%;justify-content:center}:host(.shy-button--sm) button{padding:.375rem .75rem;font-size:var(--font-size-sm)}:host(.shy-button--md) button{padding:.5rem 1rem;font-size:var(--font-size-base)}:host(.shy-button--lg) button{padding:.75rem 1.5rem;font-size:var(--font-size-lg)}:host(.shy-button--primary) button{background-color:var(--color-primary);color:var(--color-white)}:host(.shy-button--primary) button:hover:not(:disabled){background-color:var(--color-primary-dark)}:host(.shy-button--secondary) button{background-color:var(--color-secondary);color:var(--color-white)}:host(.shy-button--secondary) button:hover:not(:disabled){background-color:var(--color-secondary-dark)}:host(.shy-button--outline) button{background-color:transparent;color:var(--color-primary);border:var(--border-width) solid var(--color-primary)}:host(.shy-button--outline) button:hover:not(:disabled){background-color:var(--color-primary);color:var(--color-white)}:host(.shy-button--ghost) button{background-color:transparent;color:var(--color-gray-700)}:host(.shy-button--ghost) button:hover:not(:disabled){background-color:var(--color-gray-100)}:host(.shy-button--danger) button{background-color:var(--color-danger);color:var(--color-white)}:host(.shy-button--danger) button:hover:not(:disabled){filter:brightness(.9)}:host(.shy-button--disabled) button{opacity:.6;cursor:not-allowed}:host(.shy-button--full){display:flex;width:100%}.shy-button__spinner{display:inline-block;width:1em;height:1em;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:shy-spin .7s linear infinite}@keyframes shy-spin{to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shy-button', standalone: true, imports: [CommonModule], template: "<button\n  [disabled]=\"disabled || loading\"\n  [attr.aria-busy]=\"loading || null\"\n>\n  @if (loading) {\n    <span class=\"shy-button__spinner\"></span>\n  }\n  <ng-content />\n</button>\n", styles: [":host{display:inline-flex}button{display:inline-flex;align-items:center;gap:.5rem;border:none;border-radius:var(--border-radius-md);font-weight:var(--font-weight-medium);transition:background-color var(--transition-fast),box-shadow var(--transition-fast),opacity var(--transition-fast);cursor:pointer;white-space:nowrap;width:100%;justify-content:center}:host(.shy-button--sm) button{padding:.375rem .75rem;font-size:var(--font-size-sm)}:host(.shy-button--md) button{padding:.5rem 1rem;font-size:var(--font-size-base)}:host(.shy-button--lg) button{padding:.75rem 1.5rem;font-size:var(--font-size-lg)}:host(.shy-button--primary) button{background-color:var(--color-primary);color:var(--color-white)}:host(.shy-button--primary) button:hover:not(:disabled){background-color:var(--color-primary-dark)}:host(.shy-button--secondary) button{background-color:var(--color-secondary);color:var(--color-white)}:host(.shy-button--secondary) button:hover:not(:disabled){background-color:var(--color-secondary-dark)}:host(.shy-button--outline) button{background-color:transparent;color:var(--color-primary);border:var(--border-width) solid var(--color-primary)}:host(.shy-button--outline) button:hover:not(:disabled){background-color:var(--color-primary);color:var(--color-white)}:host(.shy-button--ghost) button{background-color:transparent;color:var(--color-gray-700)}:host(.shy-button--ghost) button:hover:not(:disabled){background-color:var(--color-gray-100)}:host(.shy-button--danger) button{background-color:var(--color-danger);color:var(--color-white)}:host(.shy-button--danger) button:hover:not(:disabled){filter:brightness(.9)}:host(.shy-button--disabled) button{opacity:.6;cursor:not-allowed}:host(.shy-button--full){display:flex;width:100%}.shy-button__spinner{display:inline-block;width:1em;height:1em;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:shy-spin .7s linear infinite}@keyframes shy-spin{to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }], hostClass: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardComponent {
    elevated = false;
    padding = 'md';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.8", type: CardComponent, isStandalone: true, selector: "shy-card", inputs: { elevated: "elevated", padding: "padding" }, ngImport: i0, template: "<div [ngClass]=\"['shy-card', 'shy-card--padding-' + padding, elevated ? 'shy-card--elevated' : '']\">\n  <ng-content select=\"[card-header]\" />\n  <div class=\"shy-card__body\">\n    <ng-content />\n  </div>\n  <ng-content select=\"[card-footer]\" />\n</div>\n", styles: [".shy-card{background:var(--color-white);border:var(--border-width) solid var(--border-color);border-radius:var(--border-radius-lg);overflow:hidden}.shy-card--elevated{border:none;box-shadow:var(--shadow-md)}.shy-card--padding-none .shy-card__body{padding:0}.shy-card--padding-sm .shy-card__body{padding:var(--space-3)}.shy-card--padding-md .shy-card__body{padding:var(--space-6)}.shy-card--padding-lg .shy-card__body{padding:var(--space-8)}.shy-card__body{padding:var(--space-6)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shy-card', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"['shy-card', 'shy-card--padding-' + padding, elevated ? 'shy-card--elevated' : '']\">\n  <ng-content select=\"[card-header]\" />\n  <div class=\"shy-card__body\">\n    <ng-content />\n  </div>\n  <ng-content select=\"[card-footer]\" />\n</div>\n", styles: [".shy-card{background:var(--color-white);border:var(--border-width) solid var(--border-color);border-radius:var(--border-radius-lg);overflow:hidden}.shy-card--elevated{border:none;box-shadow:var(--shadow-md)}.shy-card--padding-none .shy-card__body{padding:0}.shy-card--padding-sm .shy-card__body{padding:var(--space-3)}.shy-card--padding-md .shy-card__body{padding:var(--space-6)}.shy-card--padding-lg .shy-card__body{padding:var(--space-8)}.shy-card__body{padding:var(--space-6)}\n"] }]
        }], propDecorators: { elevated: [{
                type: Input
            }], padding: [{
                type: Input
            }] } });

const ICONS = {
    'home': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    'settings': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93 4.93 19.07M12 2v2M12 20v2M2 12h2M20 12h2M6.34 6.34 4.93 4.93M19.07 19.07l-1.41-1.41M4.93 19.07 6.34 17.66M17.66 6.34l1.41-1.41"/></svg>`,
    'user': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    'search': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    'bell': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    'check': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    'x': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    'alert': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    'info': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    'plus': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    'minus': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    'edit': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    'trash': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    'download': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    'upload': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    'heart': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    'star': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    'menu': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    'chevron-right': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    'chevron-down': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    'mail': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    'lock': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    'eye': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    'help': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    'palette': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    'type': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
    'grid': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    'layers': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    'box': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
    'zap': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
};

class IconComponent {
    sanitizer;
    name;
    size = 'md';
    label;
    svgContent;
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnChanges() {
        const svg = ICONS[this.name] ?? ICONS['help'];
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: IconComponent, deps: [{ token: i1$1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.8", type: IconComponent, isStandalone: true, selector: "shy-icon", inputs: { name: "name", size: "size", label: "label" }, usesOnChanges: true, ngImport: i0, template: `<span class="shy-icon shy-icon--{{size}}" [innerHTML]="svgContent" [attr.aria-label]="label || null" [attr.role]="label ? 'img' : 'presentation'"></span>`, isInline: true, styles: [".shy-icon{display:inline-flex;align-items:center;justify-content:center;line-height:1}.shy-icon--xs{width:.75rem;height:.75rem}.shy-icon--sm{width:1rem;height:1rem}.shy-icon--md{width:1.25rem;height:1.25rem}.shy-icon--lg{width:1.5rem;height:1.5rem}.shy-icon--xl{width:2rem;height:2rem}.shy-icon svg{width:100%;height:100%}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shy-icon', standalone: true, template: `<span class="shy-icon shy-icon--{{size}}" [innerHTML]="svgContent" [attr.aria-label]="label || null" [attr.role]="label ? 'img' : 'presentation'"></span>`, styles: [".shy-icon{display:inline-flex;align-items:center;justify-content:center;line-height:1}.shy-icon--xs{width:.75rem;height:.75rem}.shy-icon--sm{width:1rem;height:1rem}.shy-icon--md{width:1.25rem;height:1.25rem}.shy-icon--lg{width:1.5rem;height:1.5rem}.shy-icon--xl{width:2rem;height:2rem}.shy-icon svg{width:100%;height:100%}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.DomSanitizer }], propDecorators: { name: [{
                type: Input,
                args: [{ required: true }]
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }] } });

class BadgeComponent {
    variant = 'primary';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.8", type: BadgeComponent, isStandalone: true, selector: "shy-badge", inputs: { variant: "variant" }, ngImport: i0, template: `<span class="shy-badge shy-badge--{{variant}}"><ng-content /></span>`, isInline: true, styles: [".shy-badge{display:inline-flex;align-items:center;padding:.125rem .5rem;border-radius:var(--border-radius-full);font-size:var(--font-size-xs);font-weight:var(--font-weight-semibold);line-height:1.5}.shy-badge--primary{background-color:#ede9fe;color:#5b21b6}.shy-badge--secondary{background-color:#fce7f3;color:#9d174d}.shy-badge--success{background-color:#dcfce7;color:#14532d}.shy-badge--warning{background-color:#fef9c3;color:#713f12}.shy-badge--danger{background-color:#fee2e2;color:#7f1d1d}.shy-badge--info{background-color:#dbeafe;color:#1e3a8a}.shy-badge--neutral{background-color:var(--color-gray-100);color:var(--color-gray-700)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shy-badge', standalone: true, imports: [CommonModule], template: `<span class="shy-badge shy-badge--{{variant}}"><ng-content /></span>`, styles: [".shy-badge{display:inline-flex;align-items:center;padding:.125rem .5rem;border-radius:var(--border-radius-full);font-size:var(--font-size-xs);font-weight:var(--font-weight-semibold);line-height:1.5}.shy-badge--primary{background-color:#ede9fe;color:#5b21b6}.shy-badge--secondary{background-color:#fce7f3;color:#9d174d}.shy-badge--success{background-color:#dcfce7;color:#14532d}.shy-badge--warning{background-color:#fef9c3;color:#713f12}.shy-badge--danger{background-color:#fee2e2;color:#7f1d1d}.shy-badge--info{background-color:#dbeafe;color:#1e3a8a}.shy-badge--neutral{background-color:var(--color-gray-100);color:var(--color-gray-700)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }] } });

class InputComponent {
    label = '';
    placeholder = '';
    type = 'text';
    hint = '';
    error = '';
    disabled = false;
    value = '';
    onChange = (_) => { };
    onTouched = () => { };
    writeValue(value) { this.value = value || ''; }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(disabled) { this.disabled = disabled; }
    onInput(event) {
        this.value = event.target.value;
        this.onChange(this.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.8", type: InputComponent, isStandalone: true, selector: "shy-input", inputs: { label: "label", placeholder: "placeholder", type: "type", hint: "hint", error: "error", disabled: "disabled" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true }], ngImport: i0, template: "<div class=\"shy-input\" [class.shy-input--error]=\"error\" [class.shy-input--disabled]=\"disabled\">\n  @if (label) {\n    <label class=\"shy-input__label\">{{ label }}</label>\n  }\n  <input\n    class=\"shy-input__field\"\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [value]=\"value\"\n    (input)=\"onInput($event)\"\n    (blur)=\"onTouched()\"\n  />\n  @if (error) {\n    <span class=\"shy-input__message shy-input__message--error\">{{ error }}</span>\n  } @else if (hint) {\n    <span class=\"shy-input__message\">{{ hint }}</span>\n  }\n</div>\n", styles: [".shy-input{display:flex;flex-direction:column;gap:.375rem}.shy-input__label{font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);color:var(--color-gray-700)}.shy-input__field{padding:.5rem .75rem;border:var(--border-width) solid var(--border-color);border-radius:var(--border-radius-md);font-size:var(--font-size-base);color:var(--color-gray-800);background-color:var(--color-white);transition:border-color var(--transition-fast),box-shadow var(--transition-fast);outline:none}.shy-input__field:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px #6366f126}.shy-input__field:disabled{background-color:var(--color-gray-100);color:var(--color-gray-400);cursor:not-allowed}.shy-input--error .shy-input__field{border-color:var(--color-danger)}.shy-input--error .shy-input__field:focus{box-shadow:0 0 0 3px #ef444426}.shy-input__message{font-size:var(--font-size-xs);color:var(--color-gray-500)}.shy-input__message--error{color:var(--color-danger)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shy-input', standalone: true, imports: [CommonModule, FormsModule], providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true }], template: "<div class=\"shy-input\" [class.shy-input--error]=\"error\" [class.shy-input--disabled]=\"disabled\">\n  @if (label) {\n    <label class=\"shy-input__label\">{{ label }}</label>\n  }\n  <input\n    class=\"shy-input__field\"\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [value]=\"value\"\n    (input)=\"onInput($event)\"\n    (blur)=\"onTouched()\"\n  />\n  @if (error) {\n    <span class=\"shy-input__message shy-input__message--error\">{{ error }}</span>\n  } @else if (hint) {\n    <span class=\"shy-input__message\">{{ hint }}</span>\n  }\n</div>\n", styles: [".shy-input{display:flex;flex-direction:column;gap:.375rem}.shy-input__label{font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);color:var(--color-gray-700)}.shy-input__field{padding:.5rem .75rem;border:var(--border-width) solid var(--border-color);border-radius:var(--border-radius-md);font-size:var(--font-size-base);color:var(--color-gray-800);background-color:var(--color-white);transition:border-color var(--transition-fast),box-shadow var(--transition-fast);outline:none}.shy-input__field:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px #6366f126}.shy-input__field:disabled{background-color:var(--color-gray-100);color:var(--color-gray-400);cursor:not-allowed}.shy-input--error .shy-input__field{border-color:var(--color-danger)}.shy-input--error .shy-input__field:focus{box-shadow:0 0 0 3px #ef444426}.shy-input__message{font-size:var(--font-size-xs);color:var(--color-gray-500)}.shy-input__message--error{color:var(--color-danger)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], hint: [{
                type: Input
            }], error: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class ModalComponent {
    open = false;
    title = '';
    size = 'md';
    closed = new EventEmitter();
    close() {
        this.closed.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.8", type: ModalComponent, isStandalone: true, selector: "shy-modal", inputs: { open: "open", title: "title", size: "size" }, outputs: { closed: "closed" }, ngImport: i0, template: "@if (open) {\n  <div class=\"shy-modal-overlay\" (click)=\"close()\">\n    <div class=\"shy-modal shy-modal--{{size}}\" (click)=\"$event.stopPropagation()\">\n      <div class=\"shy-modal__header\">\n        <h2 class=\"shy-modal__title\">{{ title }}</h2>\n        <button class=\"shy-modal__close\" (click)=\"close()\" aria-label=\"Close\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>\n        </button>\n      </div>\n      <div class=\"shy-modal__body\">\n        <ng-content />\n      </div>\n      <ng-content select=\"[modal-footer]\" />\n    </div>\n  </div>\n}\n", styles: [".shy-modal-overlay{position:fixed;inset:0;background-color:#00000080;display:flex;align-items:center;justify-content:center;z-index:var(--z-index-modal);padding:var(--space-4)}.shy-modal{background:var(--color-white);border-radius:var(--border-radius-xl);box-shadow:var(--shadow-xl);width:100%;max-height:90vh;overflow-y:auto;display:flex;flex-direction:column}.shy-modal--sm{max-width:24rem}.shy-modal--md{max-width:32rem}.shy-modal--lg{max-width:48rem}.shy-modal__header{display:flex;align-items:center;justify-content:space-between;padding:var(--space-6);border-bottom:var(--border-width) solid var(--border-color)}.shy-modal__title{font-size:var(--font-size-lg);font-weight:var(--font-weight-semibold);color:var(--color-gray-900);margin:0}.shy-modal__close{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border:none;background:transparent;color:var(--color-gray-500);border-radius:var(--border-radius-md);cursor:pointer;transition:background-color var(--transition-fast),color var(--transition-fast)}.shy-modal__close:hover{background-color:var(--color-gray-100);color:var(--color-gray-700)}.shy-modal__close svg{width:1.25rem;height:1.25rem}.shy-modal__body{padding:var(--space-6);flex:1}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shy-modal', standalone: true, imports: [CommonModule], template: "@if (open) {\n  <div class=\"shy-modal-overlay\" (click)=\"close()\">\n    <div class=\"shy-modal shy-modal--{{size}}\" (click)=\"$event.stopPropagation()\">\n      <div class=\"shy-modal__header\">\n        <h2 class=\"shy-modal__title\">{{ title }}</h2>\n        <button class=\"shy-modal__close\" (click)=\"close()\" aria-label=\"Close\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>\n        </button>\n      </div>\n      <div class=\"shy-modal__body\">\n        <ng-content />\n      </div>\n      <ng-content select=\"[modal-footer]\" />\n    </div>\n  </div>\n}\n", styles: [".shy-modal-overlay{position:fixed;inset:0;background-color:#00000080;display:flex;align-items:center;justify-content:center;z-index:var(--z-index-modal);padding:var(--space-4)}.shy-modal{background:var(--color-white);border-radius:var(--border-radius-xl);box-shadow:var(--shadow-xl);width:100%;max-height:90vh;overflow-y:auto;display:flex;flex-direction:column}.shy-modal--sm{max-width:24rem}.shy-modal--md{max-width:32rem}.shy-modal--lg{max-width:48rem}.shy-modal__header{display:flex;align-items:center;justify-content:space-between;padding:var(--space-6);border-bottom:var(--border-width) solid var(--border-color)}.shy-modal__title{font-size:var(--font-size-lg);font-weight:var(--font-weight-semibold);color:var(--color-gray-900);margin:0}.shy-modal__close{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border:none;background:transparent;color:var(--color-gray-500);border-radius:var(--border-radius-md);cursor:pointer;transition:background-color var(--transition-fast),color var(--transition-fast)}.shy-modal__close:hover{background-color:var(--color-gray-100);color:var(--color-gray-700)}.shy-modal__close svg{width:1.25rem;height:1.25rem}.shy-modal__body{padding:var(--space-6);flex:1}\n"] }]
        }], propDecorators: { open: [{
                type: Input
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });

class SpinnerComponent {
    size = 'md';
    color = 'primary';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.8", type: SpinnerComponent, isStandalone: true, selector: "shy-spinner", inputs: { size: "size", color: "color" }, ngImport: i0, template: `<div class="shy-spinner shy-spinner--{{size}} shy-spinner--{{color}}" role="status" aria-label="Loading"></div>`, isInline: true, styles: [".shy-spinner{border-radius:50%;border-style:solid;animation:shy-spin .7s linear infinite}.shy-spinner--sm{width:1rem;height:1rem;border-width:2px}.shy-spinner--md{width:1.5rem;height:1.5rem;border-width:2px}.shy-spinner--lg{width:2.5rem;height:2.5rem;border-width:3px}.shy-spinner--primary{border-color:var(--color-primary-light);border-top-color:var(--color-primary)}.shy-spinner--white{border-color:#ffffff4d;border-top-color:#fff}.shy-spinner--gray{border-color:var(--color-gray-200);border-top-color:var(--color-gray-500)}@keyframes shy-spin{to{transform:rotate(360deg)}}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shy-spinner', standalone: true, template: `<div class="shy-spinner shy-spinner--{{size}} shy-spinner--{{color}}" role="status" aria-label="Loading"></div>`, styles: [".shy-spinner{border-radius:50%;border-style:solid;animation:shy-spin .7s linear infinite}.shy-spinner--sm{width:1rem;height:1rem;border-width:2px}.shy-spinner--md{width:1.5rem;height:1.5rem;border-width:2px}.shy-spinner--lg{width:2.5rem;height:2.5rem;border-width:3px}.shy-spinner--primary{border-color:var(--color-primary-light);border-top-color:var(--color-primary)}.shy-spinner--white{border-color:#ffffff4d;border-top-color:#fff}.shy-spinner--gray{border-color:var(--color-gray-200);border-top-color:var(--color-gray-500)}@keyframes shy-spin{to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }] } });

class EmptyStateComponent {
    icon = 'box';
    title = 'No data found';
    description = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: EmptyStateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.8", type: EmptyStateComponent, isStandalone: true, selector: "shy-empty-state", inputs: { icon: "icon", title: "title", description: "description" }, ngImport: i0, template: "<div class=\"shy-empty-state\">\n  <shy-icon [name]=\"icon\" size=\"xl\" class=\"shy-empty-state__icon\" />\n  <h3 class=\"shy-empty-state__title\">{{ title }}</h3>\n  @if (description) {\n    <p class=\"shy-empty-state__description\">{{ description }}</p>\n  }\n  <ng-content />\n</div>\n", styles: [".shy-empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--space-16) var(--space-8);text-align:center;gap:var(--space-3)}.shy-empty-state__icon{color:var(--color-gray-300);margin-bottom:var(--space-2)}.shy-empty-state__title{font-size:var(--font-size-lg);font-weight:var(--font-weight-semibold);color:var(--color-gray-700);margin:0}.shy-empty-state__description{font-size:var(--font-size-sm);color:var(--color-gray-500);margin:0;max-width:28rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: IconComponent, selector: "shy-icon", inputs: ["name", "size", "label"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.8", ngImport: i0, type: EmptyStateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shy-empty-state', standalone: true, imports: [CommonModule, IconComponent], template: "<div class=\"shy-empty-state\">\n  <shy-icon [name]=\"icon\" size=\"xl\" class=\"shy-empty-state__icon\" />\n  <h3 class=\"shy-empty-state__title\">{{ title }}</h3>\n  @if (description) {\n    <p class=\"shy-empty-state__description\">{{ description }}</p>\n  }\n  <ng-content />\n</div>\n", styles: [".shy-empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--space-16) var(--space-8);text-align:center;gap:var(--space-3)}.shy-empty-state__icon{color:var(--color-gray-300);margin-bottom:var(--space-2)}.shy-empty-state__title{font-size:var(--font-size-lg);font-weight:var(--font-weight-semibold);color:var(--color-gray-700);margin:0}.shy-empty-state__description{font-size:var(--font-size-sm);color:var(--color-gray-500);margin:0;max-width:28rem}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeComponent, ButtonComponent, CardComponent, EmptyStateComponent, ICONS, IconComponent, InputComponent, ModalComponent, SpinnerComponent };
//# sourceMappingURL=shy-ui.mjs.map
