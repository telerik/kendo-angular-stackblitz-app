import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class='content'>
      <header-component></header-component>
      <theme-chooser-component></theme-chooser-component>
      <router-outlet></router-outlet>
    </div>
    <footer-component></footer-component>
  `
})
export class AppComponent {}
