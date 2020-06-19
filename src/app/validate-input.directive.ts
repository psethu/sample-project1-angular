import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidateInput]'
})
export class ValidateInputDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {  
    let value:number = parseInt(this.el.nativeElement.value) || 0; // when value is empty string: Nan || 0 evaluates to 0
    console.log(value);
      if (value <= 0)
        this.highlight('#e6e600');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
  }
}