import { Component } from '@angular/core';
import Kendoka from '../../../assets/kendoka.svg';
import ComponentsIcon from '../../../assets/components.svg';
import StylesIcon from '../../../assets/styles.svg';
import BlogsIcon from '../../../assets/blogs.svg';
import TutorialsIcon from '../../../assets/tutorials.svg';


@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    private componentsIcon = ComponentsIcon;
    private kendoka = Kendoka;
    private blogsIcon = BlogsIcon;
    private stylesIcon = StylesIcon;
    private tutorialsIcon = TutorialsIcon;

}
