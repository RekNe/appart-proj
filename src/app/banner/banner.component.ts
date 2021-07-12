
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {

  constructor(private SideNavService: SideNavService) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.SideNavService.setShowNav(true);
  }

}
