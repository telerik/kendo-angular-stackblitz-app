import { Component } from '@angular/core';
import LinkedinIcon from '../../../assets/linkedin.svg';
import TwitterIcon from '../../../assets/twitter.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import YoutubeIcon from '../../../assets/youtube.svg';

@Component({
  selector: 'footer-component',
  template: `
    <div class='container-fluid footer'>
      <div class='d-flex'>
        <div>
          <div class='mb-2 links'>
            <a
              href='https://www.telerik.com/purchase/license-agreement/kendo-ui?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-angular-trial-sb-featured-app'
              >License Agreement</a
            >
          </div>
          <div class='copyright'>
            Copyright © 2019 Software Corporation and/or its subsidiaries or
            affiliates. All Rights Reserved.
          </div>
        </div>
        <div class='d-flex ml-auto'>
          <div class='social'>
            <a href='https://www.facebook.com/KendoUI/'>
              <svg-component [svg]='facebookIcon'></svg-component>
            </a>
            <a href='https://twitter.com/kendoangular'>
              <svg-component [svg]='twitterIcon'></svg-component>
            </a>
            <a href='https://www.youtube.com/results?search_query=kendoangular'
              >
              <svg-component [svg]='youtubeIcon'></svg-component>
            </a>
            <a href='https://www.linkedin.com/showcase/telerik/'
              >
              <svg-component [svg]='linkedinIcon'></svg-component>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FooterComponent {
  private linkedinIcon = LinkedinIcon;
  private twitterIcon = TwitterIcon;
  private facebookIcon = FacebookIcon;
  private youtubeIcon = YoutubeIcon;
}
