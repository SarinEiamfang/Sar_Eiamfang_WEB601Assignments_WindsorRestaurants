import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})

export class HoverAffectDirective {
  
    @Input() affectType: 'underline' | 'bold' = 'underline';
  
    constructor(private el: ElementRef, private renderer: Renderer2) { }
    
    @HostListener('mouseenter') onMouseEnter() {
      this.applyEffect();
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.removeEffect();
    }
  
    private applyEffect() {
      switch (this.affectType) {
        case 'underline':
          this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
          break;
        case 'bold':
          this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
          break;
      }
    }
  
    private removeEffect() {
      switch (this.affectType) {
        case 'underline':
          this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
          break;
        case 'bold':
          this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
          break;
      }
    }
  }


