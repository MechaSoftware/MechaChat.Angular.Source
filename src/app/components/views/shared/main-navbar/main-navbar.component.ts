import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  @Input() currentPage: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
