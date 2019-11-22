import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public projectName = 'Kendo UI for Angular';
    public items: any[] = [{ text: 'Home' }, { text: 'Grid' }, { text: 'Chart' }, { text: 'Forms' }];
    public themes = [{
        href: 'https://unpkg.com/@progress/kendo-theme-default/dist/all.css',
        name: 'Default'
    }, {
        href: 'https://unpkg.com/@progress/kendo-theme-bootstrap/dist/all.css',
        name: 'Bootstrap'
    }, {
        href: 'https://unpkg.com/@progress/kendo-theme-material/dist/all.css',
        name: 'Material'
    }];
    public selectedTheme = this.themes[0].href;
    public changeTheme(href) {
        document.getElementById('theme')['href'] = href;
    }
}



