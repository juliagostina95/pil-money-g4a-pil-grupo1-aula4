import { Directive } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLogo]'
})
export class LogoDirective {

  constructor(elementRef: ElementRef, private renderer2: Renderer2) {
    this.renderer2.setStyle(elementRef.nativeElement, 'width', '35px')
    this.renderer2.setStyle(elementRef.nativeElement, 'position', 'relative')
    this.renderer2.setStyle(elementRef.nativeElement, 'left', '15px')
    this.renderer2.setStyle(elementRef.nativeElement, 'bottom', '2px')

  }
}
