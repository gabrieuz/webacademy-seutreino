import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaron',
  templateUrl: './navbaron.component.html',
  styleUrls: ['./navbaron.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbaronComponent implements OnInit {
  isMenuOpen: boolean = false;
  userInfor: any;
  constructor(
    public authService: AuthService,
    private router: Router,

  ) { }
  ngOnInit() {
    this.authService.getUserInfo()?.subscribe(data => {
      this.userInfor = data
      
    })
  }

  toggleNavbar() {
    const nav = document.getElementById('nav-bar');
    const icon = document.getElementById('header-toggle');

    if (nav && icon) {
      nav.classList.toggle('show-board');
      this.isMenuOpen = !this.isMenuOpen;

      if (this.isMenuOpen) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
      } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
      }
    }
  }

  closeNavbar() {
    const nav = document.getElementById('nav-bar');

    if (nav && nav.classList.contains('show-board')) {
      nav.classList.remove('show-board');
      this.isMenuOpen = false;
    }
  }
  navigateToProfessionalProfile(professionalId: number) {
    this.router.navigate(['navbaron', professionalId]);
  }
}
