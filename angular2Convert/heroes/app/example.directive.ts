import {Directive, Input} from '@angular/core';

import{TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({selector: '[exAmple]'})
export class AmpleDirective{

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ){}

    @Input() set exAmple(condition: boolean){
        if(!condition){
            this.viewContainer.createEmbeddedView(this.templateRef);
        }else{
            this.viewContainer.clear();
        }
    }
}