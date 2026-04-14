import * as i0 from '@angular/core';
import { OnChanges, EventEmitter } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ControlValueAccessor } from '@angular/forms';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
declare class ButtonComponent {
    variant: ButtonVariant;
    size: ButtonSize;
    disabled: boolean;
    loading: boolean;
    fullWidth: boolean;
    get hostClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "shy-button", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class CardComponent {
    elevated: boolean;
    padding: 'none' | 'sm' | 'md' | 'lg';
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "shy-card", never, { "elevated": { "alias": "elevated"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; }, {}, never, ["[card-header]", "*", "[card-footer]"], true, never>;
}

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
declare class IconComponent implements OnChanges {
    private sanitizer;
    name: string;
    size: IconSize;
    label?: string;
    svgContent: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "shy-icon", never, { "name": { "alias": "name"; "required": true; }; "size": { "alias": "size"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, never, true, never>;
}

declare const ICONS: Record<string, string>;

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
declare class BadgeComponent {
    variant: BadgeVariant;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeComponent, "shy-badge", never, { "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class InputComponent implements ControlValueAccessor {
    label: string;
    placeholder: string;
    type: string;
    hint: string;
    error: string;
    disabled: boolean;
    value: string;
    onChange: (_: string) => void;
    onTouched: () => void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    onInput(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "shy-input", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "type": { "alias": "type"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "error": { "alias": "error"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class ModalComponent {
    open: boolean;
    title: string;
    size: 'sm' | 'md' | 'lg';
    closed: EventEmitter<void>;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "shy-modal", never, { "open": { "alias": "open"; "required": false; }; "title": { "alias": "title"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "closed": "closed"; }, never, ["*", "[modal-footer]"], true, never>;
}

type SpinnerSize = 'sm' | 'md' | 'lg';
declare class SpinnerComponent {
    size: SpinnerSize;
    color: 'primary' | 'white' | 'gray';
    static ɵfac: i0.ɵɵFactoryDeclaration<SpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpinnerComponent, "shy-spinner", never, { "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, true, never>;
}

declare class EmptyStateComponent {
    icon: string;
    title: string;
    description: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyStateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptyStateComponent, "shy-empty-state", never, { "icon": { "alias": "icon"; "required": false; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; }, {}, never, ["*"], true, never>;
}

export { BadgeComponent, ButtonComponent, CardComponent, EmptyStateComponent, ICONS, IconComponent, InputComponent, ModalComponent, SpinnerComponent };
export type { BadgeVariant, ButtonSize, ButtonVariant, IconSize, SpinnerSize };
