import { Directive  , ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {


  constructor(private el: ElementRef) { }

  @Input('appTestDirective') highlightColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    
  }
  
}
