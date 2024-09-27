import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../../models/nav-link';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  navLinks?: NavLink[];

  ngOnInit(): void {
    // list the necessary navigation links
    this.navLinks = [
      new NavLink(
        1,
        "Home",
        ""
      )
    ]
  }
}
