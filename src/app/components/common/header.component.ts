import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  template: `
    <div class='container-fluid'>
      <div class='d-flex border-bottom py-2'>
        <div class='d-flex'>
          <div class='project-name d-flex'>
            <span class='mx-0 my-auto logo'>
              Kendo Angular
            </span>
          </div>
        </div>
        <div class='d-flex ml-auto nav'>
          <kendo-menu (select)='onSelect($event)' [items]='items'>
            <ng-template
              kendoMenuItemLinkTemplate
              let-item='item'
              let-index='index'
            >
              <a [kendoMenuItemLink]='index' [routerLink]='item.path'>
                {{ item.text }}
              </a>
            </ng-template>
          </kendo-menu>
        </div>
      </div>
    </div>
  `
})
export class HeaderComponent {
  public items = [
    { text: 'Home', path: '' },
    { text: 'Grid', path: 'grid' },
    { text: 'Chart', path: 'chart' },
    { text: 'Forms', path: 'forms' }
  ];

  constructor(private router: Router) {}

  public onSelect({ item }): void {
    this.router.navigate([item.path]);
  }
}
