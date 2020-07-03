import { Component } from '@angular/core';
import PalleteIcon from '../../../assets/pallete.svg';

@Component({
  selector: 'theme-chooser-component',
  template: `
    <div class='container-fluid'>
      <div class='d-flex my-2'>
        <div class='ml-auto d-flex '>
          <div class='d-flex mr-1 mr-lg-3 change-theme'>
            <span
              kendoTooltip
              filter="span" 
              position="left"
              class='d-block my-auto'
              title='Тhis will re-render the Kendo UI for Angular components with the chosen theme.'
              >Change theme</span
            >
          </div>
          <kendo-dropdownlist
            (valueChange)='changeTheme($event)'
            textField='name'
            valueField='href'
            [(value)]='selectedTheme'
            [data]='data'
          >
          <ng-template kendoDropDownListValueTemplate let-dataItem >
            <svg-component class='pallete' [svg]='palleteIcon'></svg-component>{{dataItem.name}}
          </ng-template>
          </kendo-dropdownlist>
        </div>
      </div>
    </div>
  `
})
export class ThemeChooserComponent {
  private palleteIcon = PalleteIcon;
  public data = [
    {
      href: 'https://unpkg.com/@progress/kendo-theme-default/dist/all.css',
      name: 'Default'
    },
    {
      href: 'https://unpkg.com/@progress/kendo-theme-bootstrap/dist/all.css',
      name: 'Bootstrap'
    },
    {
      href: 'https://unpkg.com/@progress/kendo-theme-material/dist/all.css',
      name: 'Material'
    }
  ];
  public selectedTheme = this.data[0];

  public changeTheme(theme) {
    document.getElementById('theme')['href'] = theme.href;
  }
}
