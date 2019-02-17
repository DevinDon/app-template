import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { APPService } from 'src/app/service/app.service';

interface Link {
  active: boolean;
  url: string;
}

interface Links {
  [index: string]: Link;
  home: Link;
  about: Link;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  links: Links;

  constructor(
    public app: APPService,
    private router: Router
  ) {
    this.links = {
      home: {
        active: false,
        url: '/'
      },
      about: {
        active: false,
        url: '/about'
      }
    };
  }

  ngOnInit() {
    this.router.events.pipe(
      filter<NavigationEnd>(v => v instanceof NavigationEnd)
    ).subscribe(v => {
      for (const key in this.links) {
        if (this.links.hasOwnProperty(key)) {
          const link = this.links[key];
          if (v.urlAfterRedirects === link.url) {
            link.active = true;
          } else {
            link.active = false;
          }
        }
      }
    });
  }

  /**
   * Get link style.
   * @param link Link info.
   */
  getLinkStyle(link: Link) {
    return {
      'backgroundColor': link.active ? this.app.theme.accent : 'unset',
      'color': link.active ? '#fff' : '#000'
    };
  }

}
