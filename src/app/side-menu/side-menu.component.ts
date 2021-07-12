import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SideNavService } from '../side-nav.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  showSideNav: Observable<boolean>;

  @Input() sidenavTemplateRef: any;
  @Input() navWidth: number = window.innerWidth;

  constructor(private navService: SideNavService) {}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};

    navBarStyle.width = this.navWidth + 'px';
    navBarStyle = (showNav ? 0 : (this.navWidth * -1)) + 'px';

    return navBarStyle;
  }
}

