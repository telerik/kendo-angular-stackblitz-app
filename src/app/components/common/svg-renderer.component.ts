import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'svg-component',
  template: `
    <span [innerHTML]='svgAsHTML'></span>
  `
})
export class SVGComponent {
  @Input() svg;
  private svgAsHTML: SafeHtml;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.svgAsHTML = this.sanitizer.bypassSecurityTrustHtml(this.svg);
  }
}
