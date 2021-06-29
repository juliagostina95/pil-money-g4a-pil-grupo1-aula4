import { Renderer2, ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})

export class HeaderDirective {




  constructor(elementRef: ElementRef, private renderer2: Renderer2) {

        this.renderer2.setStyle(elementRef.nativeElement, 'color', 'white')
        this.renderer2.setStyle(elementRef.nativeElement, 'margin', '25px')
        this.renderer2.setStyle(elementRef.nativeElement, 'cursor', 'pointer')
        this.renderer2.setStyle(elementRef.nativeElement, 'font-size', '30px')
        this.renderer2.setStyle(elementRef.nativeElement, 'text-decoration', 'none')
        this.renderer2.setStyle(elementRef.nativeElement, 'padding-right', '22px')



  }





}
