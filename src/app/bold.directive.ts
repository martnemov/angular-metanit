import {Directive, HostBinding, HostListener, input, Signal} from '@angular/core';

@Directive({
    selector: '[bold]',
    standalone: true
})
export class BoldDirective {
    selectedSize = input<string>('18px');
    defaultSize = input<string>('12px');

    private fontWeight = "normal";
    private fontSize: Signal<string>;

    constructor() {
        this.fontSize = this.defaultSize;
    }

    @HostBinding("style.fontSize") get getFontSize() {
        return this.fontSize();
    }

    @HostBinding("style.fontWeight") get getFontWeight() {
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor() {
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight = "bold";
        this.fontSize = this.selectedSize;
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    }
}
