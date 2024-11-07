import { computed, Directive, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[while]',
    standalone: true
})
export class WhileDirective {
    condition = input<boolean>(false);

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) {
        computed(() => {
            if (this.condition()) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        });
    }
}